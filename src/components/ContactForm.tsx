"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { submitContactForm, type ContactField, type ContactFormState } from "@/app/actions/contact";
import { BUDGET_OPTIONS, PACKAGE_OPTIONS, type PackageValue } from "@/lib/contact-options";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 aria-[invalid=true]:border-red-400";

/* ---------- Icons ---------- */

type IconProps = { className?: string };

const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function RocketIcon({ className }: IconProps) {
  return (
    <svg className={className} {...iconBase}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="M12 15 9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg className={className} {...iconBase}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" />
    </svg>
  );
}

function CrownIcon({ className }: IconProps) {
  return (
    <svg className={className} {...iconBase}>
      <path d="m2 7 4.5 4L12 4l5.5 7L22 7l-2 12H4L2 7Z" />
    </svg>
  );
}

function SlidersIcon({ className }: IconProps) {
  return (
    <svg className={className} {...iconBase}>
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...iconBase} strokeWidth={3}>
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

const PACKAGE_ICONS: Record<PackageValue, (props: IconProps) => React.JSX.Element> = {
  starter: RocketIcon,
  business: BriefcaseIcon,
  premium: CrownIcon,
  individuell: SlidersIcon,
};

/* ---------- Bausteine ---------- */

function Spinner() {
  return (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} className="opacity-25" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-red-600">
      {message}
    </p>
  );
}

