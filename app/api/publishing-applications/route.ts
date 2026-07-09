import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email/notifications";
import { createSupabaseRouteClient } from "@/lib/supabase/server";
import {
  asString,
  createdResponse,
  invalidRequest,
  isEmail,
  isManuscriptStatus,
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
  const bookTitle = asString(body.bookTitle);
  const genre = asString(body.genre);
  const manuscriptStatus = asString(body.manuscriptStatus);
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

  validateRequiredText(errors, "bookTitle", bookTitle, "Book title", 2, 180);
  validateRequiredText(errors, "genre", genre, "Genre", 2, 120);

  if (!isManuscriptStatus(manuscriptStatus)) {
    errors.manuscriptStatus = "Choose a manuscript status.";
  }

  validateRequiredText(errors, "message", message, "Message", 10, 1500);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(invalidRequest(errors), { status: 400 });
  }

  try {
    const supabase = createSupabaseRouteClient();
    const { error } = await supabase.from("publishing_applications").insert({
      name,
      email,
      phone,
      package_interested: packageInterested,
      book_title: bookTitle,
      genre,
      manuscript_status: manuscriptStatus,
      message,
      status: "new",
      source: "website",
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: "Could not submit publishing application.", errors: {} },
        { status: 500 },
      );
    }

    await sendLeadNotification({
      formName: "Publishing application",
      subject: "New publishing application",
      fields: {
        Name: name,
        Email: email,
        Phone: phone,
        "Package Interested": packageInterested,
        "Book Title": bookTitle,
        Genre: genre,
        "Manuscript Status": manuscriptStatus,
        Message: message,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not submit publishing application.", errors: {} },
      { status: 500 },
    );
  }

  return NextResponse.json(createdResponse("Your publishing application has been received."));
}
