"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { BrandLockup, OdinMark } from "@/components/ui/logo";
import { Arrow } from "@/components/ui/button-link";
import { copy, type Solution } from "@/content/solutions";

const iconPaths: Record<string, string> = {
  erp: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  hr: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M15 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  crm: "M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.4 8.4 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5ZM8 10h8M8 14h5",
  lms: "M3 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H3zM21 4h-6a3 3 0 0 0-3 3v14a4 4 0 0 1 4-2h5z",
  education: "m2 8 10-5 10 5-10 5L2 8Zm4 3v6l6 3 6-3v-6M22 8v7",
  "mobile-apps":
    "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM10 5h4M11 18h2",
};

export function SolutionIcon({ slug }: { slug: string }) {
  return (
    <svg
      className="solution-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[slug] ?? iconPaths.erp} />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/** Only the visible hero owns a timer. Manual selection stops the tour. */
export function useSolutionTour(onNext: () => void) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef(onNext);
  nextRef.current = onNext;
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReduced(preference.matches);
      if (preference.matches) setPlaying(false);
    };
    updatePreference();
    setPlaying(!preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    if (sceneRef.current) observer.observe(sceneRef.current);
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  const running = playing && visible && pageVisible && !hovered && !reduced;
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => nextRef.current(), 5000);
    return () => window.clearInterval(timer);
  }, [running]);
  return { sceneRef, playing, setPlaying, running, setHovered, reduced };
}

