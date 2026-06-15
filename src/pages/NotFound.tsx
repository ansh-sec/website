import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Section, GlassCard, PrimaryButton } from "../components/UI";

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center pt-32">
      <GlassCard className="max-w-2xl mx-auto text-center p-12 md:p-16">
        <div className="font-editorial text-7xl md:text-9xl text-gradient-editorial leading-none mb-6">404</div>
        <h1 className="font-editorial text-3xl md:text-4xl text-text-primary mb-4">This page has wandered off.</h1>
        <p className="text-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved. Let's guide you back to somewhere calm.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <PrimaryButton to="/">Return home</PrimaryButton>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition text-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Explore services
          </Link>
        </div>
      </GlassCard>
    </Section>
  );
}
