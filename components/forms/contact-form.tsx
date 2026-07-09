"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  initialFormResponse,
  submitJsonForm,
  type ApiFormResponse,
} from "@/components/forms/form-types";

const inputClass = "min-h-12 w-full rounded-lg border border-gold/20 bg-black/50 px-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-gold focus:ring-2 focus:ring-gold/20";

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-sm font-medium text-red-300">{message}</p> : null;
}

export function ContactForm() {
  const [state, setState] = useState<ApiFormResponse>(initialFormResponse);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const result = await submitJsonForm("/api/contacts", new FormData(form));
    setState(result);
    setIsSubmitting(false);

    if (result.ok) {
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury sm:p-8" noValidate>
      <h3 className="font-editorial text-3xl leading-tight text-cream">General enquiry</h3>
      <p className="mt-3 leading-7 text-cream/64">Send a quick message if you are exploring services or need help choosing a path.</p>

      {state.message ? (
        <div className={`mt-6 rounded-lg border p-4 ${state.ok ? "border-green-300/30 bg-green-950/40 text-green-100" : "border-red-300/30 bg-red-950/40 text-red-100"}`} role="status" aria-live="polite">
          <div className="flex gap-3">
            {state.ok ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /> : null}
            <p className="text-sm font-semibold">{state.message}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Name</span>
          <input name="name" required autoComplete="name" className={inputClass} />
          <FieldError message={state.errors.name} />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Email</span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
          <FieldError message={state.errors.email} />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
          <FieldError message={state.errors.phone} />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-cream">Interest</span>
          <select name="interest" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select interest</option>
            <option>Book publishing</option>
            <option>Ghostwriting</option>
            <option>Editing and proofreading</option>
            <option>Author branding</option>
            <option>Young Author Programme</option>
            <option>PR and book launch</option>
          </select>
          <FieldError message={state.errors.interest} />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-cream">Message</span>
          <textarea name="message" required className={`${inputClass} min-h-32 py-3`} />
          <FieldError message={state.errors.message} />
        </label>
      </div>

      <button disabled={isSubmitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black shadow-gold transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Submitting</> : <><Send className="h-4 w-4" />Submit Enquiry</>}
      </button>
    </form>
  );
}
