"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "./actions";

export default function Contatti() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const result = await sendContactEmail({ nome, email, telefono, messaggio });

    setLoading(false);
    if (result.success) {
      setSuccess(true);
      setNome("");
      setEmail("");
      setTelefono("");
      setMessaggio("");
    } else {
      setError(result.error || "Errore nell'invio.");
    }
  }

  return (
    <div className="relative">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-display text-[10px] font-bold tracking-[0.3em] text-gg-orange/60 uppercase">
              Contatti
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black mt-3 mb-4 tracking-tight">
              <span className="text-gradient">CONTATTACI</span>
            </h1>
            <p className="text-lg font-body text-muted-foreground max-w-lg leading-relaxed">
              Hai un&apos;idea, una proposta, una domanda? Scrivici. Rispondiamo
              sempre.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form
                className="space-y-5 p-6 sm:p-8 bg-card/50 border border-white/5 clip-card-skew"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-[10px] font-bold tracking-[0.15em] text-muted-foreground/60 uppercase mb-2 block">
                      Nome
                    </label>
                    <Input
                      placeholder="Il tuo nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                      className="bg-black/50 border-white/10 font-body focus:border-l-gg-orange focus:border-l-2 focus:ring-0 focus:border-white/10"
                    />
                  </div>
                  <div>
                    <label className="font-display text-[10px] font-bold tracking-[0.15em] text-muted-foreground/60 uppercase mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="la@tua.email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black/50 border-white/10 font-body focus:border-l-gg-orange focus:border-l-2 focus:ring-0 focus:border-white/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-display text-[10px] font-bold tracking-[0.15em] text-muted-foreground/60 uppercase mb-2 block">
                    Telefono{" "}
                    <span className="text-muted-foreground/30 normal-case tracking-normal font-body text-xs">
                      (opzionale)
                    </span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="+39 ..."
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="bg-black/50 border-white/10 font-body focus:border-l-gg-orange focus:border-l-2 focus:ring-0 focus:border-white/10"
                  />
                </div>

                <div>
                  <label className="font-display text-[10px] font-bold tracking-[0.15em] text-muted-foreground/60 uppercase mb-2 block">
                    Messaggio
                  </label>
                  <Textarea
                    placeholder="Raccontaci..."
                    rows={5}
                    value={messaggio}
                    onChange={(e) => setMessaggio(e.target.value)}
                    required
                    className="bg-black/50 border-white/10 font-body resize-none focus:border-l-gg-orange focus:border-l-2 focus:ring-0 focus:border-white/10"
                  />
                </div>

                {success && (
                  <div className="flex items-center gap-2 text-green-400 text-sm font-body">
                    <CheckCircle2 className="h-4 w-4" />
                    Messaggio inviato. Ti risponderemo al più presto.
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm font-body">
                    <XCircle className="h-4 w-4" />
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-gg-orange to-gg-red text-black font-display text-xs font-bold tracking-widest hover:opacity-90 animate-submit-pulse disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 mr-2 animate-spin" />
                      INVIO IN CORSO...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 mr-2" />
                      INVIA MESSAGGIO
                    </>
                  )}
                </Button>

                <p className="text-xs font-body text-muted-foreground/40 text-center">
                  Niente spam. Mai. Lo promettiamo.
                </p>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-4 w-4 text-gg-orange/60" />
                  <h3 className="font-display text-xs font-bold tracking-wider">
                    EMAIL
                  </h3>
                </div>
                <a
                  href="mailto:info@growthgaming.it"
                  className="font-body text-muted-foreground hover:text-gg-orange transition-colors"
                >
                  info@growthgaming.it
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-gg-orange/60" />
                  <h3 className="font-display text-xs font-bold tracking-wider">
                    DOVE SIAMO
                  </h3>
                </div>
                <p className="font-body text-muted-foreground">
                  Sassari, Sardegna
                </p>
              </div>

              <div className="p-5 bg-card/30 border border-white/5 clip-card-skew">
                <h3 className="font-display text-xs font-bold tracking-wider mb-4">
                  SOCIAL
                </h3>
                <div className="space-y-2.5">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/growthgamingss" },
                    { label: "Instagram", href: "https://www.instagram.com/growthgamingss" },
                    { label: "YouTube", href: "https://www.youtube.com/@growthgamingss" },
                    { label: "Discord", href: "https://discord.gg/growthgaming" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-body text-muted-foreground hover:text-gg-orange transition-colors"
                    >
                      {social.label} &rarr;
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative p-5 gradient-border bg-card/30 overflow-hidden">
                {/* JOSHUA ghost */}
                <div className="ghost-text text-[60px] -right-2 top-1/2 -translate-y-1/2 opacity-[0.04]">
                  JOSHUA
                </div>
                <p className="text-base font-body text-muted-foreground italic leading-relaxed relative z-10">
                  &ldquo;L&apos;unica mossa vincente è giocare.&rdquo;
                </p>
                <p className="text-[10px] text-gg-orange/40 mt-2 font-display tracking-wider relative z-10">
                  JOSHUA &mdash; WARGAMES (1983)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