function PackagePicker({ defaultValue, error }: { defaultValue?: string; error?: string }) {
  return (
    <fieldset className="sm:col-span-2" aria-describedby={error ? "package-error" : undefined}>
      <legend className="mb-3 block text-sm font-medium text-slate-700">Welches Paket interessiert Sie?</legend>
      <div className="grid grid-cols-2 gap-3">
        {PACKAGE_OPTIONS.map((option) => {
          const Icon = PACKAGE_ICONS[option.value];
          return (
            <label
              key={option.value}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:z-10 hover:scale-105 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/15 active:scale-[1.02] has-checked:border-blue-600 has-checked:bg-slate-900 has-checked:shadow-[0_0_0_1px_var(--color-blue-600),0_12px_40px_-8px_rgb(37_99_235/0.65)] has-focus-visible:ring-2 has-focus-visible:ring-blue-500 has-focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <input
                type="radio"
                name="package"
                value={option.value}
                required
                defaultChecked={defaultValue === option.value}
                className="sr-only"
              />

              {/* Weicher Glow im aktiven Zustand */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-600/40 opacity-0 blur-2xl transition-opacity duration-500 group-has-checked:opacity-100"
              />

              {/* Häkchen ploppt beim Auswählen auf */}
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 flex h-6 w-6 scale-0 items-center justify-center rounded-full bg-blue-600 text-white opacity-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-has-checked:scale-100 group-has-checked:opacity-100"
              >
                <CheckIcon className="h-3.5 w-3.5" />
              </span>

              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:rotate-[-6deg] group-has-checked:bg-blue-600 group-has-checked:text-white group-has-checked:shadow-lg group-has-checked:shadow-blue-600/40 motion-reduce:group-hover:rotate-0">
                <Icon className="h-5 w-5" />
              </span>
              <span className="relative mt-3 block font-semibold text-slate-900 transition-colors group-has-checked:text-white">
                {option.label}
              </span>
              <span className="relative block text-xs text-slate-500 transition-colors group-has-checked:text-slate-300">
                {option.tagline}
              </span>
              <span className="relative mt-2 block text-sm font-semibold text-blue-600 transition-colors group-has-checked:text-blue-400">
                {option.price}
              </span>
            </label>
          );
        })}
      </div>
      <FieldError id="package-error" message={error} />
    </fieldset>
  );
}

function BudgetSlider({ index, onChange }: { index: number; onChange: (index: number) => void }) {
  const max = BUDGET_OPTIONS.length - 1;
  const current = BUDGET_OPTIONS[index];
  const percent = (index / max) * 100;

  return (
    <div className="sm:col-span-2">
      <div className="mb-3 flex items-center justify-between gap-4">
        <label htmlFor="budget-range" className="text-sm font-medium text-slate-700">
          Ungefähres Budget
        </label>
        {/* key erzwingt Neu-Mount → @starting-style-Animation bei jeder Änderung */}
        <span
          key={current.value}
          className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 starting:scale-75 starting:opacity-0"
        >
          {current.label}
        </span>
      </div>

      <input type="hidden" name="budget" value={current.value} />
      <input
        id="budget-range"
        type="range"
        min={0}
        max={max}
        step={1}
        value={index}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-valuetext={current.label}
        style={{ background: `linear-gradient(to right, var(--color-blue-600) ${percent}%, var(--color-slate-200) ${percent}%)` }}
        className="h-2 w-full cursor-pointer appearance-none rounded-full focus:outline-none [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:shadow-[0_0_0_1px_var(--color-blue-600),0_4px_14px_rgb(37_99_235/0.5)] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_var(--color-blue-600),0_4px_14px_rgb(37_99_235/0.5)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 hover:[&::-webkit-slider-thumb]:scale-110 focus-visible:[&::-webkit-slider-thumb]:ring-4 focus-visible:[&::-webkit-slider-thumb]:ring-blue-500/30 active:[&::-webkit-slider-thumb]:scale-125"
      />

      <div className="mt-3 hidden justify-between sm:flex" aria-hidden="true">
        {BUDGET_OPTIONS.map((option, i) => (
          <button
            key={option.value}
            type="button"
            tabIndex={-1}
            onClick={() => onChange(i)}
            className={`text-xs transition-colors ${i === index ? "font-semibold text-blue-600" : "text-slate-400 hover:text-slate-700"}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Formular ---------- */

const DEFAULT_BUDGET_INDEX = 0;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const [budgetIndex, setBudgetIndex] = useState(DEFAULT_BUDGET_INDEX);

  // Nach erfolgreichem Absenden auch den (kontrollierten) Slider zurücksetzen.
  // Felder ohne State setzt React nach der Action automatisch zurück.
  const [handledState, setHandledState] = useState(state);
  if (state !== handledState) {
    setHandledState(state);
    if (state.status === "success") setBudgetIndex(DEFAULT_BUDGET_INDEX);
  }

  const fieldProps = (field: ContactField) => ({
    name: field,
    id: field,
    defaultValue: state.values?.[field] ?? "",
    "aria-invalid": Boolean(state.errors?.[field]),
    "aria-describedby": state.errors?.[field] ? `${field}-error` : undefined,
    className: inputClass,
  });

  return (
    <form
      action={formAction}
      className="grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:grid-cols-2"
    >
      {state.status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 transition-all duration-500 starting:-translate-y-2 starting:opacity-0 sm:col-span-2"
        >
          <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="m8 12 3 3 5-6" />
          </svg>
          <p className="text-sm font-medium">{state.message}</p>
        </div>
      )}

      {state.status === "error" && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700 transition-all duration-500 starting:-translate-y-2 starting:opacity-0 sm:col-span-2">
          {state.message}
        </div>
      )}

      {/* Honeypot gegen Spam-Bots – für Menschen unsichtbar */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>

      <PackagePicker defaultValue={state.values?.package} error={state.errors?.package} />
      <BudgetSlider index={budgetIndex} onChange={setBudgetIndex} />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Name</label>
        <input type="text" required maxLength={100} autoComplete="name" placeholder="Max Mustermann" {...fieldProps("name")} />
        <FieldError id="name-error" message={state.errors?.name} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
          Telefonnummer <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input type="tel" maxLength={30} autoComplete="tel" placeholder="+49 …" {...fieldProps("phone")} />
        <FieldError id="phone-error" message={state.errors?.phone} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">E-Mail</label>
        <input type="email" required maxLength={254} autoComplete="email" placeholder="mail@beispiel.de" {...fieldProps("email")} />
        <FieldError id="email-error" message={state.errors?.email} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Nachricht</label>
        <textarea rows={5} required minLength={10} maxLength={5000} placeholder="Beschreiben Sie kurz Ihr Projekt …" {...fieldProps("message")} />
        <FieldError id="message-error" message={state.errors?.message} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <Spinner />
              Wird gesendet …
            </>
          ) : (
            "Anfrage senden"
          )}
        </button>
        <p className="mt-3 text-center text-xs text-slate-500">
          Mit dem Absenden stimmen Sie der Datenverarbeitung gemäß unserer{" "}
          <Link href="/datenschutz" className="underline hover:text-slate-900">Datenschutzerklärung</Link> zu.
        </p>
      </div>
    </form>
  );
}
