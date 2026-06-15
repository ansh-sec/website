import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/guided-growth", label: "Guided Growth" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Journal" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

// VisionOS-inspired spring: soft, slightly organic settling
const SPRING = { type: "spring" as const, stiffness: 95, damping: 20, mass: 0.85 };
const SPRING_SOFT = { type: "spring" as const, stiffness: 75, damping: 18, mass: 0.9 };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const state = scrolled ? "floating" : "hero";

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          top: state === "floating" ? 20 : 0,
          left: state === "floating" ? 20 : 0,
          right: state === "floating" ? 20 : 0,
          paddingTop: state === "floating" ? 10 : 22,
          paddingBottom: state === "floating" ? 10 : 22,
          paddingLeft: state === "floating" ? 16 : 28,
          paddingRight: state === "floating" ? 16 : 28,
          borderRadius: state === "floating" ? 999 : 0,
          y: state === "floating" ? 0 : -2,
        }}
        transition={SPRING}
        className={`fixed z-50 w-auto ${
          state === "floating"
            ? "glass-strong shadow-[0_20px_60px_-18px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-[#0D241A]/60 to-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto w-full nav-grid">
          {/* LEFT: Logo */}
          <div className="nav-grid-logo">
            <Link to="/" className="flex items-center gap-3 group" aria-label="JOT Wellness Home">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-misty-sage to-emerald flex items-center justify-center overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/10" />
                <span className="font-editorial text-lg text-midnight font-semibold relative">J</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-editorial text-xl tracking-wide text-text-primary">JOT Wellness</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-text-secondary mt-1">Child Development</span>
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation menu — mathematically centered */}
          <nav className="nav-grid-menu hidden lg:flex items-center gap-0.5 relative">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative px-4 py-2 text-[15px] font-medium tracking-wide transition-colors text-text-secondary hover:text-text-primary"
              >
                {({ isActive }) => (
                  <>
                    <span className={`relative z-10 ${isActive ? "text-text-primary" : ""}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-[1.5px] bg-gradient-to-r from-transparent via-misty-sage to-transparent"
                        transition={SPRING_SOFT}
                      />
                    )}
                    {hoveredIdx === i && !isActive && (
                      <motion.span
                        layoutId="nav-hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-full bg-white/[0.06]"
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: CTA + mobile toggle */}
          <div className="nav-grid-cta flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium text-midnight bg-gradient-to-br from-champagne to-sage hover:from-ivory hover:to-misty-sage transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_24px_-8px_rgba(199,216,201,0.35)]"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={2.2} />
              Book Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu — elegant floating panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={SPRING}
            className="fixed inset-x-4 top-20 z-40 lg:hidden glass-strong rounded-3xl p-5 shadow-2xl"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3.5 rounded-2xl text-[15px] font-medium transition-colors ${
                      isActive ? "bg-white/10 text-text-primary" : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-medium text-midnight bg-gradient-to-br from-champagne to-sage"
            >
              <Phone className="w-3.5 h-3.5" />
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ===========================================================
   FOOTER
   =========================================================== */
export function Footer() {
  return (
    <footer className="relative mt-24 md:mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-misty-sage to-emerald flex items-center justify-center">
                <span className="font-editorial text-lg text-midnight font-semibold">J</span>
              </div>
              <div>
                <div className="font-editorial text-xl text-text-primary">JOT Wellness</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-text-secondary mt-1">Child Development</div>
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              A premium, in-home child development ecosystem. Licensed therapy, psychology, and guided growth for families across Delhi NCR.
            </p>
          </div>

          <div>
            <h4 className="font-editorial text-lg text-text-primary mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li><Link to="/services/behavior-therapy" className="hover:text-text-primary transition">Behavior Therapy</Link></li>
              <li><Link to="/services/speech-therapy" className="hover:text-text-primary transition">Speech Therapy</Link></li>
              <li><Link to="/services/occupational-therapy" className="hover:text-text-primary transition">Occupational Therapy</Link></li>
              <li><Link to="/services/special-education" className="hover:text-text-primary transition">Special Education</Link></li>
              <li><Link to="/services/sensory-integration" className="hover:text-text-primary transition">Sensory Integration</Link></li>
              <li><Link to="/services/school-readiness" className="hover:text-text-primary transition">School Readiness</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-editorial text-lg text-text-primary mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li><Link to="/guided-growth" className="hover:text-text-primary transition">Guided Growth</Link></li>
              <li><Link to="/about" className="hover:text-text-primary transition">About</Link></li>
              <li><Link to="/blog" className="hover:text-text-primary transition">Journal</Link></li>
              <li><Link to="/faq" className="hover:text-text-primary transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-text-primary transition">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-text-primary transition">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-editorial text-lg text-text-primary mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex flex-col"><span className="text-text-primary font-medium mb-0.5">Phone</span><a href="tel:+919999999999" className="hover:text-text-primary transition">+91 99999 99999</a></li>
              <li className="flex flex-col"><span className="text-text-primary font-medium mb-0.5">WhatsApp</span><a href="https://wa.me/919999999999" className="hover:text-text-primary transition">+91 99999 99999</a></li>
              <li className="flex flex-col"><span className="text-text-primary font-medium mb-0.5">Email</span><a href="mailto:care@jotwellness.in" className="hover:text-text-primary transition break-all">care@jotwellness.in</a></li>
              <li className="flex flex-col"><span className="text-text-primary font-medium mb-0.5">Hours</span><span>Mon – Sat · 9:00 – 19:00</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">© {new Date().getFullYear()} JOT Wellness. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-secondary">
            <Link to="/privacy" className="hover:text-text-primary transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-text-primary transition">Terms</Link>
            <span>Delhi · Noida · Gurugram · Faridabad · Ghaziabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===========================================================
   ANIMATED BACKGROUND — luminous botanical
   =========================================================== */
export function AnimatedBackground() {
  return (
    <div className="bg-breathing" aria-hidden="true">
      <div className="bg-mesh-1" />
      <div className="bg-mesh-2" />
      <div className="bg-mesh-3" />
      <div className="bg-mesh-4" />
      <div className="bg-paper" />
      <div className="bg-grain" />
    </div>
  );
}

/* ===========================================================
   CURSOR GLOW
   =========================================================== */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--mx", `${e.clientX}px`);
      ref.current.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(199,216,201,0.07), transparent 60%)",
      }}
      aria-hidden="true"
    />
  );
}
