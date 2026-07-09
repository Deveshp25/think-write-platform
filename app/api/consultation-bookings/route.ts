import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email/notifications";
import { createSupabaseRouteClient } from "@/lib/supabase/server";
import {
  asString,
  createdResponse,
  invalidRequest,
  isEmail,
  isFutureDate,
  isPackageValue,
  isPhone,
  validateRequiredText,
  type FieldErrors,
} from "@/lib/validation/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(invalidRequest({ form: "Invalid request body." }), { status: 400 });
  }

  const name = asString(body.name);
  const email = asString(body.email).toLowerCase();
  const phone = asString(body.phone);
  const packageInterested = asString(body.packageInterested);
  const preferredDate = asString(body.preferredDate);
  const message = asString(body.message);
  const errors: FieldErrors = {};

  validateRequiredText(errors, "name", name, "Name", 2, 120);

  if (!isEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!isPhone(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!isPackageValue(packageInterested)) {
    errors.packageInterested = "Choose a package.";
  }

  if (!isFutureDate(preferredDate)) {
    errors.preferredDate = "Choose today or a future date.";
  }

  validateRequiredText(errors, "message", message, "Message", 10, 1000);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(invalidRequest(errors), { status: 400 });
  }

  try {
    const supabase = createSupabaseRouteClient();
    const { error } = await supabase.from("consultation_bookings").insert({
      name,
      email,
      phone,
      package_interested: packageInterested,
      preferred_date: preferredDate,
      message,
      source: "website",
      status: "new",
      user_agent: request.headers.get("user-agent"),
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: "Could not submit consultation booking.", errors: {} },
        { status: 500 },
      );
    }

    await sendLeadNotification({
      formName: "Consultation booking",
      subject: "New consultation booking",
      fields: {
        Name: name,
        Email: email,
        Phone: phone,
        "Package Interested": packageInterested,
        "Preferred Date": preferredDate,
        Message: message,
        "User Agent": request.headers.get("user-agent"),
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not submit consultation booking.", errors: {} },
      { status: 500 },
    );
  }

  return NextResponse.json(
    createdResponse("Your consultation request has been received. Our team will contact you shortly."),
  );
}
