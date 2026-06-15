import { motion } from "motion/react";
import { ReactNode, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

/* ===================== SECTION WRAPPER ===================== */
export function Section({
  children,
  className,
  id,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={clsx("relative py-14 md:py-24 lg:py-28 px-4 sm:px-5 md:px-8 lg:px-10", className)}>
      <div className={clsx("max-w-7xl mx-auto relative", innerClassName)}>{children}</div>
    </section>
  );
}

/* ===================== PAGE HEADER ===================== */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Section className="pt-28 md:pt-40 pb-8 md:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-sage mb-5 md:mb-6">
            <span className="w-6 sm:w-8 h-px bg-sage/60" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-editorial text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] text-text-primary mb-5 md:mb-6 tracking-tight break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[clamp(1rem,1.4vw,1.25rem)] text-text-secondary leading-[1.65] max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </Section>
  );
}

/* ===================== GLASS CARD ===================== */
export function GlassCard({
  children,
  className,
  interactive = true,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactive) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [interactive]);

  return (
    <As
      ref={ref}
      className={clsx(
        "glass rounded-3xl p-6 md:p-8 transition-transform duration-500",
        interactive && "reactive hover:-translate-y-1",
        className
      )}
    >
      {children}
    </As>
  );
}

/* ===================== BUTTONS ===================== */
export function PrimaryButton({
  children,
  to,
  href,
  className,
  onClick,
  type,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = clsx(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-midnight bg-gradient-to-br from-champagne to-sage hover:from-ivory hover:to-misty-sage transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_-10px_rgba(199,216,201,0.35)] touch-manipulation",
    className
  );
  if (to) return <Link to={to} className={cls}>{children}<ArrowRight className="w-3.5 h-3.5" /></Link>;
  if (href) return <a href={href} className={cls}>{children}<ArrowRight className="w-3.5 h-3.5" /></a>;
  return <button type={type || "button"} onClick={onClick} className={cls}>{children}<ArrowRight className="w-3.5 h-3.5" /></button>;
}

export function SecondaryButton({
  children,
  to,
  href,
  className,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
}) {
  const cls = clsx(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-text-primary glass hover:bg-white/10 transition-all touch-manipulation",
    className
  );
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

/* ===================== METRIC CARD ===================== */
export function MetricCard({ value, label, detail }: { value: string; label: string; detail?: string }) {
  return (
    <GlassCard className="text-center">
      <div className="font-editorial text-[clamp(2rem,4vw,3.25rem)] text-gradient-editorial mb-1.5 leading-none">
        {value}
      </div>
      <div className="text-text-primary font-medium mb-1 text-[clamp(0.875rem,1vw,1rem)]">{label}</div>
      {detail && <div className="text-xs text-text-secondary leading-tight">{detail}</div>}
    </GlassCard>
  );
}

/* ===================== REVEAL ===================== */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ===================== SERVICE ICON ===================== */
export function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    behavior: "✦",
    speech: "❋",
    occupational: "✺",
    education: "◇",
    sensory: "❀",
    counseling: "♡",
    school: "❖",
    growth: "⌘",
  };
  return (
    <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center text-2xl text-sage">
      {icons[name] || "✦"}
    </div>
  );
}

/* ===================== ACCORDION ===================== */
export function Accordion({
  items,
}: {
  items: { q: string; a: ReactNode }[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem key={i} q={item.q} a={item.a} index={i} />
      ))}
    </div>
  );
}

function AccordionItem({ q, a, index }: { q: string; a: ReactNode; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <GlassCard interactive={false} className="!p-0 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 md:gap-6 group"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 md:gap-4 min-w-0">
          <span className="text-[11px] md:text-xs text-sage font-mono flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-editorial text-base md:text-xl text-text-primary leading-snug break-words">
            {q}
          </span>
        </span>
        <span className={`w-8 h-8 md:w-9 md:h-9 rounded-full glass-light flex items-center justify-center text-sage transition-transform flex-shrink-0 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="px-5 md:px-8 pb-5 md:pb-8 text-text-secondary leading-relaxed text-sm md:text-base pl-14 md:pl-20">
          {a}
        </div>
      </motion.div>
    </GlassCard>
  );
}

import { useState } from "react";
