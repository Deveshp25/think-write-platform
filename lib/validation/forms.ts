export type FieldErrors = Record<string, string>;

export const packageValues = [
  "launchpad",
  "author_pro",
  "legacy_author",
  "young_author_programme",
] as const;

export const manuscriptStatuses = [
  "idea_stage",
  "outline_ready",
  "partially_written",
  "first_draft_ready",
  "edited_manuscript",
] as const;

export type PackageValue = (typeof packageValues)[number];
export type ManuscriptStatus = (typeof manuscriptStatuses)[number];

export function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isPhone(value: string) {
  const normalized = value.replace(/[^\d+]/g, "");
  return normalized.length >= 8 && normalized.length <= 16;
}

export function isFutureDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const selected = new Date(`${value}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return !Number.isNaN(selected.getTime()) && selected >= today;
}

export function isPackageValue(value: string): value is PackageValue {
  return packageValues.includes(value as PackageValue);
}

export function isManuscriptStatus(value: string): value is ManuscriptStatus {
  return manuscriptStatuses.includes(value as ManuscriptStatus);
}

export function validateRequiredText(
  errors: FieldErrors,
  field: string,
  value: string,
  label: string,
  min = 2,
  max = 1000,
) {
  if (value.length < min || value.length > max) {
    errors[field] = `${label} must be between ${min} and ${max} characters.`;
  }
}

export function invalidRequest(errors: FieldErrors) {
  return {
    ok: false,
    message: "Please fix the highlighted fields.",
    errors,
  };
}

export function createdResponse(message: string) {
  return {
    ok: true,
    message,
    errors: {},
  };
}
