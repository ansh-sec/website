import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Heart, Shield, Check } from "lucide-react";
import { Section, GlassCard, PrimaryButton, SecondaryButton, MetricCard, Reveal, ServiceIcon } from "../components/UI";
import { SERVICES, TESTIMONIALS, METRICS, DIFFERENTIATORS } from "../data/content";
import { getAllPosts } from "../lib/blog";

const HERO_SLIDES = [
  {
    eyebrow: "India's Leading Child Development Ecosystem",
    title: "Where every child finds their way forward.",
    body: "A premium, in-home therapy and wellness ecosystem — designed for families across Delhi NCR. Licensed. Evidence-based. Deeply human.",
  },
  {
    eyebrow: "Therapy That Comes Home",
    title: "Progress, at the kitchen table.",
    body: "Our licensed therapists bring evidence-based care into the space where children feel safest — home. Calmer sessions. Deeper results.",
  },
  {
    eyebrow: "School Readiness Starts Here",
    title: "Confidence for the classroom ahead.",
    body: "A thoughtful, multi-domain readiness program that prepares children for the social, emotional, and academic world of school.",
  },
  {
    eyebrow: "Guided Growth Transformation Program",
    title: "One team. One plan. Twelve months.",
    body: "Our flagship 12-month coordinated care program brings together every therapist, goal, and milestone under one calm, clear plan.",
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <HeroSlider />
      <TrustMetrics />
      <ServicesOverview />
      <WhyJot />
      <GuidedGrowthHighlight />
      <FounderSpotlight />
      <Testimonials />
      <BlogPreview posts={posts} />
      <AssessmentSection />
    </>
  );
}