export function SoftwarePreview({ solution }: { solution: Solution }) {
  const { isArabic: ar, t } = useLanguage();
  const learning = solution.slug === "lms" || solution.slug === "education";
  return (
    <div
      className={`software-stage stage-${solution.slug}`}
      key={solution.slug}
    >
      <div className="workspace-window">
        <div className="workspace-chrome">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <BrandLockup product={solution.short} descriptor={false} mark={false} className="brand-inline" />
          <span className="preview-label">
            {ar ? "تصور توضيحي" : "Concept preview"}
          </span>
        </div>
        <div className="workspace-body">
          <aside className="workspace-sidebar" aria-hidden="true">
            <OdinMark />
            <span className="workspace-nav-selected">
              <SolutionIcon slug={solution.slug} />
            </span>
            <SolutionIcon slug="erp" />
            <SolutionIcon slug="hr" />
            <SolutionIcon slug="crm" />
            <span className="workspace-sidebar-end">OSS.</span>
          </aside>
          <div className="workspace-content">
            <div className="workspace-title">
              <div>
                <h3>{t(solution.scene)}</h3>
                <p>
                  {ar
                    ? "مساحة واحدة. خطوات أوضح."
                    : "One workspace. A clearer way forward."}
                </p>
              </div>
              <span className="workspace-avatar" aria-hidden="true">
                O.
              </span>
            </div>
            <div className="workspace-context">
              <SolutionIcon slug={solution.slug} />
              <span>{t(solution.features[0])}</span>
              <span className="workspace-context-arrow">
                <Arrow />
              </span>
            </div>
            {solution.slug === "crm" ? (
              <div className="preview-pipeline">
                {solution.rows.map((row, index) => (
                  <div className="pipeline-column" key={row.en}>
                    <span className="pipeline-heading">
                      <i />
                      {t(row)}
                    </span>
                    <div className="pipeline-lead">
                      <span className="lead-initial">
                        {["A", "B", "C"][index]}
                      </span>
                      <strong>
                        {t(
                          [
                            copy("A new opportunity", "فرصة جديدة"),
                            copy("Understand the need", "فهم الاحتياج"),
                            copy("The next conversation", "المناقشة التالية"),
                          ][index],
                        )}
                      </strong>
                      <span>{t(solution.features[index])}</span>
                      <span className="lead-next">
                        <Arrow />
                        {ar ? "الخطوة التالية" : "Next step"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : learning ? (
              <div className="preview-learning">
                <div className="learning-cover">
                  <SolutionIcon slug={solution.slug} />
                  <strong>
                    {ar
                      ? "كل خطوة،\nفرصة للتعلم."
                      : "Every step.\nA chance to learn."}
                  </strong>
                  <span>
                    <BrandLockup product={solution.short} descriptor={false} mark={false} className="brand-inline" />
                  </span>
                  <div className="learning-orbits" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="learning-lessons">
                  {solution.rows.map((row, index) => (
                    <div key={row.en}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{t(row)}</strong>
                      <CheckIcon />
                    </div>
                  ))}
                </div>
              </div>
            ) : solution.slug === "mobile-apps" ? (
              <div className="preview-mobile-canvas">
                <div className="mobile-platform-copy">
                  <strong>
                    {ar
                      ? "خدمتك.\nأقرب ليهم."
                      : "Your service.\nCloser to them."}
                  </strong>
                  <p>
                    {ar
                      ? "من أول طلب لآخر تحديث."
                      : "From the first tap to the next update."}
                  </p>
                  <span>iOS / Android</span>
                </div>
                <div className="preview-phone">
                  <div className="phone-speaker" />
                  <OdinMark />
                  <strong>{ar ? "أهلاً بيك" : "Welcome back"}</strong>
                  <span>
                    {ar
                      ? "كل اللي محتاجه في مكان واحد"
                      : "Everything you need, together"}
                  </span>
                  <div className="phone-service">
                    <SolutionIcon slug="mobile-apps" />
                    <span>{ar ? "استكشف خدماتك" : "Explore services"}</span>
                    <Arrow />
                  </div>
                  <div className="phone-request">
                    <span>{ar ? "طلبك" : "Your request"}</span>
                    <strong>
                      {ar ? "جاهز للخطوة الجاية" : "Ready for the next step"}
                    </strong>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                  <div className="phone-home" />
                </div>
              </div>
            ) : (
              <div className="preview-operations">
                <div className="operation-columns">
                  <span>{ar ? "دورة العمل" : "WORKFLOW"}</span>
                  <span>{ar ? "المسؤول" : "TEAM"}</span>
                  <span>{ar ? "الحالة" : "STATUS"}</span>
                </div>
                {solution.rows.map((row, index) => (
                  <div className="operation-row" key={row.en}>
                    <div>
                      <span className="operation-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{t(row)}</strong>
                    </div>
                    <span>
                      {ar
                        ? solution.slug === "hr"
                          ? ["الموظف", "المدير", "الموارد البشرية"][index]
                          : ["المبيعات", "المخزن", "الحسابات"][index]
                        : solution.slug === "hr"
                          ? ["Employee", "Manager", "HR team"][index]
                          : ["Sales", "Inventory", "Finance"][index]}
                    </span>
                    <span className="operation-status">
                      <CheckIcon />
                      {ar ? "مترابط" : "Connected"}
                    </span>
                  </div>
                ))}
                <div className="operation-summary">
                  <span className="summary-connection" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>{t(solution.outcome)}</span>
                  <Arrow />
                </div>
              </div>
            )}
            <div className="workspace-bottom">
              <span>{t(solution.features[2])}</span>
              <span>{t(solution.features[3])}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="preview-handoff">
        <span className="handoff-check">
          <CheckIcon />
        </span>
        <div>
          <strong>
            {ar ? "خطوة بتكمّل خطوة." : "One step connects to the next."}
          </strong>
          <span>{t(solution.outcome)}</span>
        </div>
        <span className="handoff-line" aria-hidden="true" />
      </div>
      <div className="preview-caption">
        <span>
          {ar
            ? "تصور للرحلة — مش شاشة منتج جاهز."
            : "An illustrative experience, not a released product screen."}
        </span>
        <span dir="ltr">OSS. / {solution.short}</span>
      </div>
    </div>
  );
}
