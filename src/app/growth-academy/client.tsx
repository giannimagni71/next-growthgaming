"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Monitor,
  Gamepad2,
  Megaphone,
  Brain,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { academyContent } from "@/lib/data";
import { SectionDivider } from "@/components/section-divider";
import { useRef, useEffect, useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Gamepad2,
  Megaphone,
  Brain,
};

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix2 = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return;
    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {isNaN(numericValue) ? value : `${count}${suffix2}`}
    </span>
  );
}

export default function GrowthAcademyClient() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gg-orange/3 via-transparent to-gg-red/3" />

        {/* GA ghost */}
        <div className="ghost-text text-[250px] sm:text-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          GA
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
          >
            <div className="flex-1">
              <span className="font-display text-[10px] font-bold tracking-[0.3em] text-gg-orange/60 uppercase flex items-center gap-2">
                <Sparkles className="h-3 w-3" />
                Il nostro programma di punta
              </span>
              <h1 className="font-display text-5xl sm:text-7xl font-black mt-3 mb-3 tracking-tight">
                GROWTH{" "}
                <span className="text-gradient">ACADEMY</span>
              </h1>
              <p className="text-2xl font-body text-muted-foreground cursor-blink">
                {academyContent.tagline}
              </p>
              <p className="text-lg font-body text-muted-foreground max-w-xl mt-4 leading-relaxed">
                {academyContent.intro}
              </p>
            </div>
            <div className="hidden lg:block flex-shrink-0">
              <Image
                src="/images/gacademy-logo.png"
                alt="Growth Academy"
                width={140}
                height={140}
                className="opacity-70 drop-shadow-[0_0_30px_rgba(255,107,0,0.2)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats — animated counters */}
      <section className="py-16 border-y border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {academyContent.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gg-orange/[0.03] blur-2xl" />
                <div className="font-display text-3xl sm:text-4xl font-black text-gradient glow-orange mb-1 relative z-10">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="font-display text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/60 uppercase relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-28 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-3">
              IL PROGRAMMA
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-gg-orange to-gg-red mb-4" />
            <p className="text-muted-foreground font-body text-lg max-w-md">
              Quattro moduli integrati. Ogni sessione ha un output concreto.
            </p>
          </motion.div>

          <div className="space-y-4">
            {academyContent.modules.map((mod, i) => {
              const Icon = iconMap[mod.icon] || Monitor;
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex gap-5 p-6 bg-card/60 border border-white/5 card-hover-dramatic clip-card-skew overflow-hidden"
                >
                  {/* XP bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-gg-orange to-gg-red xp-bar"
                      style={{
                        width: `${((i + 1) / academyContent.modules.length) * 100}%`,
                      }}
                    />
                  </div>

                  {/* Ghost number */}
                  <div className="ghost-text text-[140px] sm:text-[180px] -right-4 -bottom-8 opacity-[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-shrink-0 mt-1 relative z-10">
                    <div className="h-12 w-12 rounded bg-gg-orange/5 border border-gg-orange/10 flex items-center justify-center group-hover:border-gg-orange/30 transition-colors">
                      <Icon className="h-5 w-5 text-gg-orange" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-sm font-bold tracking-wider">
                        {mod.title.toUpperCase()}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground/50 bg-white/3 px-2 py-0.5 rounded">
                        {mod.duration}
                      </span>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <SectionDivider direction="bottom" />
      <section className="py-28 bg-card/20 relative">
        <div className="absolute inset-0 atmosphere-orange" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-6">
                IL NOSTRO APPROCCIO
              </h2>
              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                {academyContent.approach.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Sessioni pratiche al 70%",
                "Output concreto ogni lezione",
                "Psicologia cognitiva applicata",
                "Competenze spendibili nel lavoro",
                "Community di partecipanti",
                "Certificato di completamento",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3.5 bg-card/30 border border-white/5 clip-card-skew"
                >
                  <CheckCircle2 className="h-4 w-4 text-gg-orange flex-shrink-0" />
                  <span className="text-sm font-body text-foreground/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SectionDivider direction="top" />

      {/* Editions */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-14">
            LE EDIZIONI
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gg-orange/30 via-gg-orange/10 to-transparent" />

            <div className="space-y-10">
              {academyContent.editions.map((edition, i) => (
                <motion.div
                  key={edition.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex gap-6 pl-1"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gg-orange/10 border-2 border-gg-orange/30 flex items-center justify-center">
                      <span className="text-[10px] font-display font-black text-gg-orange">
                        {edition.year}
                      </span>
                    </div>
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-sm font-bold tracking-wider mb-2">
                      {edition.name.toUpperCase()}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {edition.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Next edition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex gap-6 pl-1"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="relative h-10 w-10 rounded-full bg-gg-orange/10 border-2 border-gg-orange flex items-center justify-center pulse-ring">
                    <span className="text-[10px] font-display font-black text-gg-orange">
                      NEW
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-wider mb-2">
                    PROSSIMA EDIZIONE
                  </h3>
                  <p className="font-body text-muted-foreground mb-5 leading-relaxed">
                    {academyContent.cta}
                  </p>
                  <Link
                    href="/contatti"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gg-orange to-gg-red text-black font-display text-xs font-bold tracking-widest rounded box-glow hover:scale-[1.02] transition-transform"
                  >
                    ISCRIVITI
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
