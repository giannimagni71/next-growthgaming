"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Users,
  GraduationCap,
  ArrowRight,
  Zap,
  ChevronDown,
  Gamepad2,
} from "lucide-react";
import { posts } from "@/lib/data";
import { Marquee } from "@/components/marquee";
import { SectionDivider } from "@/components/section-divider";
import { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const words = [
  "esports",
  "videogiochi",
  "crescita",
  "community",
  "formazione",
  "tornei",
];

const features = [
  {
    icon: Trophy,
    title: "ESPORTS",
    description:
      "Tornei, competizioni e team building. Il gaming competitivo fatto bene.",
  },
  {
    icon: GraduationCap,
    title: "ACADEMY",
    description:
      "Growth Academy: 30 ore di formazione dove il gaming diventa competenza.",
  },
  {
    icon: Users,
    title: "COMMUNITY",
    description:
      "Spazi di incontro online e offline. Perché giocare è meglio insieme.",
  },
  {
    icon: Zap,
    title: "EVENTI",
    description:
      "LAN party, talk, workshop. L'energia del gaming dal vivo.",
  },
];

const latestPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

function AnimatedWord() {
  return (
    <span className="inline-block relative h-[1.3em]">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 text-gradient font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{
            duration: 3,
            delay: i * 3,
            repeat: Infinity,
            repeatDelay: (words.length - 1) * 3,
            times: [0, 0.1, 0.9, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
      <span className="invisible font-display">formazione_</span>
    </span>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

function NewsCarouselMobile() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <div className="md:hidden overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {latestPosts.map((post, i) => (
          <div key={post.slug} className="flex-[0_0_85%] min-w-0">
            <Link href={`/news/${post.slug}`}>
              <div className="group relative bg-card/60 border border-white/5 card-hover-dramatic clip-card-skew h-full flex flex-col overflow-hidden">
                <div className="h-[2px] bg-gradient-to-r from-gg-orange to-gg-red" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="font-display text-[10px] font-bold tracking-[0.15em] text-gg-orange/70 uppercase">
                      {post.category}
                    </span>
                    <span className="text-white/10">|</span>
                    <span className="text-xs text-muted-foreground/60 font-mono">
                      {new Date(post.date).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-wide mb-3 group-hover:text-gg-orange transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-display tracking-wider text-gg-orange/50 group-hover:text-gg-orange transition-colors">
                    LEGGI <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            poster="/images/hero-poster.jpg"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay absolute inset-0" />
          {/* Atmospheric orange gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent">
            <div className="absolute inset-0 atmosphere-orange" />
          </div>
        </div>

        {/* Diagonal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[2]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          {/* GG Ghost text */}
          <div className="ghost-text text-[300px] sm:text-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            GG
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Logo */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Image
                src="/images/logo-sfondo-trasparente-Copia-300x293.png"
                alt="Growth Gaming"
                width={180}
                height={180}
                className="drop-shadow-[0_0_40px_rgba(255,107,0,0.3)]"
                priority
              />
            </motion.div>

            <h1 className="font-display text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tight mb-4 leading-[0.9]">
              <span className="text-foreground">GROWTH</span>
              <br />
              <span className="text-gradient glow-orange">GAMING</span>
            </h1>

            {/* Decorative line */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gg-orange/40 to-transparent mx-auto mb-4" />

            <div className="text-xl sm:text-2xl text-muted-foreground mb-3 font-body">
              <span className="text-gg-orange/60 font-mono text-base mr-2">
                &gt;
              </span>
              <AnimatedWord />
            </div>

            <p className="text-lg font-body text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Giocare per crescere. Associazione di promozione sociale dedicata
              alla cultura del videogioco.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/growth-academy"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-gg-orange to-gg-red text-black font-display text-xs font-bold tracking-widest rounded box-glow hover:scale-[1.02] transition-transform"
              >
                <GraduationCap className="h-4 w-4" />
                GROWTH ACADEMY
              </Link>
              <Link
                href="/chi-siamo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 text-foreground font-display text-xs font-semibold tracking-widest rounded hover:border-gg-orange/30 hover:bg-gg-orange/5 transition-all"
              >
                SCOPRI DI PIU
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5 text-gg-orange/30" />
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Features — Asymmetric layout */}
      <section className="py-28 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="text-center mb-20 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-wide">
              COSA FACCIAMO
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gg-orange to-gg-red mx-auto mb-4" />
            <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
              Quattro aree, un obiettivo: rendere il gaming uno strumento di
              crescita.
            </p>
          </motion.div>

          {/* Asymmetric 2+2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-6 bg-card/60 border border-white/5 card-hover-dramatic clip-card-skew overflow-hidden ${
                  i === 0 ? "sm:col-span-2 sm:p-8" : ""
                } ${i === 2 ? "sm:mt-4" : ""} ${i === 3 ? "sm:-mt-4" : ""}`}
              >
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-gg-orange to-gg-red opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Ghost number */}
                <div className="ghost-text text-[120px] sm:text-[160px] -right-4 -bottom-8 opacity-[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded bg-gg-orange/5 border border-gg-orange/10 mb-5 text-gg-orange group-hover:bg-gg-orange/10 transition-colors">
                    <feature.icon className={`${i === 0 ? "h-6 w-6" : "h-5 w-5"}`} />
                  </div>
                  <h3 className={`font-display font-bold tracking-wider mb-2 ${i === 0 ? "text-base" : "text-sm"}`}>
                    {feature.title}
                  </h3>
                  <p className={`font-body text-muted-foreground leading-relaxed ${i === 0 ? "text-base max-w-lg" : "text-sm"}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Academy CTA — with diagonal clip */}
      <section className="relative py-28 clip-slant-top clip-slant-bottom bg-card/30">
        <div className="absolute inset-0 atmosphere-orange" />
        {/* ACADEMY ghost */}
        <div className="ghost-text text-[80px] sm:text-[150px] lg:text-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          ACADEMY
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="font-display text-[10px] font-bold tracking-[0.3em] text-gg-orange/60 uppercase">
                Formazione
              </span>
              <h2 className="font-display text-5xl sm:text-7xl font-black mt-2 mb-3 tracking-tight">
                GROWTH{" "}
                <span className="text-gradient">ACADEMY</span>
              </h2>
              <p className="text-xl font-body text-muted-foreground mb-2 cursor-blink">
                Imparare, giocando
              </p>
              <p className="font-body text-muted-foreground mb-8 max-w-lg leading-relaxed">
                3 mesi, 30 ore, 70% pratica. Il programma che trasforma la
                passione per il gaming in competenze concrete.
              </p>
              <Link
                href="/growth-academy"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gg-orange/30 text-gg-orange font-display text-xs font-bold tracking-widest rounded hover:bg-gg-orange/10 box-glow-hover transition-all"
              >
                IL PROGRAMMA
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="hidden lg:block relative -mt-16">
              <Image
                src="/images/gacademy-logo.png"
                alt="Growth Academy"
                width={220}
                height={220}
                className="opacity-70 drop-shadow-[0_0_50px_rgba(255,107,0,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-28 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* NEWS ghost */}
          <div className="ghost-text text-[120px] sm:text-[200px] -top-4 -left-4">
            NEWS
          </div>

          <div className="relative flex items-end justify-between mb-14">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-wide">
                NEWS
              </h2>
              <div className="w-10 h-[2px] bg-gradient-to-r from-gg-orange to-gg-red mt-3" />
            </div>
            <Link
              href="/news"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-body text-gg-orange hover:text-gg-ember transition-colors"
            >
              Tutte le news <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Desktop: featured layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {latestPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <Link href={`/news/${post.slug}`}>
                  <div className={`relative bg-card/60 border border-white/5 card-hover-dramatic clip-card-skew h-full flex flex-col overflow-hidden`}>
                    {/* Top accent */}
                    <div className="h-[2px] bg-gradient-to-r from-gg-orange to-gg-red" />

                    <div className={`flex-1 flex flex-col ${i === 0 ? "p-8" : "p-6"}`}>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="font-display text-[10px] font-bold tracking-[0.15em] text-gg-orange/70 uppercase">
                          {post.category}
                        </span>
                        <span className="text-white/10">|</span>
                        <span className="text-xs text-muted-foreground/60 font-mono">
                          {new Date(post.date).toLocaleDateString("it-IT", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className={`font-display font-bold tracking-wide mb-3 group-hover:text-gg-orange transition-colors line-clamp-2 leading-snug ${
                        i === 0 ? "text-xl sm:text-2xl" : "text-sm"
                      }`}>
                        {post.title}
                      </h3>

                      <p className={`font-body text-muted-foreground flex-1 leading-relaxed ${
                        i === 0 ? "text-base line-clamp-4" : "text-sm line-clamp-3"
                      }`}>
                        {post.excerpt}
                      </p>

                      <div className="mt-5 flex items-center gap-1 text-xs font-display tracking-wider text-gg-orange/50 group-hover:text-gg-orange transition-colors">
                        LEGGI <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Mobile: Embla carousel */}
          <NewsCarouselMobile />

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-sm font-body text-gg-orange"
            >
              Tutte le news <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionDivider direction="bottom" />
      <section className="py-28 bg-card/20 relative">
        <div className="absolute inset-0 atmosphere-red" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { value: 3, suffix: "+", label: "ANNI DI ATTIVITA", icon: Zap },
              { value: 200, suffix: "+", label: "PERSONE FORMATE", icon: Users },
              { value: 50, suffix: "+", label: "EVENTI ORGANIZZATI", icon: Trophy },
              { value: 74, suffix: "", label: "RECORD PARTECIPANTI", icon: Gamepad2 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                {/* Glow behind number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gg-orange/[0.03] blur-2xl" />
                <stat.icon className="h-4 w-4 text-gg-orange/30 mx-auto mb-4 relative z-10" />
                <div className="font-display text-4xl sm:text-5xl font-black text-gradient glow-orange mb-2 relative z-10">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-display text-[10px] font-semibold tracking-[0.2em] text-muted-foreground/60 relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider direction="top" />
    </div>
  );
}
