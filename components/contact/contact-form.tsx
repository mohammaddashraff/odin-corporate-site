"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Arrow } from "@/components/ui/button-link";
import { solutions } from "@/content/solutions";
import { siteConfig } from "@/lib/site";
type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};
type FieldErrors = Partial<Record<keyof FormValues, string>>;
const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const { isArabic: ar, t } = useLanguage();
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [draft, setDraft] = useState<{ url: string; body: string } | null>(
    null,
  );
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get(
      "solution",
    );
    if (solutions.some((solution) => solution.slug === selected))
      setForm((values) => ({ ...values, service: selected! }));
  }, []);
  function update(key: keyof FormValues, value: string) {
    setForm((values) => ({ ...values, [key]: value }));
    setDraft(null);
    setCopied(false);
    setCopyError(false);
    setErrors((current) => ({ ...current, [key]: undefined }));
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FieldErrors = {};
    if (!form.name.trim())
      nextErrors.name = ar ? "اكتب اسمك." : "Please enter your name.";
    if (!form.company.trim())
      nextErrors.company = ar
        ? "اكتب اسم الشركة أو المشروع."
        : "Please enter your company or project name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      nextErrors.email = ar
        ? "اكتب بريد إلكتروني صحيح."
        : "Please enter a valid email address.";
    if (!form.message.trim())
      nextErrors.message = ar
        ? "احكيلنا عن مشروعك."
        : "Tell us a little about your project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const service = solutions.find(
      (solution) => solution.slug === form.service,
    );
    const interest = service
      ? t(service.name)
      : ar
        ? "حل مخصص / لسه بنحدد"
        : "Custom software / Let's work it out";
    const body = ar
      ? `الاسم: ${form.name.trim()}\nالشركة أو المشروع: ${form.company.trim()}\nالبريد: ${form.email.trim()}\nالهاتف: ${form.phone.trim()}\nالحل المطلوب: ${interest}\n\nعن المشروع:\n${form.message.trim()}`
      : `Name: ${form.name.trim()}\nCompany / project: ${form.company.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim()}\nInterested in: ${interest}\n\nAbout the project:\n${form.message.trim()}`;
    const subject = ar
      ? `مشروع جديد — ${form.company.trim()}`
      : `Project inquiry — ${form.company.trim()}`;
    setDraft({
      url: `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      body,
    });
  }
  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  const fields: {
    key: "name" | "company" | "email" | "phone";
    label: string;
    type: string;
    autocomplete: string;
    required: boolean;
  }[] = [
    {
      key: "name",
      label: ar ? "اسمك" : "Your name",
      type: "text",
      autocomplete: "name",
      required: true,
    },
    {
      key: "company",
      label: ar ? "الشركة أو المشروع" : "Company / project",
      type: "text",
      autocomplete: "organization",
      required: true,
    },
    {
      key: "email",
      label: ar ? "البريد الإلكتروني" : "Email address",
      type: "email",
      autocomplete: "email",
      required: true,
    },
    {
      key: "phone",
      label: ar ? "الهاتف (اختياري)" : "Phone (optional)",
      type: "tel",
      autocomplete: "tel",
      required: false,
    },
  ];
  return (
    <form ref={formRef} className="contact-form" onSubmit={prepare} noValidate>
      <div className="form-grid">
        {fields.map((field) => (
          <div key={field.key}>
            <label htmlFor={field.key}>
              {field.label}
              {field.required && <span aria-hidden="true"> *</span>}
            </label>
            <input
              id={field.key}
              name={field.key}
              type={field.type}
              autoComplete={field.autocomplete}
              required={field.required}
              maxLength={field.key === "email" ? 254 : 100}
              value={form[field.key]}
              onChange={(event) => update(field.key, event.target.value)}
              dir={
                field.type === "email" || field.type === "tel"
                  ? "ltr"
                  : undefined
              }
              aria-invalid={Boolean(errors[field.key])}
              aria-describedby={
                errors[field.key] ? `${field.key}-error` : undefined
              }
            />
            {errors[field.key] && (
              <p className="form-error" id={`${field.key}-error`}>
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}
        <div className="form-wide">
          <label htmlFor="service">
            {ar ? "إيه الحل اللي محتاجه؟" : "What can we help you with?"}
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
          >
            <option value="">
              {ar
                ? "حل مخصص / لسه بنحدد"
                : "Custom software / Let's work it out"}
            </option>
            {solutions.map((solution) => (
              <option key={solution.slug} value={solution.slug}>
                {t(solution.name)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-wide">
          <label htmlFor="message">
            {ar ? "احكيلنا عن مشروعك" : "Tell us about your project"}{" "}
            <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={3000}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder={
              ar
                ? "إيه اللي محتاج تبنيه أو تحسّنه؟ مين هيستخدمه؟"
                : "What do you need to build or improve? Who is it for?"
            }
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="form-error">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <p className="form-notice">
        {ar
          ? "هنجهز لك رسالة تراجعها وتبعتها من تطبيق البريد بتاعك. بياناتك مش بتتبعت بمجرد ملء النموذج."
          : "We'll prepare an email for you to review and send from your email app. Filling in this form doesn't send your information."}{" "}
        <Link className="text-link" href="/privacy">
          {ar ? "الخصوصية" : "Privacy"}
        </Link>
      </p>
      <button type="submit" className="button button-primary">
        {ar ? "جهّز رسالة المشروع" : "Prepare project email"}
        <Arrow />
      </button>
      {draft && (
        <div className="form-feedback" role="status">
          <p>
            {ar
              ? "الرسالة جاهزة، ولسه متبعتتش. افتح البريد وراجعها واضغط إرسال."
              : "Your email is ready, but hasn't been sent. Open your email app, review it, and press Send."}
          </p>
          <a className="button button-secondary mt-4" href={draft.url}>
            {ar ? "افتح تطبيق البريد" : "Open email app"}
            <Arrow />
          </a>
          <button type="button" className="text-link mt-4" onClick={copyDraft}>
            {copied
              ? ar
                ? "تم نسخ تفاصيل المشروع"
                : "Project details copied"
              : ar
                ? "انسخ التفاصيل بدلًا من كده"
                : "Copy details instead"}
          </button>
          {copyError && (
            <>
              <p>
                {ar
                  ? "انسخ التفاصيل من هنا وأرسلها إلى"
                  : "Copy the details below and email"}{" "}
                <span dir="ltr">{siteConfig.email}</span>.
              </p>
              <textarea
                aria-label={
                  ar ? "تفاصيل المشروع للنسخ" : "Project details to copy"
                }
                value={draft.body}
                readOnly
                rows={8}
                onFocus={(event) => event.target.select()}
              />
            </>
          )}
        </div>
      )}
    </form>
  );
}

export function ContactPageContent() {
  const { isArabic: ar } = useLanguage();
  return (
    <Container className="contact-layout">
      <div className="contact-aside">
        <h1>
          {ar ? (
            <>
              فكرتك الجاية.
              <br />
              نبدأها مع بعض.
            </>
          ) : (
            <>
              Your next idea.
              <br />
              Let&apos;s make it happen.
            </>
          )}
        </h1>
        <p>
          {ar
            ? "احكيلنا عن شغلك وإيه اللي محتاج تبنيه أو تحسّنه. من نظام لإدارة شركتك لتطبيق جديد، البداية من هنا."
            : "Tell us about your business and what you need to build or improve. From an internal system to a new app, this is where it starts."}
        </p>
        <a
          className="contact-email"
          href={`mailto:${siteConfig.email}`}
          dir="ltr"
        >
          {siteConfig.email}
        </a>
        <div className="contact-expectations">
          <h2>{ar ? "نبدأ منين؟" : "A few good starting points"}</h2>
          <ul>
            <li>
              {ar
                ? "المشكلة أو الفكرة اللي عايز تشتغل عليها"
                : "The problem or idea you want to work on"}
            </li>
            <li>
              {ar
                ? "مين هيستخدم النظام أو التطبيق"
                : "Who will use the system or application"}
            </li>
            <li>
              {ar
                ? "الأدوات الحالية وأي مواعيد مهمة"
                : "Existing tools and any timing constraints"}
            </li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </Container>
  );
}
