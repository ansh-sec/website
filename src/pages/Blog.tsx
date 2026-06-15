import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { Section, GlassCard, Reveal, PageHeader } from "../components/UI";
import { getAllPosts, getCategories } from "../lib/blog";

export default function Blog() {
  const posts = getAllPosts();
  const categories = getCategories();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQuery = query === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesCat = !activeCat || p.category === activeCat;
      return matchesQuery && matchesCat;
    });
  }, [posts, query, activeCat]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Honest writing for honest parents."
        subtitle="Clinical insights, parent guides, and therapy perspectives from the JOT Wellness team. Thoughtful, evidence-based, human."
      />

      {/* Filters */}
      <Section className="pt-0">
        <GlassCard className="p-5 md:p-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the journal…"
              className="w-full bg-transparent pl-11 pr-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCat(null)}
              className={`text-xs px-4 py-2 rounded-full transition ${
                !activeCat ? "bg-sage text-midnight" : "glass text-text-secondary hover:text-text-primary"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`text-xs px-4 py-2 rounded-full transition ${
                  activeCat === c ? "bg-sage text-midnight" : "glass text-text-secondary hover:text-text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </GlassCard>
      </Section>

      {filtered.length === 0 ? (
        <Section className="pt-0">
          <GlassCard className="p-10 text-center">
            <p className="text-text-secondary">No posts match your search.</p>
          </GlassCard>
        </Section>
      ) : (
        <>
          {/* Featured */}
          {featured && (
            <Section className="pt-0">
              <Reveal>
                <Link to={`/blog/${featured.slug}`} className="block">
                  <GlassCard className="p-0 overflow-hidden grid md:grid-cols-2 items-stretch">
                    <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-emerald/30 via-sage/20 to-plum/30 min-h-[300px]" />
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-text-secondary mb-4">
                        <span className="px-3 py-1 rounded-full glass text-text-primary">{featured.category}</span>
                        <span>{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                        <span>·</span>
                        <span>{featured.readingTime} min read</span>
                      </div>
                      <div className="text-[11px] tracking-[0.3em] uppercase text-sage mb-3">Featured</div>
                      <h2 className="font-editorial text-3xl md:text-4xl text-text-primary leading-tight mb-4">
                        {featured.title}
                      </h2>
                      <p className="text-text-secondary leading-relaxed mb-5">{featured.excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-sage font-medium">
                        Read article <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </Reveal>
            </Section>
          )}

          {/* Grid */}
          <Section className="pt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <Link to={`/blog/${p.slug}`} className="block h-full">
                    <GlassCard className="h-full flex flex-col">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-emerald/30 via-sage/20 to-plum/30 relative">
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
          </Section>
        </>
      )}
    </>
  );
}
