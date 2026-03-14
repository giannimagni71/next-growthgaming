import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gg-orange/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo-sfondo-trasparente-Copia-300x293.png"
                alt="Growth Gaming"
                width={36}
                height={36}
              />
              <span className="font-display text-sm font-bold tracking-wider text-gradient">
                GROWTH GAMING
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Giocare per crescere. Associazione di promozione sociale dedicata
              alla cultura del videogioco.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-xs font-bold text-gg-orange/70 uppercase tracking-[0.2em] mb-4">
              Esplora
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/chi-siamo", label: "Chi siamo" },
                { href: "/growth-academy", label: "Growth Academy" },
                { href: "/news", label: "News" },
                { href: "/contatti", label: "Contatti" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-muted-foreground hover:text-gg-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-xs font-bold text-gg-orange/70 uppercase tracking-[0.2em] mb-4">
              Social
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "https://www.facebook.com/growthgamingss", label: "Facebook" },
                { href: "https://www.instagram.com/growthgamingss", label: "Instagram" },
                { href: "https://www.youtube.com/@growthgamingss", label: "YouTube" },
                { href: "https://discord.gg/growthgaming", label: "Discord" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body text-muted-foreground hover:text-gg-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display text-xs font-bold text-gg-orange/70 uppercase tracking-[0.2em] mb-4">
              Info
            </h3>
            <div className="space-y-2.5 text-sm font-body text-muted-foreground">
              <p>Growth Gaming APS</p>
              <p>Sassari, Sardegna</p>
              <p>
                <a
                  href="mailto:info@growthgaming.it"
                  className="hover:text-gg-orange transition-colors"
                >
                  info@growthgaming.it
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60 font-body">
            &copy; {new Date().getFullYear()} Growth Gaming APS &mdash; GG.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground/60 hover:text-gg-orange transition-colors font-body"
            >
              Privacy
            </Link>
            <span className="text-xs text-white/10">|</span>
            <span className="text-xs text-muted-foreground/40 font-mono">
              v2.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
