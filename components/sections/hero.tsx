"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useLanguage } from "@/components/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const { language } = useLanguage();
  const ar = language === "ar";

  return (
    <section className="relative overflow-hidden border-b border-stroke pb-16 pt-16 md:pb-24 md:pt-24">
      <EyeWatermark />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-blue"
          >
            {ar ? "نظام إدارة موارد المؤسسات" : "Auditable Enterprise Resource Planning"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-balance text-4xl font-semibold leading-[1.08] text-text md:text-6xl"
          >
            {ar ? "نظام واحد. تحكم كامل في أعمالك." : "One ERP. Total Business Control."}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {ar
              ? "يجمع ODIN ERP المحاسبة والمبيعات والمشتريات والمخزون ونقاط البيع والبنوك والموافقات والتقارير في منصة واحدة ثنائية اللغة، بصلاحيات واضحة وسجل تدقيق كامل."
              : "ODIN ERP brings accounting, sales, purchasing, inventory, POS, banking, approvals, and reporting into one bilingual platform with controlled permissions and a complete audit trail."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <ButtonLink href={siteConfig.demoUrl}>{ar ? "افتح النسخة التجريبية" : "Open Live Demo"}</ButtonLink>
            <ButtonLink href="#erp-modules" variant="secondary">{ar ? "استكشف وحدات النظام" : "Explore ERP Modules"}</ButtonLink>
          </motion.div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-stroke pt-6 text-sm">
            {[
              ar ? ["55", "شاشة تشغيلية"] : ["55", "Operational screens"],
              ar ? ["10", "وحدات أعمال"] : ["10", "Business modules"],
              ar ? ["عربي", "ودعم RTL"] : ["Arabic", "Native RTL"]
            ].map(([value, label]) => (
              <div key={label}><strong className="block text-xl text-text">{value}</strong><span className="text-muted">{label}</span></div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-pink-200/55 via-blue/20 to-cyan-200/55 blur-3xl" />
          <div className="overflow-hidden rounded-[1.65rem] border border-white/90 bg-panel/80 shadow-[22px_22px_46px_rgba(105,126,170,.2),-16px_-16px_38px_rgba(255,255,255,.96),inset_1px_1px_0_white]">
            <div className="flex items-center justify-between border-b border-stroke px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-muted">
              <span>{ar ? "لوحة الإدارة الفعلية" : "Live executive command center"}</span>
              <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,.12)]" /> {ar ? "متصل" : "Live"}</span>
            </div>
            <Image
              src="/screenshots/erp-dashboard.png"
              alt={ar ? "لقطة حقيقية للوحة تحكم ODIN ERP" : "Real ODIN ERP executive dashboard"}
              width={1280}
              height={720}
              className="h-auto w-full"
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
