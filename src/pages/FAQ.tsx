import { useState } from "react";
import { Section, GlassCard, Reveal, PageHeader, Accordion, PrimaryButton } from "../components/UI";

const FAQS: Record<string, { q: string; a: string }[]> = {
  "About services": [
    { q: "What types of therapy do you offer?", a: "We offer Behavior Therapy (ABA), Speech Therapy, Occupational Therapy, Special Education, Sensory Integration, Counseling & Family Support, and School Readiness & Integration. All services are delivered by licensed clinicians." },
    { q: "Are your therapists licensed?", a: "Yes. Every therapist at JOT Wellness holds recognized clinical credentials and is supervised by senior clinicians. We follow evidence-based protocols across disciplines." },
    { q: "Do you offer home-based therapy?", a: "Yes — home-based therapy is our primary model. We also offer hybrid and clinic-based options depending on the child's needs and family preference." },
    { q: "Can therapy be online?", a: "Yes, we offer virtual sessions for older children, parent coaching, and counseling. For younger children, in-home sessions typically work best." },
  ],
  "Pricing and scheduling": [
    { q: "How much does therapy cost?", a: "Pricing depends on the discipline, frequency, and model (À La Carte, Guided Growth, or Hybrid). Book a free assessment and we'll share a transparent, customized plan." },
    { q: "How often are sessions?", a: "Most programs run 2–5 sessions per week, depending on the child's profile. Frequency is always tailored — never one-size-fits-all." },
    { q: "How long is a session?", a: "Sessions typically run 45–60 minutes depending on discipline and age. Counseling sessions are 50 minutes." },
    { q: "Do you offer flexible scheduling?", a: "Yes. We work around the family's schedule — including evenings and weekends where possible." },
  ],
  "Guided Growth": [
    { q: "What is the Guided Growth program?", a: "Guided Growth is our 12-month flagship coordinated care program. It brings every discipline, therapist, and goal under one unified plan led by a single lead clinician." },
    { q: "Who is Guided Growth for?", a: "Children who would benefit from two or more disciplines over a sustained period — typically those with ASD, global developmental delay, or complex learning and attention profiles." },
    { q: "How is it different from individual therapy?", a: "Coordinated care means shared goals across disciplines, one monthly progress report, monthly team case conferences, and a single clinical owner of the plan. Individual therapy is siloed by design." },
    { q: "Is there a minimum commitment?", a: "Yes, Guided Growth is designed as a 12-month journey. Families can transition out earlier if clinical goals are met." },
  ],
  "Practical questions": [
    { q: "How do I get started?", a: "Book a free assessment through our Contact page. Share a little about your child and we'll respond within one business day with a clinical perspective and next steps." },
    { q: "What if my child needs multiple therapies?", a: "That's exactly what Guided Growth is designed for. We'll do a multi-disciplinary assessment and design one unified plan across all relevant disciplines." },
    { q: "What if my child is shy or anxious about therapy?", a: "Our therapists are trained to work with regulation and trust-building from the first session. Home-based therapy also reduces anxiety significantly for most children." },
    { q: "Do you work with schools?", a: "Yes. School collaboration, shadow-teacher support, and teacher training are part of several of our programs." },
  ],
  "School integration": [
    { q: "What is the School Readiness program?", a: "A multi-domain program preparing children for confident school entry — covering regulation, attention, peer skills, communication, self-care, and pre-academic foundations." },
    { q: "How long does school readiness take?", a: "Programs range from 3 to 12 months depending on the child's starting profile and target school." },
    { q: "Do you offer shadow teacher support?", a: "Yes. We provide trained shadow teachers and coordinate with the school for smooth inclusion." },
    { q: "What if my child is already in school and struggling?", a: "Our School Integration service supports children already in school — through classroom observation, teacher consultation, and targeted therapy to close skill gaps." },
  ],
  "General questions": [
    { q: "Where are you based?", a: "We serve Delhi NCR — Delhi, Noida, Gurugram, Faridabad, Ghaziabad — primarily through in-home therapy. Virtual services are available across India." },
    { q: "How do I know if my child needs therapy?", a: "If you have a concern, you probably do. A free assessment will give you clarity. Early intervention always improves outcomes." },
    { q: "Is what we share confidential?", a: "Absolutely. Every conversation, assessment, and session is confidential and handled with the highest professional ethics." },
    { q: "Can I meet the therapist before committing?", a: "Yes. Our free assessment is a real clinical conversation — and a chance for you to meet the team before any commitment." },
  ],
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(Object.keys(FAQS)[0]);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Clear answers to common questions."
        subtitle="We believe transparency builds trust. Here are honest answers to the questions parents ask us most. If you don't find what you need, please reach out — we'd love to help."
      />

      <Section className="pt-0">
        {/* Tabs */}
        <GlassCard className="p-3 mb-8 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {Object.keys(FAQS).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeTab === cat
                    ? "bg-sage text-midnight"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </GlassCard>

        <Reveal>
          <Accordion items={FAQS[activeTab].map((f) => ({ q: f.q, a: f.a }))} />
        </Reveal>
      </Section>

      <Section>
        <GlassCard className="p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald/15 blur-3xl" />
          <div className="relative">
          <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
            Still have questions?
          </h2>
            <p className="mt-5 text-text-secondary max-w-xl mx-auto">
              Book a free assessment or send us a message. Every conversation is confidential and parent-first.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <PrimaryButton to="/contact">Contact us</PrimaryButton>
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
