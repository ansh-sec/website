import { Section, GlassCard, Reveal, PageHeader } from "../components/UI";
import { Heart, Sparkles, BookOpen, Users } from "lucide-react";

const PILLARS = [
  { icon: Heart, title: "Compassion First", text: "Excellence without warmth is incomplete. Every interaction at JOT Wellness is designed with the family's emotional reality in mind." },
  { icon: Sparkles, title: "Clinical Excellence", text: "Evidence-based practice. Licensed clinicians. Senior supervision. We hold ourselves to the highest standard of care." },
  { icon: BookOpen, title: "Continuous Learning", text: "Our team is in constant learning — training, peer review, and updated literature are non-negotiable parts of our culture." },
  { icon: Users, title: "Parent as Partner", text: "We don't deliver therapy to families — we build it with them. Parent coaching is a core part of every program we run." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About JOT Wellness"
        title="Built from a quiet conviction."
        subtitle="JOT Wellness was founded on a simple, stubborn belief: that every child with developmental needs deserves therapy that is clinically excellent, emotionally intelligent, and genuinely kind."
      />

      {/* Founder portrait + story */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-strong relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald/40 via-sage/20 to-plum/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-champagne to-sage flex items-center justify-center mb-4">
                      <span className="font-editorial text-6xl text-midnight">J</span>
                    </div>
                    <div className="font-editorial text-3xl text-text-primary">Founder</div>
                    <div className="text-text-secondary text-sm mt-1">Clinical Lead · JOT Wellness</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-text-secondary leading-relaxed text-[17px]">
              <p className="font-editorial text-2xl md:text-3xl text-text-primary leading-snug">
                "I started JOT Wellness because I kept watching families navigate systems that weren't designed for them."
              </p>
              <p>
                After more than a decade of clinical work across child psychology, applied behavior analysis, and family systems, our founder noticed a pattern. Families were being asked to hold together fragmented care — multiple therapists, separate reports, conflicting priorities.
              </p>
              <p>
                JOT Wellness was built to be different. A place where clinical rigor is matched by emotional intelligence. Where parents feel as cared for as their children. Where the therapy model is designed around the family's life — not the other way around.
              </p>
              <p>
                Today, JOT Wellness serves families across Delhi NCR with a team of licensed clinicians who share one belief: <span className="text-text-primary">every child's development is a relationship, not a transaction.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Philosophy */}
      <Section>
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal>
            <GlassCard className="h-full p-8 md:p-10">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Our Mission</div>
              <h3 className="font-editorial text-3xl text-text-primary leading-tight mb-4">
                To make excellent, kind, coordinated therapy the norm — not the exception.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We exist to give every family navigating developmental challenges a therapy experience that is clinically world-class, emotionally thoughtful, and built around their daily reality.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8 md:p-10">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Our Philosophy</div>
              <h3 className="font-editorial text-3xl text-text-primary leading-tight mb-4">
                Therapy is a relationship, not a service.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We don't believe in quick fixes or template programs. Every child's profile is unique, and every family's context matters. So we build from the inside out — starting with listening.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* Pillars */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
            <span className="w-8 h-px bg-sage/60" /> Our pillars <span className="w-8 h-px bg-sage/60" />
          </div>
          <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
            What we stand on.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <GlassCard className="h-full">
                <p.icon className="w-6 h-6 text-sage mb-4" strokeWidth={1.5} />
                <h3 className="font-editorial text-xl text-text-primary mb-2">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section>
        <GlassCard className="p-10 md:p-16">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "10+", l: "Years in Practice" },
              { n: "800+", l: "Families Served" },
              { n: "7", l: "Clinical Disciplines" },
              { n: "100%", l: "Licensed Clinicians" },
            ].map((x) => (
              <div key={x.l} className="text-center">
                <div className="font-editorial text-5xl text-gradient-editorial">{x.n}</div>
                <div className="text-text-secondary text-sm mt-2">{x.l}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* Expertise */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
            <span className="w-8 h-px bg-sage/60" /> Areas of expertise <span className="w-8 h-px bg-sage/60" />
          </div>
          <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
            Clinical depth. Human warmth.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Clinical Psychology", "Applied Behavior Analysis", "Speech-Language Pathology",
            "Occupational Therapy", "Developmental Pediatrics", "Sensory Integration",
            "Family Systems Therapy", "School Readiness", "Special Education",
            "Early Intervention", "Parent Coaching", "Adolescent Mental Health",
          ].map((e) => (
            <span key={e} className="text-sm px-4 py-2 rounded-full glass text-text-secondary hover:text-text-primary transition">
              {e}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
