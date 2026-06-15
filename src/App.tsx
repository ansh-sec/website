import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar, Footer, AnimatedBackground, CursorGlow } from "./components/Layout";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import GuidedGrowth from "./pages/GuidedGrowth";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import { Privacy, Terms } from "./pages/Legal";

const PAGE_TITLES: Record<string, string> = {
  "/": "JOT Wellness — Premium Child Development & Family Wellness",
  "/services": "Services · JOT Wellness",
  "/guided-growth": "Guided Growth · JOT Wellness",
  "/about": "About · JOT Wellness",
  "/blog": "Journal · JOT Wellness",
  "/contact": "Contact · JOT Wellness",
  "/faq": "FAQ · JOT Wellness",
  "/privacy": "Privacy · JOT Wellness",
  "/terms": "Terms · JOT Wellness",
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    try { window.scrollTo(0, 0); } catch (_) { /* ignore */ }
  }, [pathname]);
  return null;
}

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      if (pathname.startsWith("/blog/")) {
        document.title = "Article · JOT Wellness";
      } else if (pathname.startsWith("/services/")) {
        document.title = "Service · JOT Wellness";
      } else {
        document.title = PAGE_TITLES[pathname] || "JOT Wellness";
      }
    } catch (_) { /* ignore */ }
  }, [pathname]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function LoadingShell() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-sage to-emerald flex items-center justify-center mb-4">
          <span className="font-editorial text-xl text-midnight">J</span>
        </div>
        <div className="font-editorial text-2xl text-text-primary">JOT Wellness</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <DocumentTitle />
        <ScrollToTop />
        <AnimatedBackground />
        <CursorGlow />
        <Navbar />
        <main className="relative">
          <Suspense fallback={<LoadingShell />}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/guided-growth" element={<GuidedGrowth />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
      </HashRouter>
    </ErrorBoundary>
  );
}
