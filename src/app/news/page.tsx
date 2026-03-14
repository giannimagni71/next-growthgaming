"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/data";

const categories = ["tutti", ...new Set(posts.map((p) => p.category))];

export default function News() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedPosts[0];
  const rest = sortedPosts.slice(1);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* NEWS ghost */}
        <div className="ghost-text text-[150px] sm:text-[250px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          NEWS
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-display text-[10px] font-bold tracking-[0.3em] text-gg-orange/60 uppercase">
              News & Eventi
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black mt-3 mb-4 tracking-tight">
              RIMANI{" "}
              <span className="text-gradient">AGGIORNATO</span>
            </h1>
            <p className="text-lg font-body text-muted-foreground">
              Tutto quello che succede nel mondo Growth Gaming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Category filters */}
          <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-display text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap px-4 py-2 border border-white/5 text-muted-foreground hover:text-gg-orange hover:border-gg-orange/20 transition-colors clip-card-skew"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href={`/news/${featured.slug}`}>
                <div className="group relative flex flex-col p-6 sm:p-8 bg-card/50 border border-white/5 card-hover-dramatic clip-card-skew overflow-hidden">
                  <div className="h-[2px] bg-gradient-to-r from-gg-orange to-gg-red absolute top-0 left-0 right-0" />

                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="font-display text-[10px] font-bold tracking-[0.15em] text-gg-orange/70 uppercase">
                      {featured.category}
                    </span>
                    <span className="text-white/10">|</span>
                    <span className="font-mono text-xs text-muted-foreground/50">
                      {new Date(featured.date).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="font-display text-xl sm:text-3xl font-bold tracking-wide mb-3 group-hover:text-gg-orange transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-base font-body text-muted-foreground line-clamp-3 leading-relaxed max-w-2xl">
                    {featured.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {featured.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground/40 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-xs font-display tracking-wider text-gg-orange/50 group-hover:text-gg-orange transition-colors">
                    LEGGI <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Rest — offset alternates */}
          <div className="space-y-3">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={i % 2 === 0 ? "sm:ml-8" : "sm:mr-8"}
              >
                <Link href={`/news/${post.slug}`}>
                  <div className="group relative flex flex-col sm:flex-row gap-4 p-5 bg-card/30 border border-white/5 hover:border-gg-orange/15 hover:bg-card/50 transition-all clip-card-skew">
                    {/* Date */}
                    <div className="flex-shrink-0 sm:w-24">
                      <div className="font-mono text-xs text-muted-foreground/50">
                        {new Date(post.date).toLocaleDateString("it-IT", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="font-display text-[10px] font-bold tracking-[0.15em] text-gg-orange/60 uppercase">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="font-display text-sm font-bold tracking-wide mb-1.5 group-hover:text-gg-orange transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm font-body text-muted-foreground line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-muted-foreground/40 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:flex items-center">
                      <ArrowRight className="h-4 w-4 text-white/10 group-hover:text-gg-orange group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
