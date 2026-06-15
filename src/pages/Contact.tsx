import { useState } from "react";
import { Phone, Mail, MessageCircle, Clock, MapPin, Check } from "lucide-react";
import { Section, GlassCard, Reveal, PageHeader } from "../components/UI";
import { AssessmentForm } from "./Home";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's begin with a conversation."
        subtitle="Whether you're ready for a full assessment or just have a question — we'd love to hear from you. Every conversation is confidential, thoughtful, and parent-first."
      />

      {/* Direct contact */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Phone, title: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
            { icon: MessageCircle, title: "WhatsApp", value: "+91 99999 99999", href: "https://wa.me/919999999999" },
            { icon: Mail, title: "Email", value: "care@jotwellness.in", href: "mailto:care@jotwellness.in" },
            { icon: Clock, title: "Hours", value: "Mon – Sat · 9:00 – 19:00" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <GlassCard className="h-full text-center">
                <c.icon className="w-5 h-5 text-sage mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-2">{c.title}</div>
                {c.href ? (
                  <a href={c.href} className="text-text-primary text-sm hover:text-sage transition break-all">{c.value}</a>
                ) : (
                  <div className="text-text-primary text-sm">{c.value}</div>
                )}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Assessment form */}
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> Method 01
            </div>
            <h2 className="font-editorial text-3xl md:text-4xl text-text-primary leading-tight mb-4">
              Book a free assessment.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Share a little about your child. Our clinical team will respond within one business day with a clear perspective on next steps.
            </p>
            <div className="mt-6 flex items-start gap-3 text-sm text-text-secondary">
              <MapPin className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
              <span>Serving Delhi, Noida, Gurugram, Faridabad, Ghaziabad — in-home or hybrid.</span>
            </div>
          </div>
          <GlassCard className="p-6 md:p-8">
            <AssessmentForm />
          </GlassCard>
        </div>
      </Section>

      {/* General inquiry form */}
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> Method 02
            </div>
            <h2 className="font-editorial text-3xl md:text-4xl text-text-primary leading-tight mb-4">
              General inquiry.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Schools, corporate partnerships, media, or any other question. We read every message.
            </p>
          </div>
          <GlassCard className="p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-sage/20 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-editorial text-2xl text-text-primary mb-2">Thank you.</h3>
                <p className="text-text-secondary">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
                <Input label="Name" value={form.name} onChange={(v: string) => setForm({ ...form, name: v })} required />
                <Input label="Email" type="email" value={form.email} onChange={(v: string) => setForm({ ...form, email: v })} required />
                <Input label="Phone" type="tel" value={form.phone} onChange={(v: string) => setForm({ ...form, phone: v })} />
                <Input label="Subject" value={form.subject} onChange={(v: string) => setForm({ ...form, subject: v })} required />
                <div className="md:col-span-2">
                  <label className="block text-xs tracking-[0.2em] uppercase text-text-secondary mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full glass rounded-2xl px-5 py-4 text-text-primary bg-transparent focus:outline-none focus:border-sage/50 transition"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-midnight bg-gradient-to-br from-champagne to-sage hover:from-ivory hover:to-misty-sage transition-all"
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}
          </GlassCard>
        </div>
      </Section>

      {/* Map / service area */}
      <Section>
        <GlassCard className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Service Area</div>
              <h2 className="font-editorial text-3xl md:text-4xl text-text-primary leading-tight mb-4">
                Therapy that comes home — across Delhi NCR.
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our in-home therapy team serves families across the National Capital Region. If you're outside our current coverage, please get in touch — we may still be able to help.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"].map((c) => (
                  <span key={c} className="text-sm px-3 py-1.5 rounded-full glass text-text-secondary">{c}</span>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-strong relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 via-sage/10 to-teal/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-sage mx-auto mb-3" strokeWidth={1.5} />
                  <div className="font-editorial text-2xl text-text-primary">Delhi NCR</div>
                  <div className="text-text-secondary text-sm mt-1">In-home therapy across the region</div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}

function Input({ label, value, onChange, type = "text", required }: any) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase text-text-secondary mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full glass rounded-2xl px-5 py-4 text-text-primary bg-transparent focus:outline-none focus:border-sage/50 transition"
      />
    </div>
  );
}
