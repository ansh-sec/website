import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Section, GlassCard, PrimaryButton, Reveal } from "../components/UI";
import { getPost, getAllPosts } from "../lib/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug || "");

  if (!post) return <Navigate to="/404" replace />;

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Section className="pt-36 md:pt-44 pb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to journal
        </Link>
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs text-text-secondary mb-6">
              <span className="px-3 py-1 rounded-full glass text-text-primary">{post.category}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readingTime} min</span>
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
            </div>
            <h1 className="font-editorial text-[clamp(1.875rem,5.5vw,4rem)] leading-[1.05] text-text-primary mb-6 tracking-tight break-words">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <article className="max-w-3xl">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-10 bg-gradient-to-br from-emerald/30 via-sage/20 to-plum/30 glass-strong" />
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>

            <GlassCard className="mt-12 p-8 md:p-10 text-center">
              <h3 className="font-editorial text-2xl md:text-3xl text-text-primary mb-3">
                Ready to take the next step?
              </h3>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                Book a free assessment with our clinical team. No pressure — just an honest perspective on what might help.
              </p>
              <PrimaryButton to="/contact">Book free assessment</PrimaryButton>
            </GlassCard>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <GlassCard className="p-6">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Author</div>
              <div className="font-editorial text-xl text-text-primary">{post.author}</div>
              <p className="text-text-secondary text-sm mt-2">Clinical team at JOT Wellness. Licensed therapists and developmental specialists serving families across Delhi NCR.</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-xs tracking-[0.2em] uppercase text-sage mb-4">More from the journal</div>
              <ul className="space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`} className="group block">
                      <div className="text-xs text-text-secondary mb-1">{r.category}</div>
                      <div className="font-editorial text-lg text-text-primary group-hover:text-sage transition leading-tight">{r.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </aside>
        </div>
      </Section>
    </>
  );
}
