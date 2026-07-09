import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email/notifications";
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

  const studentName = asString(body.studentName);
  const studentAge = Number(body.studentAge);
  const parentName = asString(body.parentName);
  const parentEmail = asString(body.parentEmail).toLowerCase();
  const parentPhone = asString(body.parentPhone);
  const bookIdea = asString(body.bookIdea);
  const message = asString(body.message);
  const errors: FieldErrors = {};

  validateRequiredText(errors, "studentName", studentName, "Student name", 2, 120);

  if (!Number.isInteger(studentAge) || studentAge < 5 || studentAge > 21) {
    errors.studentAge = "Enter a valid age between 5 and 21.";
  }

  validateRequiredText(errors, "parentName", parentName, "Parent name", 2, 120);

  if (!isEmail(parentEmail)) {
    errors.parentEmail = "Enter a valid parent email address.";
  }

  if (!isPhone(parentPhone)) {
    errors.parentPhone = "Enter a valid parent phone number.";
  }

  validateRequiredText(errors, "bookIdea", bookIdea, "Book idea", 10, 1500);
  validateRequiredText(errors, "message", message, "Message", 10, 1500);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(invalidRequest(errors), { status: 400 });
  }

  try {
    const supabase = createSupabaseRouteClient();
    const { error } = await supabase.from("young_author_applications").insert({
      student_name: studentName,
      student_age: studentAge,
      parent_name: parentName,
      parent_email: parentEmail,
      parent_phone: parentPhone,
      book_idea: bookIdea,
      message,
      status: "submitted",
      source: "website",
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: "Could not submit young author application.", errors: {} },
        { status: 500 },
      );
    }

    await sendLeadNotification({
      formName: "Young Author application",
      subject: "New Young Author application",
      fields: {
        "Student Name": studentName,
        "Student Age": studentAge,
        "Parent Name": parentName,
        "Parent Email": parentEmail,
        "Parent Phone": parentPhone,
        "Book Idea": bookIdea,
        Message: message,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not submit young author application.", errors: {} },
      { status: 500 },
    );
  }

  return NextResponse.json(createdResponse("The Young Author application has been received."));
}