/* ============ HERO ============ */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-36 pb-16 md:pb-20 px-5 md:px-8 lg:px-10 overflow-hidden">
      {/* Luminous atmospheric layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large center glow — illuminated, sage */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] rounded-full"
          style={{
            width: "min(110vw, 1400px)",
            height: "min(110vw, 1400px)",
            background: "radial-gradient(circle, rgba(199,216,201,0.42) 0%, rgba(143,175,150,0.22) 28%, transparent 60%)",
            filter: "blur(80px)",
            animation: "breatheCenter 22s ease-in-out infinite",
          }}
        />
        {/* Warm ivory top-left accent */}
        <div
          className="absolute top-[10%] left-[5%] rounded-full"
          style={{
            width: "min(60vw, 700px)",
            height: "min(60vw, 700px)",
            background: "radial-gradient(circle, rgba(246,242,234,0.18) 0%, transparent 60%)",
            filter: "blur(90px)",
          }}
        />
        {/* Teal accent — bottom right */}
        <div
          className="absolute bottom-[5%] right-[5%] rounded-full"
          style={{
            width: "min(55vw, 650px)",
            height: "min(55vw, 650px)",
            background: "radial-gradient(circle, rgba(31,122,140,0.3) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle emerald mid-layer */}
        <div
          className="absolute top-[40%] left-[55%] rounded-full"
          style={{
            width: "min(45vw, 500px)",
            height: "min(45vw, 500px)",
            background: "radial-gradient(circle, rgba(37,96,74,0.3) 0%, transparent 60%)",
            filter: "blur(70px)",
            animation: "breatheMid 18s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.25fr_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="min-w-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1200}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            allowTouchMove={true}
            fadeEffect={{ crossFade: true }}
            onSlideChange={(s) => setCurrent(s.realIndex)}
            onSwiper={(s) => (swiperRef.current = s)}
            className="!overflow-visible"
          >
            {HERO_SLIDES.map((slide, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-sage mb-5 md:mb-6">
                    <Sparkles className="w-3 h-3" />
                    <span className="whitespace-normal">{slide.eyebrow}</span>
                  </div>
                  <h1 className="font-editorial text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.02] text-text-primary mb-5 md:mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8 md:mb-10">
                    {slide.body}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
            <PrimaryButton to="/contact">Book Assessment</PrimaryButton>
            <SecondaryButton to="/services">Explore Services</SecondaryButton>
            <SecondaryButton to="/guided-growth" className="hidden sm:inline-flex">Start Guided Growth</SecondaryButton>
          </div>

          <div className="mt-8 md:mt-10 flex items-center gap-4 md:gap-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 ml-1 md:ml-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className="relative h-[2px] w-10 md:w-12 bg-white/10 overflow-hidden rounded-full"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span
                    className={`absolute inset-0 bg-sage transition-all duration-500 ${
                      i === current ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <GlassCard className="p-8 relative">
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-gradient-to-br from-sage/30 to-emerald/10 blur-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-sage" />
              </div>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-text-secondary">Trust</div>
                <div className="font-editorial text-xl text-text-primary">Licensed. Supervised. Ethical.</div>
              </div>
            </div>
            <div className="space-y-4 text-text-secondary text-[15px] leading-relaxed">
              <p>Every therapist on our team holds recognized clinical credentials and is supervised by senior clinicians.</p>
              <p>We follow evidence-based protocols, transparent reporting, and a parent-first care model.</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <div className="font-editorial text-3xl text-text-primary">800+</div>
                <div className="text-xs text-text-secondary">Families served</div>
              </div>
              <div>
                <div className="font-editorial text-3xl text-text-primary">100%</div>
                <div className="text-xs text-text-secondary">Licensed clinicians</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

/* ============ METRICS ============ */
function TrustMetrics() {
  return (
    <Section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <MetricCard {...m} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============ SERVICES ============ */
function ServicesOverview() {
  return (
    <Section>
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> Services
            </div>
            <h2 className="font-editorial text-[clamp(1.875rem,5vw,3.75rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              A complete ecosystem of care.
            </h2>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed">
              Seven specialized disciplines, delivered by licensed clinicians, coordinated under one plan.
            </p>
          </div>
          <SecondaryButton to="/services">View all services</SecondaryButton>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <Link to={`/services/${s.slug}`} className="block h-full">
              <GlassCard className="h-full flex flex-col">
                <ServiceIcon name={s.icon} />
                <h3 className="mt-6 font-editorial text-2xl text-text-primary leading-tight">{s.name}</h3>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">{s.short}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-sage font-medium">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </GlassCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============ WHY JOT ============ */
function WhyJot() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> Why JOT Wellness
            </div>
            <h2 className="font-editorial text-[clamp(1.875rem,5vw,3.75rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              A different kind of therapy experience.
            </h2>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed">
              We built JOT Wellness because we believed families deserved more than fragmented care. What you'll find here is calmer, clearer, and deeply considered.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <GlassCard>
                <div className="w-9 h-9 rounded-xl glass-light flex items-center justify-center mb-4 text-sage">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-xl text-text-primary mb-2">{d.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{d.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============ GUIDED GROWTH HIGHLIGHT ============ */
function GuidedGrowthHighlight() {
  return (
    <Section>
      <GlassCard className="p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-emerald/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> Flagship Program
            </div>
            <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3.5rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              Guided Growth — 12 months of coordinated care.
            </h2>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed">
              When a child needs more than one kind of therapy, fragmented care rarely delivers. Guided Growth brings every discipline, every therapist, and every milestone under one calm, cohesive plan.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "One lead clinician, one unified plan",
                "Multi-disciplinary team coordination",
                "Monthly progress reviews for parents",
                "Measurable, data-driven outcomes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-text-primary">
                  <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryButton to="/guided-growth">Explore the program</PrimaryButton>
              <SecondaryButton to="/contact">Book assessment</SecondaryButton>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Discovery", text: "Comprehensive intake and assessment across disciplines." },
              { step: "02", title: "Design", text: "One unified plan built by the lead clinician and the team." },
              { step: "03", title: "Deliver", text: "Coordinated therapy across every discipline, at home." },
              { step: "04", title: "Review", text: "Monthly reviews with the family, transparent progress." },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="font-editorial text-2xl text-sage">{s.step}</div>
                <div>
                  <div className="font-editorial text-xl text-text-primary">{s.title}</div>
                  <div className="text-sm text-text-secondary mt-1">{s.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}

/* ============ FOUNDER SPOTLIGHT ============ */
function FounderSpotlight() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-strong relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/40 via-sage/20 to-plum/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-champagne to-sage flex items-center justify-center mb-4">
                    <span className="font-editorial text-5xl text-midnight">J</span>
                  </div>
                  <div className="font-editorial text-2xl text-text-primary">Founder</div>
                  <div className="text-text-secondary text-sm">JOT Wellness</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl px-5 py-4 max-w-[220px]">
              <div className="text-xs tracking-[0.25em] uppercase text-sage mb-1">Credentials</div>
              <div className="text-text-primary text-sm">Clinical Lead · 10+ Years</div>
              <div className="text-text-secondary text-xs mt-1">Licensed · Supervised</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> Founder Spotlight
            </div>
            <h2 className="font-editorial text-[clamp(1.875rem,5vw,3.75rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              Built from a quiet conviction.
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              JOT Wellness was founded on a simple, stubborn belief: that every child with developmental needs deserves therapy that is clinically excellent, emotionally intelligent, and genuinely kind.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              After years of watching families navigate fragmented systems, our founder built a different kind of practice — one where the clinical rigor is matched by the human warmth, and where parents feel as cared for as the children.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Clinical Psychology", "Applied Behavior Analysis", "Developmental Pediatrics", "Family Systems"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full glass text-text-secondary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <SecondaryButton to="/about">Read the full story</SecondaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  return (
    <Section>
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
            <span className="w-8 h-px bg-sage/60" /> What families say <span className="w-8 h-px bg-sage/60" />
          </div>
          <h2 className="font-editorial text-[clamp(1.875rem,5vw,3.75rem)] text-text-primary leading-[1.05] tracking-tight break-words">
            Trusted by families across Delhi NCR.
          </h2>
        </div>
      </Reveal>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
        className="!pb-14"
      >
        {TESTIMONIALS.map((t, i) => (
          <SwiperSlide key={i}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-editorial text-5xl text-sage/60 leading-none mb-3">"</div>
              <p className="text-text-primary text-[17px] leading-relaxed italic font-editorial flex-1">{t.quote}</p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-text-primary font-medium">{t.parent}</div>
                <div className="text-text-secondary text-sm mt-0.5">{t.child}</div>
              </div>
            </GlassCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

/* ============ BLOG PREVIEW ============ */
function BlogPreview({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  return (
    <Section>
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
            <span className="w-8 h-px bg-sage/60" /> Journal
          </div>
          <h2 className="font-editorial text-[clamp(1.875rem,5vw,3.75rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              Honest writing for honest parents.
            </h2>
        </div>
        <SecondaryButton to="/blog">Read the journal</SecondaryButton>
      </div>

      {posts.length === 0 ? (
        <p className="text-text-secondary">Posts coming soon.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link to={`/blog/${p.slug}`} className="block h-full">
                <GlassCard className="h-full flex flex-col">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 relative bg-gradient-to-br from-emerald/30 via-sage/20 to-plum/30">
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="text-xs px-3 py-1 rounded-full glass text-text-primary">{p.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-secondary mb-3">
                    <span>{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span>·</span>
                    <span>{p.readingTime} min read</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-text-primary leading-tight">{p.title}</h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-sage font-medium">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

/* ============ ASSESSMENT FORM ============ */
export function AssessmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    childName: "", parentName: "", phone: "", age: "", concern: "", callTime: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 glass rounded-3xl p-10 text-center"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-sage/20 flex items-center justify-center mb-4">
            <Check className="w-6 h-6 text-sage" />
          </div>
          <h3 className="font-editorial text-3xl text-text-primary mb-2">Thank you.</h3>
          <p className="text-text-secondary max-w-md mx-auto">
            We'll contact you soon during business hours. You may also reach us directly on WhatsApp for a faster response.
          </p>
        </motion.div>
      ) : (
        <>
          <Field label="Child's name" value={form.childName} onChange={(v: string) => setForm({ ...form, childName: v })} required />
          <Field label="Parent's name" value={form.parentName} onChange={(v: string) => setForm({ ...form, parentName: v })} required />
          <Field label="Phone number" type="tel" value={form.phone} onChange={(v: string) => setForm({ ...form, phone: v })} required />
          <Field label="Child's age" value={form.age} onChange={(v: string) => setForm({ ...form, age: v })} required placeholder="e.g. 4 years" />
          <div className="md:col-span-2">
            <label className="block text-xs tracking-[0.2em] uppercase text-text-secondary mb-2">Primary concern</label>
            <textarea
              value={form.concern}
              onChange={(e) => setForm({ ...form, concern: e.target.value })}
              required
              rows={3}
              className="w-full glass rounded-2xl px-5 py-4 text-text-primary bg-transparent focus:outline-none focus:border-sage/50 transition"
              placeholder="Briefly describe the concern…"
            />
          </div>
          <Field label="Best time to call" value={form.callTime} onChange={(v: string) => setForm({ ...form, callTime: v })} placeholder="e.g. 10 AM – 12 PM" />
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-midnight bg-gradient-to-br from-champagne to-sage hover:from-ivory hover:to-misty-sage transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_-10px_rgba(199,216,201,0.35)]"
            >
              Request free assessment <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}
    </form>
  );
}

function Field({ label, value, onChange, type = "text", placeholder, required }: any) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase text-text-secondary mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full glass rounded-2xl px-5 py-4 text-text-primary bg-transparent focus:outline-none focus:border-sage/50 transition"
      />
    </div>
  );
}

/* ============ ASSESSMENT SECTION (Home) ============ */
function AssessmentSection() {
  return (
    <Section>
      <GlassCard className="p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald/15 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-sage mb-5">
              <span className="w-8 h-px bg-sage/60" /> Free Assessment
            </div>
            <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] text-text-primary leading-[1.05] tracking-tight break-words">
              Not sure where to start?
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Share a little about your child and we'll offer a free, honest clinical perspective. No pressure, no sales — just clarity.
            </p>
            <div className="mt-6 space-y-3 text-sm text-text-secondary">
              <div className="flex items-start gap-3"><Shield className="w-4 h-4 text-sage mt-1" /> Confidential and parent-first.</div>
              <div className="flex items-start gap-3"><Heart className="w-4 h-4 text-sage mt-1" /> Response within one business day.</div>
            </div>
          </div>
          <AssessmentForm />
        </div>
      </GlassCard>
    </Section>
  );
}
