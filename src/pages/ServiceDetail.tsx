import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Section, GlassCard, PrimaryButton, SecondaryButton, ServiceIcon, PageHeader } from "../components/UI";
import { SERVICES } from "../data/content";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.name}
        subtitle={service.short}
      />

      <Section className="pt-0">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <div className="space-y-6">
            <GlassCard className="p-8 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <ServiceIcon name={service.icon} />
                <div>
                  <div className="font-editorial text-3xl text-text-primary">{service.name}</div>
                </div>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">{service.description}</p>
            </GlassCard>

            <GlassCard className="p-8 md:p-10">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-4">Who it helps</div>
              <ul className="space-y-3">
                {service.whoItHelps.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-text-primary">
                    <Check className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-8 md:p-10">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-4">What's included</div>
              <ul className="space-y-3">
                {service.included.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-text-primary">
                    <Check className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <GlassCard className="p-6">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Frequency</div>
              <div className="text-text-primary">{service.frequency}</div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Session duration</div>
              <div className="text-text-primary">{service.duration}</div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Conditions served</div>
              <div className="flex flex-wrap gap-2">
                {service.conditions.map((c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full glass text-text-secondary">{c}</span>
                ))}
              </div>
            </GlassCard>
            <div className="flex flex-col gap-3">
              <PrimaryButton to="/contact">Book free assessment</PrimaryButton>
              <SecondaryButton to="/services">All services</SecondaryButton>
            </div>
          </div>
        </div>
      </Section>

      <Section>
          <h2 className="font-editorial text-[clamp(1.5rem,3.5vw,2.5rem)] text-text-primary mb-8 tracking-tight">Other services</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="block">
              <GlassCard className="h-full">
                <ServiceIcon name={s.icon} />
                <h3 className="mt-5 font-editorial text-2xl text-text-primary">{s.name}</h3>
                <p className="mt-2 text-text-secondary text-sm">{s.short}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-sage font-medium">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
