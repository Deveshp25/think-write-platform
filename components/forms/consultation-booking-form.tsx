"use client";

import { type FormEvent, useState } from "react";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import {
  initialFormResponse,
  submitJsonForm,
  type ApiFormResponse,
} from "@/components/forms/form-types";

const packageOptions = [
  { label: "Launchpad - Rs. 14,999", value: "launchpad" },
  { label: "Author Pro - Rs. 34,999", value: "author_pro" },
  { label: "Legacy Author - Rs. 74,999", value: "legacy_author" },
  { label: "Young Author Programme - Rs. 19,999", value: "young_author_programme" },
];

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-sm font-medium text-red-600">{message}</p> : null;
}

export function ConsultationBookingForm() {
  const [state, setState] = useState<ApiFormResponse>(initialFormResponse);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const result = await submitJsonForm("/api/consultation-bookings", new FormData(form));
    setState(result);
    setIsSubmitting(false);

    if (result.ok) {
      form.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-navy/8 bg-white p-6 shadow-premium sm:p-8"
      noValidate
    >
      {state.message ? (
        <div
          className={`mb-6 rounded-lg border p-4 ${
            state.ok
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="flex gap-3">
            {state.ok ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /> : null}
            <p className="text-sm font-semibold">{state.message}</p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-navy">Name</span>
          <input
            name="name"
            autoComplete="name"
            required
            className="min-h-12 w-full rounded-lg border border-navy/12 px-4 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
          <FieldError message={state.errors.name} />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-navy">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-h-12 w-full rounded-lg border border-navy/12 px-4 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
          <FieldError message={state.errors.email} />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-navy">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="min-h-12 w-full rounded-lg border border-navy/12 px-4 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
          <FieldError message={state.errors.phone} />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-navy">Package Interested</span>
          <select
            name="packageInterested"
            required
            defaultValue=""
            className="min-h-12 w-full rounded-lg border border-navy/12 bg-white px-4 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          >
            <option value="" disabled>
              Select a package
            </option>
            {packageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FieldError message={state.errors.packageInterested} />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-navy">Preferred Date</span>
          <input
            name="preferredDate"
            type="date"
            required
            className="min-h-12 w-full rounded-lg border border-navy/12 px-4 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
          <FieldError message={state.errors.preferredDate} />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-navy">Message</span>
          <textarea
            name="message"
            required
            className="min-h-36 w-full rounded-lg border border-navy/12 px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
            placeholder="Tell us about your book idea, manuscript stage, and what you want help with."
          />
          <FieldError message={state.errors.message} />
        </label>
      </div>

      <button
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold transition hover:bg-[#e2c250] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting
          </>
        ) : (
          <>
            <CalendarCheck className="h-4 w-4" />
            Book Free Consultation
          </>
        )}
      </button>
    </form>
  );
}
