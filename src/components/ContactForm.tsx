"use client";

import { useId, useState, type FormEvent, type InputHTMLAttributes } from "react";
import { site } from "@/content/site";
import { isPlaceholder } from "@/lib/placeholder";
import { Check } from "./Icons";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; via: "form" | "email" }
  | { state: "error"; message: string };

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: { name: string; email: string; message: string }) {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (data.message.trim().length < 10)
    errors.message = "Please write a message of at least 10 characters.";
  return errors;
}

/**
 * Contact form. Posts JSON to `site.formEndpoint` (Formspree-compatible) when
 * configured; otherwise opens the visitor's email app with a pre-filled draft.
 */
export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (fd.get("company_website")) return;

    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (!site.formEndpoint) {
      if (isPlaceholder(site.email)) {
        setStatus({
          state: "error",
          message:
            "The contact form isn't connected yet. Add your email address in src/content/site.ts.",
        });
        return;
      }
      const subject = `Hello from ${data.name}${data.company ? ` (${data.company})` : ""}`;
      const body = `${data.message}\n\n— ${data.name}\n${data.email}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ state: "sent", via: "email" });
      return;
    }

    setStatus({ state: "sending" });
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      setStatus({ state: "sent", via: "form" });
    } catch {
      setStatus({
        state: "error",
        message: "Something went wrong sending your message. Please try again or email me directly.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Check />
        </span>
        <h2 className="mt-4 text-2xl font-medium">
          {status.via === "form" ? "Thanks — message sent." : "Your email app should be opening."}
        </h2>
        <p className="mt-2 text-muted">
          {status.via === "form"
            ? "I'll get back to you as soon as I can."
            : "If nothing happened, you can email me directly using the address on this page."}
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-xl border bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-accent";

  const input = (name: keyof Errors | "company", label: string, props: InputHTMLAttributes<HTMLInputElement>, optional = false) => {
    const err = name !== "company" ? errors[name] : undefined;
    return (
      <div>
        <label htmlFor={`${id}-${name}`} className="text-sm font-semibold">
          {label} {optional && <span className="font-normal text-muted">(optional)</span>}
        </label>
        <input
          id={`${id}-${name}`}
          name={name}
          aria-invalid={err ? true : undefined}
          aria-describedby={err ? `${id}-${name}-error` : undefined}
          className={`${field} ${err ? "border-signal" : "border-line-strong"}`}
          {...props}
        />
        {err && (
          <p id={`${id}-${name}-error`} className="mt-1.5 text-sm text-signal">
            {err}
          </p>
        )}
      </div>
    );
  };

  return (
    <form noValidate onSubmit={onSubmit} className="relative space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {input("name", "Name", { type: "text", autoComplete: "name", required: true })}
        {input("email", "Email", { type: "email", autoComplete: "email", required: true })}
      </div>
      {input("company", "Company", { type: "text", autoComplete: "organization" }, true)}
      <div>
        <label htmlFor={`${id}-message`} className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          placeholder="Tell me about the role, team or project."
          className={`${field} resize-y ${errors.message ? "border-signal" : "border-line-strong"}`}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className="mt-1.5 text-sm text-signal">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field for bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite">
        {status.state === "error" && (
          <p role="alert" className="rounded-xl bg-signal/10 px-4 py-3 text-sm text-signal">
            {status.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
      >
        {status.state === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
