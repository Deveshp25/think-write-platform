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
  { label: "Young Author Programme - Rs. 19,999", value: "young_author_programme" },
  { label: "Author Pro - Rs. 34,999", value: "author_pro" },
  { label: "Legacy Author - Rs. 74,999", value: "legacy_author" },
];

const inputClass = "min-h-12 w-full rounded-lg border border-gold/20 bg-black/50 px-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-gold focus:ring-2 focus:ring-gold/20";

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-sm font-medium text-red-300">{message}</p> : null;
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
    <form onSubmit={handleSubmit} className="rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury sm:p-8" noValidate>
      {state.message ? (
        <div className={`mb-6 rounded-lg border p-4 ${state.ok ? "border-green-300/30 bg-green-950/40 text-green-100" : "border-red-300/30 bg-red-950/40 text-red-100"}`} role="status" aria-live="polite">
          <div className="flex gap-3">
            {state.ok ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /> : null}
            <p className="text-sm font-semibold">{state.message}</p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Name</span>
          <input name="name" autoComplete="name" required className={inputClass} />
          <FieldError message={state.errors.name} />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Email</span>
          <input name="email" type="email" autoComplete="email" required className={inputClass} />
          <FieldError message={state.errors.email} />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required className={inputClass} />
          <FieldError message={state.errors.phone} />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Package Interested</span>
          <select name="packageInterested" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select a package</option>
            {packageOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
          <FieldError message={state.errors.packageInterested} />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-cream">Preferred Date</span>
          <input name="preferredDate" type="date" required className={inputClass} />
          <FieldError message={state.errors.preferredDate} />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-cream">Message</span>
          <textarea name="message" required className={`${inputClass} min-h-36 py-3`} placeholder="Tell us about your book idea, manuscript stage, and what you want help with." />
          <FieldError message={state.errors.message} />
        </label>
      </div>

      <button disabled={isSubmitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black shadow-gold transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Submitting</> : <><CalendarCheck className="h-4 w-4" />Book Consultation</>}
      </button>
    </form>
  );
}
