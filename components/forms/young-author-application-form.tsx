"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, GraduationCap, Loader2 } from "lucide-react";
import {
  initialFormResponse,
  submitJsonForm,
  type ApiFormResponse,
} from "@/components/forms/form-types";

const inputClass = "min-h-12 w-full rounded-lg border border-gold/20 bg-black/50 px-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-gold focus:ring-2 focus:ring-gold/20";

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-sm font-medium text-red-300">{message}</p> : null;
}

export function YoungAuthorApplicationForm() {
  const [state, setState] = useState<ApiFormResponse>(initialFormResponse);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const result = await submitJsonForm("/api/young-author-applications", new FormData(form));
    setState(result);
    setIsSubmitting(false);

    if (result.ok) {
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury sm:p-8" noValidate>
      <h3 className="font-editorial text-3xl leading-tight text-cream">Young Author application</h3>
      <p className="mt-3 leading-7 text-cream/64">Share student and parent details so the team can review programme fit.</p>

      {state.message ? (
        <div className={`mt-6 rounded-lg border p-4 ${state.ok ? "border-green-300/30 bg-green-950/40 text-green-100" : "border-red-300/30 bg-red-950/40 text-red-100"}`} role="status" aria-live="polite">
          <div className="flex gap-3">
            {state.ok ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /> : null}
            <p className="text-sm font-semibold">{state.message}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="space-y-2"><span className="text-sm font-semibold text-cream">Student Name</span><input name="studentName" required className={inputClass} /><FieldError message={state.errors.studentName} /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-cream">Student Age</span><input name="studentAge" type="number" min={5} max={21} required className={inputClass} /><FieldError message={state.errors.studentAge} /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-cream">Parent Name</span><input name="parentName" required className={inputClass} /><FieldError message={state.errors.parentName} /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-cream">Parent Email</span><input name="parentEmail" type="email" required className={inputClass} /><FieldError message={state.errors.parentEmail} /></label>
        <label className="space-y-2 sm:col-span-2"><span className="text-sm font-semibold text-cream">Parent Phone</span><input name="parentPhone" type="tel" required className={inputClass} /><FieldError message={state.errors.parentPhone} /></label>
        <label className="space-y-2 sm:col-span-2"><span className="text-sm font-semibold text-cream">Book Idea</span><textarea name="bookIdea" required className={`${inputClass} min-h-32 py-3`} /><FieldError message={state.errors.bookIdea} /></label>
        <label className="space-y-2 sm:col-span-2"><span className="text-sm font-semibold text-cream">Message</span><textarea name="message" required className={`${inputClass} min-h-32 py-3`} /><FieldError message={state.errors.message} /></label>
      </div>

      <button disabled={isSubmitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black shadow-gold transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Submitting</> : <><GraduationCap className="h-4 w-4" />Submit Application</>}
      </button>
    </form>
  );
}
