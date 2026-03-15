import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://growthgaming.it/news/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://growthgaming.it/news/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? sortedPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < sortedPosts.length - 1 ? sortedPosts[postIndex + 1] : null;

  return (
    <div className="relative">
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`https://growthgaming.it/news/${post.slug}`}
        datePublished={post.date}
        image={post.image}
      />
      <article className="py-24 sm:py-32 relative">
        {/* Atmospheric gradient */}
        <div className="absolute top-0 left-0 right-0 h-64 atmosphere-orange" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 relative z-10">
          {/* Back */}
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-gg-orange transition-colors mb-10"
          >
            <ArrowLeft className="h-3 w-3" />
            Tutte le news
          </Link>

          {/* Header */}
          <header className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-display text-[10px] font-bold tracking-[0.15em] text-gg-orange/70 uppercase">
                {post.category}
              </span>
              <span className="text-white/10">|</span>
              <span className="text-sm text-muted-foreground/50 font-mono">
                {new Date(post.date).toLocaleDateString("it-IT", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              {post.title}
            </h1>
            {/* Diagonal line under title */}
            <div className="mt-6 w-32 h-[2px] bg-gradient-to-r from-gg-orange to-transparent transform -skew-x-12" />
          </header>

          {/* Content */}
          <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <h2
                    key={i}
                    className="font-display text-base font-bold tracking-wider text-foreground mt-10"
                  >
                    {block.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              if (block.startsWith("**")) {
                const parts = block.split("**");
                return (
                  <div key={i}>
                    {parts.map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="text-foreground font-semibold">
                          {part}
                        </strong>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </div>
                );
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {block.split("\n").map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-gg-orange mt-0.5 text-sm">
                          &gt;
                        </span>
                        <span>
                          {item
                            .replace(/^- /, "")
                            .split("**")
                            .map((part, k) =>
                              k % 2 === 1 ? (
                                <strong key={k} className="text-foreground font-semibold">
                                  {part}
                                </strong>
                              ) : (
                                <span key={k}>{part}</span>
                              )
                            )}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="mt-14 pt-8 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-muted-foreground/40 border border-white/5 px-2.5 py-1 clip-card-skew"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/news/${prevPost.slug}`}
                className="group p-4 bg-card/30 border border-white/5 card-hover-dramatic clip-card-skew"
              >
                <span className="font-display text-[10px] tracking-[0.15em] text-muted-foreground/40 uppercase">
                  Precedente
                </span>
                <p className="font-display text-xs font-bold tracking-wide mt-1 group-hover:text-gg-orange transition-colors line-clamp-1">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/news/${nextPost.slug}`}
                className="group p-4 bg-card/30 border border-white/5 card-hover-dramatic clip-card-skew text-right"
              >
                <span className="font-display text-[10px] tracking-[0.15em] text-muted-foreground/40 uppercase">
                  Successivo
                </span>
                <p className="font-display text-xs font-bold tracking-wide mt-1 group-hover:text-gg-orange transition-colors line-clamp-1">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </article>
    </div>
  );
}
