"use client";

import { FormEvent, useMemo, useState } from "react";

import { contactServiceOptions } from "@/content/site-content";

type FieldErrors = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: contactServiceOptions[0],
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isDisabled = useMemo(() => status === "submitting", [status]);

  function validate(values: FormState): FieldErrors {
    const nextErrors: FieldErrors = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.company.trim()) nextErrors.company = "Company is required.";

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm(initialState);
      setErrors({});
      setStatus("success");
      setStatusMessage("Your request was submitted successfully. ODIN team will contact you soon.");
    } catch {
      setStatus("error");
      setStatusMessage("Submission failed. Please try again or email hello@odin-ltd.com.");
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form className="surface p-6 md:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-silver" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-xl border border-stroke bg-bg/70 px-4 py-3 text-sm text-text outline-none transition focus:border-blue"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-red-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-silver" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="w-full rounded-xl border border-stroke bg-bg/70 px-4 py-3 text-sm text-text outline-none transition focus:border-blue"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company ? (
            <p id="company-error" className="mt-1 text-xs text-red-300">
              {errors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-silver" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-xl border border-stroke bg-bg/70 px-4 py-3 text-sm text-text outline-none transition focus:border-blue"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-red-300">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-silver" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-xl border border-stroke bg-bg/70 px-4 py-3 text-sm text-text outline-none transition focus:border-blue"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-silver" htmlFor="service">
            Service interest
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="w-full rounded-xl border border-stroke bg-bg/70 px-4 py-3 text-sm text-text outline-none transition focus:border-blue"
          >
            {contactServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-silver" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
            className="w-full rounded-xl border border-stroke bg-bg/70 px-4 py-3 text-sm text-text outline-none transition focus:border-blue"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-xs text-red-300">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isDisabled}
          className="inline-flex items-center justify-center rounded-2xl border border-blue bg-blue px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Send Request"}
        </button>

        {statusMessage ? (
          <p className={`text-sm ${status === "success" ? "text-emerald-300" : "text-red-300"}`}>{statusMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
