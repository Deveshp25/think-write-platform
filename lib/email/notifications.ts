import { brand } from "@/lib/content/site";

type LeadNotificationPayload = {
  formName: string;
  subject: string;
  fields: Record<string, string | number | null | undefined>;
};

const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || brand.email;
const fromEmail =
  process.env.LEAD_NOTIFICATION_FROM_EMAIL ||
  "Think & Write Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatRows(fields: LeadNotificationPayload["fields"]) {
  return Object.entries(fields)
    .map(([label, value]) => {
      const normalized = value === null || value === undefined ? "" : String(value);
      return `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(
        label,
      )}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(
        normalized,
      )}</td></tr>`;
    })
    .join("");
}

export async function sendLeadNotification({
  formName,
  subject,
  fields,
}: LeadNotificationPayload) {
  if (!resendApiKey) {
    return { ok: true, skipped: true };
  }

  const text = [
    `${formName} submission`,
    "",
    ...Object.entries(fields).map(([label, value]) => `${label}: ${value ?? ""}`),
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notificationEmail,
        subject,
        text,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;"><h2>${escapeHtml(
          formName,
        )} submission</h2><table style="border-collapse:collapse;">${formatRows(
          fields,
        )}</table></div>`,
      }),
    });

    return { ok: response.ok, skipped: false };
  } catch {
    return { ok: false, skipped: false };
  }
}
