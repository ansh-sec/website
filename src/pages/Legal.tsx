import { PageHeader, Section, GlassCard } from "../components/UI";

export function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="How JOT Wellness collects, uses, and protects your information. Your trust is our responsibility." />
      <Section className="pt-0">
        <GlassCard className="p-8 md:p-12 markdown-body max-w-3xl">
          <h2>Our commitment to privacy</h2>
          <p>At JOT Wellness, we take the privacy of families seriously. This policy describes what information we collect, how we use it, and the choices you have.</p>
          <h3>What we collect</h3>
          <p>When you contact us, we may collect your name, contact details, and basic information about your child's concerns — only to serve you better.</p>
          <h3>How we use it</h3>
          <p>Your information is used exclusively to respond to inquiries, provide services, and communicate about your care. We never sell or share your information with third parties for marketing.</p>
          <h3>Clinical confidentiality</h3>
          <p>All clinical records are held under the highest professional confidentiality standards, consistent with clinical ethics and Indian law.</p>
          <h3>Your rights</h3>
          <p>You may request access to, correction of, or deletion of your personal information at any time by contacting care@jotwellness.in.</p>
        </GlassCard>
      </Section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="A brief overview of how we work together." />
      <Section className="pt-0">
        <GlassCard className="p-8 md:p-12 markdown-body max-w-3xl">
          <h2>Our services</h2>
          <p>JOT Wellness provides child development, therapy, and family wellness services. All services are delivered by licensed clinicians under clinical supervision.</p>
          <h2>Not a substitute for emergency care</h2>
          <p>Our services are not a substitute for emergency medical or psychiatric care. If you or your child are in crisis, please seek immediate emergency help.</p>
          <h2>Payment & scheduling</h2>
          <p>Detailed terms for each program are shared at the start of service, including scheduling, cancellation, and payment policies.</p>
          <h2>Contact</h2>
          <p>For questions, please write care@jotwellness.in.</p>
        </GlassCard>
      </Section>
    </>
  );
}
