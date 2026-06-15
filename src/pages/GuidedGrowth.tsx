import { Check } from "lucide-react";
import { Section, GlassCard, PrimaryButton, SecondaryButton, Reveal, PageHeader } from "../components/UI";

const BENEFITS = [
  { title: "One lead clinician", text: "A single clinical owner for the entire plan — no fragmented communication." },
  { title: "Shared goals across disciplines", text: "Speech, OT, and behavior therapists work from one unified goal set." },
  { title: "Monthly case conferences", text: "The team meets monthly to align, review data, and adjust the plan together." },
  { title: "One progress report", text: "A single, clear monthly report — no juggling multiple therapist summaries." },
  { title: "Parent coaching built-in", text: "Dedicated parent sessions so you're always part of the process." },
  { title: "Transition planning", text: "A thoughtful 12-month exit plan: maintenance, school, or next phase." },
];

const TIMELINE = [
  { month: "Month 1", title: "Discovery", text: "Comprehensive multi-disciplinary assessment. Deep listening. A clear clinical picture." },
  { month: "Month 2", title: "Plan Design", text: "One unified plan built by the lead clinician and full team, reviewed with the family." },
  { month: "3 – 6", title: "Active Delivery", text: "Coordinated therapy across disciplines. Weekly sessions, monthly reviews." },
  { month: "7 – 10", title: "Deepening", text: "Skill generalization, parent confidence building, school collaboration." },
  { month: "11 – 12", title: "Transition", text: "Measurable outcome review, transition planning, and maintenance handoff." },
];

export default function GuidedGrowth() {
  return (
    <>
      <PageHeader
        eyebrow="Flagship Program"
        title="Guided Growth — 12 months of coordinated care."
        subtitle="For children who need more than one kind of therapy, fragmented care rarely delivers. Guided Growth brings every discipline, every therapist, and every milestone under one calm, cohesive plan."
      />

      {/* Who it's for */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <GlassCard className="h-full p-8 md:p-10">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Who it's for</div>
              <h3 className="font-editorial text-2xl md:text-3xl text-text-primary leading-tight mb-4">
                Children with multi-disciplinary needs.
              </h3>
              <ul className="space-y-3">
                {[
                  "Children on the autism spectrum with speech, sensory, and behavior needs",
                  "Children with global developmental delay",
                  "Children with complex learning and attention profiles",
                  "Families who want one coordinated team — not three separate ones",
                ].map((w) => (
                  <li key={w} className="flex items-start gap-3 text-text-primary text-[15px]">
                    <Check className="w-4 h-4 text-sage mt-1 flex-shrink-0" /> {w}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8 md:p-10">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Why coordinated care</div>
              <h3 className="font-editorial text-2xl md:text-3xl text-text-primary leading-tight mb-4">
                Because fragmented therapy rarely works.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                When therapy isn't coordinated, goals conflict. Parents repeat the same intake stories. Progress is uneven. Children experience therapy as disconnected pieces.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Guided Growth replaces fragmentation with cohesion — one plan, one team, one report, one family experience.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
            <span className="w-8 h-px bg-sage/60" /> What's included <span className="w-8 h-px bg-sage/60" />
          </div>
          <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
            Everything under one plan.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="font-editorial text-5xl text-sage/60 leading-none mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-editorial text-xl text-text-primary mb-2">{b.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{b.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
            <span className="w-8 h-px bg-sage/60" /> The 12-month arc <span className="w-8 h-px bg-sage/60" />
          </div>
          <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
            A calm, intentional journey.
          </h2>
        </div>
        <div className="space-y-4">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.month} delay={i * 0.06}>
              <GlassCard className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-xs tracking-[0.2em] uppercase text-sage mb-1">Phase</div>
                  <div className="font-editorial text-2xl text-text-primary">{t.month}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-editorial text-2xl text-text-primary mb-2">{t.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{t.text}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <GlassCard className="p-8 md:p-12 overflow-x-auto">
          <h2 className="font-editorial text-3xl md:text-4xl text-text-primary mb-6">
            Guided Growth vs. individual services.
          </h2>
          <div className="min-w-[560px]">
            <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 text-xs tracking-[0.2em] uppercase text-sage">
              <div>Aspect</div>
              <div>Individual Services</div>
              <div>Guided Growth</div>
            </div>
            {[
              ["Clinical ownership", "Each therapist owns their discipline", "One lead clinician owns the plan"],
              ["Goals", "Separate goals per discipline", "Unified, shared goals"],
              ["Parent reporting", "Multiple reports, multiple calls", "One monthly report"],
              ["Team coordination", "Ad-hoc, if at all", "Monthly case conferences"],
              ["Transition planning", "Often absent", "Built into month 11–12"],
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 py-4 border-b border-white/5 text-sm">
                <div className="text-text-primary font-medium">{row[0]}</div>
                <div className="text-text-secondary">{row[1]}</div>
                <div className="text-text-primary">{row[2]}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* CTA */}
      <Section>
        <GlassCard className="p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald/15 blur-3xl" />
          <div className="relative">
            <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              A free, honest conversation to begin.
            </h2>
            <p className="mt-5 text-text-secondary max-w-xl mx-auto">
              Book a free Guided Growth assessment. We'll offer a clinical perspective on your child's needs and whether a 12-month coordinated plan makes sense for your family.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <PrimaryButton to="/contact">Book Guided Growth assessment</PrimaryButton>
              <SecondaryButton to="/faq">FAQ</SecondaryButton>
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
