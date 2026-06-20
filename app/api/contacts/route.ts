import { NextResponse } from "next/server";
import { createSupabaseRouteClient } from "@/lib/supabase/server";
import {
  asString,
  createdResponse,
  invalidRequest,
  isEmail,
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
  const interest = asString(body.interest);
  const message = asString(body.message);
  const errors: FieldErrors = {};

  validateRequiredText(errors, "name", name, "Name", 2, 120);

  if (!isEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!isPhone(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  validateRequiredText(errors, "interest", interest, "Interest", 2, 120);
  validateRequiredText(errors, "message", message, "Message", 10, 1000);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(invalidRequest(errors), { status: 400 });
  }

  try {
    const supabase = createSupabaseRouteClient();
    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      phone,
      interest,
      message,
      source: "website",
      status: "new",
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: "Could not submit contact enquiry.", errors: {} },
        { status: 500 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not submit contact enquiry.", errors: {} },
      { status: 500 },
    );
  }

  return NextResponse.json(createdResponse("Your enquiry has been received."));
}
