import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Section, GlassCard, PrimaryButton, SecondaryButton, ServiceIcon, Reveal, PageHeader } from "../components/UI";
import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="A complete, coordinated care ecosystem."
        subtitle="Seven specialized disciplines, delivered by licensed clinicians in the comfort of home. Each service is tailored to the child's specific developmental profile and family goals."
      />

      <Section className="pt-0">
        <div className="space-y-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={0.05}>
              <GlassCard className="p-8 md:p-12">
                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
                  <div>
                    <div className="flex items-start gap-5">
                      <ServiceIcon name={s.icon} />
                      <div>
                        <div className="text-[11px] tracking-[0.25em] uppercase text-sage mb-2">Service 0{i + 1}</div>
                        <h2 className="font-editorial text-3xl md:text-4xl text-text-primary leading-tight">{s.name}</h2>
                      </div>
                    </div>
                    <p className="mt-6 text-text-secondary leading-relaxed">{s.description}</p>

                    <div className="mt-6">
                      <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Who it helps</div>
                      <ul className="space-y-2">
                        {s.whoItHelps.map((w) => (
                          <li key={w} className="flex items-start gap-3 text-text-primary text-[15px]">
                            <Check className="w-4 h-4 text-sage mt-1 flex-shrink-0" /> {w}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Included</div>
                      <ul className="space-y-2">
                        {s.included.map((w) => (
                          <li key={w} className="flex items-start gap-3 text-text-secondary text-sm">
                            <Check className="w-4 h-4 text-sage mt-1 flex-shrink-0" /> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Conditions Served</div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {s.conditions.map((c) => (
                          <span key={c} className="text-xs px-2.5 py-1 rounded-full glass text-text-secondary">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Frequency</div>
                        <div className="text-text-primary text-sm">{s.frequency}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Duration</div>
                        <div className="text-text-primary text-sm">{s.duration}</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <PrimaryButton to={`/services/${s.slug}`}>Learn more</PrimaryButton>
                      <SecondaryButton to="/contact">Book assessment</SecondaryButton>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> How you'd like to work <span className="w-8 h-px bg-sage/60" />
            </div>
            <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              Choose the model that fits your family.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "À La Carte",
              price: "From ₹ per session",
              text: "Single discipline therapy, tailored to one specific need. Flexible scheduling and duration.",
              features: ["Single discipline", "Flexible duration", "Per-session billing", "Ideal for focused concerns"],
            },
            {
              name: "Guided Growth",
              price: "12-month flagship",
              text: "Coordinated multi-disciplinary program under one lead clinician. Our most transformative offering.",
              features: ["Multi-disciplinary", "One lead clinician", "Monthly reviews", "Measurable outcomes"],
              featured: true,
            },
            {
              name: "Hybrid",
              price: "Custom plan",
              text: "Blend disciplines and models based on your child's evolving needs. Fully tailored.",
              features: ["Customizable", "Home + clinic options", "Adaptive schedule", "Family-led priorities"],
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <GlassCard className={`h-full flex flex-col ${p.featured ? "ring-1 ring-sage/40" : ""}`}>
                {p.featured && (
                  <div className="mb-4 inline-flex self-start text-[10px] tracking-[0.3em] uppercase text-midnight bg-sage/80 px-3 py-1 rounded-full">
                    Most chosen
                  </div>
                )}
                <h3 className="font-editorial text-3xl text-text-primary">{p.name}</h3>
                <div className="text-sage text-sm mt-1">{p.price}</div>
                <p className="mt-4 text-text-secondary leading-relaxed text-[15px]">{p.text}</p>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-text-primary text-sm">
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage hover:text-text-primary transition">
                  Book a conversation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How to start */}
      <Section>
        <GlassCard className="p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald/15 blur-3xl" />
          <div className="relative">
            <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              How to get started.
            </h2>
            <p className="mt-5 text-text-secondary max-w-xl mx-auto">
              Four calm steps. Begin with a free assessment — we'll offer a clinical perspective, and you decide what comes next.
            </p>
            <div className="mt-10 flex justify-center gap-3">
              <PrimaryButton to="/contact">Book free assessment</PrimaryButton>
              <SecondaryButton to="/faq">Read FAQ</SecondaryButton>
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
