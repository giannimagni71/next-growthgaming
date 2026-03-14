"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Sword } from "lucide-react";
import { aboutContent, manifesto } from "@/lib/data";
import { SectionDivider } from "@/components/section-divider";

export default function ChiSiamo() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* GG ghost */}
        <div className="ghost-text text-[250px] sm:text-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          GG
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-display text-[10px] font-bold tracking-[0.3em] text-gg-orange/60 uppercase">
              Chi siamo
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-black mt-3 mb-4 tracking-tight">
              GROWTH <span className="text-gradient">GAMING</span>
            </h1>
            <p className="text-xl font-body text-muted-foreground">
              {aboutContent.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About content */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
            {aboutContent.content.split("\n\n").map((paragraph, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {paragraph.startsWith("**") ? (
                  <h3 className="font-display text-base font-bold tracking-wider text-gg-orange mt-10 mb-2">
                    {paragraph.replace(/\*\*/g, "").split(" — ")[0]}
                    {paragraph.includes(" — ") && (
                      <span className="text-muted-foreground font-body font-normal text-lg">
                        {" — "}
                        {paragraph.replace(/\*\*/g, "").split(" — ")[1]}
                      </span>
                    )}
                  </h3>
                ) : (
                  <p>{paragraph}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-14">
            IL TEAM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {aboutContent.team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-6 bg-card/60 border border-white/5 card-hover-dramatic clip-card-skew text-center overflow-hidden ${
                  i === 0 ? "sm:col-span-3 sm:max-w-md sm:mx-auto sm:p-8" : ""
                }`}
              >
                {/* Ghost number */}
                <div className="ghost-text text-[100px] -right-2 -bottom-4 opacity-[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="h-16 w-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-gg-orange/20 to-gg-red/10 border border-gg-orange/20 flex items-center justify-center">
                    <span className="font-display text-xl font-black text-gradient">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-wider mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-body text-gg-orange/70 mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs font-body text-muted-foreground">
                    {member.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <SectionDivider direction="bottom" />
      <section className="py-24 bg-card/20 relative overflow-hidden">
        {/* MANIFESTO ghost */}
        <div className="ghost-text text-[60px] sm:text-[120px] lg:text-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          MANIFESTO
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative">
            <Sword className="h-6 w-6 text-gg-orange/50 mb-6" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-8">
              {manifesto.title.toUpperCase()}
            </h2>
            <div className="space-y-4 font-body text-lg">
              {manifesto.content.split("\n\n").map((block, i) => {
                if (block.startsWith("**") && block.includes("**")) {
                  const num = block.match(/\d+\./)?.[0] || "";
                  const title =
                    block.match(/\*\*(.+?)\*\*/)?.[1]?.replace(/^\d+\.\s*/, "") || "";
                  const desc = block.replace(/\*\*.+?\*\*\s*—?\s*/, "");
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="font-display text-xs font-bold text-gg-orange/50 mt-1.5 w-6 flex-shrink-0">
                        {num}
                      </span>
                      <div>
                        <span className="font-display text-sm font-bold tracking-wider text-foreground">
                          {title}
                        </span>
                        {desc && (
                          <span className="text-muted-foreground"> — {desc}</span>
                        )}
                      </div>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {block}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <SectionDivider direction="top" />

      {/* Values — offset alternates */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-14">
            I NOSTRI VALORI
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: Target,
                title: "LEARNING BY DOING",
                desc: "70% pratica, sempre. Impari facendo, non ascoltando.",
              },
              {
                icon: Heart,
                title: "INCLUSIONE",
                desc: "Tecnologia per tutti. Il gaming è il luogo dove la diversità si incontra.",
              },
              {
                icon: Sword,
                title: "COMPETIZIONE SANA",
                desc: "Vincere è bello, ma come si vince conta di più.",
              },
              {
                icon: Users,
                title: "COMMUNITY FIRST",
                desc: "Le persone prima dei giochi. La tecnologia è lo strumento, non il fine.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex gap-4 p-5 bg-card/30 border border-white/5 hover:border-gg-orange/10 transition-colors clip-card-skew ${
                  i % 2 === 0 ? "sm:mr-16" : "sm:ml-16"
                }`}
              >
                <value.icon className="h-5 w-5 text-gg-orange/60 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-xs font-bold tracking-wider mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
