import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy di Growth Gaming APS. Informazioni sui cookie tecnici utilizzati dal sito.",
};

export default function CookiePolicy() {
  return (
    <div className="relative">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="font-display text-[10px] font-bold tracking-[0.3em] text-gg-orange/60 uppercase">
            Legale
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-6 tracking-tight">
            <span className="text-gradient">COOKIE POLICY</span>
          </h1>
          <p className="text-sm font-body text-muted-foreground/60 mb-12">
            Ultimo aggiornamento: 15 marzo 2026
          </p>

          <div className="space-y-10 font-body text-muted-foreground leading-relaxed">
            {/* Cosa sono */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                1. Cosa sono i cookie
              </h2>
              <p>
                I cookie sono piccoli file di testo che i siti web salvano sul
                tuo dispositivo durante la navigazione. Vengono utilizzati per
                far funzionare i siti in modo efficiente e per fornire
                informazioni ai proprietari del sito.
              </p>
            </section>

            {/* Cookie utilizzati */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                2. Cookie utilizzati da questo sito
              </h2>
              <p className="mb-4">
                Questo sito utilizza esclusivamente{" "}
                <strong className="text-white/80">cookie tecnici</strong>,
                necessari per il corretto funzionamento delle pagine.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/10">
                  <thead>
                    <tr className="border-b border-white/10 bg-card/30">
                      <th className="text-left p-3 font-display text-xs font-bold text-white/80">
                        Tipo
                      </th>
                      <th className="text-left p-3 font-display text-xs font-bold text-white/80">
                        Finalità
                      </th>
                      <th className="text-left p-3 font-display text-xs font-bold text-white/80">
                        Durata
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-3">Cookie tecnici di sessione</td>
                      <td className="p-3">
                        Necessari per la navigazione e il funzionamento del sito
                      </td>
                      <td className="p-3">Sessione</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-3">Preferenza cookie banner</td>
                      <td className="p-3">
                        Memorizza la scelta dell&apos;utente sul banner cookie
                        (localStorage)
                      </td>
                      <td className="p-3">Persistente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cookie non utilizzati */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                3. Cookie non utilizzati
              </h2>
              <p>
                Questo sito <strong className="text-white/80">non</strong>{" "}
                utilizza:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Cookie di profilazione</li>
                <li>Cookie di marketing o remarketing</li>
                <li>Cookie analitici di terze parti</li>
                <li>Cookie di social network</li>
              </ul>
            </section>

            {/* Gestione */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                4. Come gestire i cookie
              </h2>
              <p className="mb-3">
                Puoi gestire le preferenze sui cookie direttamente dal tuo
                browser. Ogni browser offre la possibilità di accettare,
                rifiutare o eliminare i cookie. Tieni presente che disabilitare
                i cookie tecnici potrebbe compromettere il funzionamento del
                sito.
              </p>
              <p>
                Per istruzioni specifiche, consulta la guida del tuo browser:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Chrome: Impostazioni &gt; Privacy e sicurezza &gt; Cookie</li>
                <li>Firefox: Impostazioni &gt; Privacy &gt; Cookie</li>
                <li>Safari: Preferenze &gt; Privacy</li>
                <li>Edge: Impostazioni &gt; Cookie e autorizzazioni sito</li>
              </ul>
            </section>

            {/* Link privacy */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                5. Ulteriori informazioni
              </h2>
              <p>
                Per informazioni complete sul trattamento dei dati personali,
                consulta la nostra{" "}
                <Link
                  href="/privacy"
                  className="text-gg-orange/80 hover:text-gg-orange transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="mt-3">
                Per qualsiasi domanda, scrivi a{" "}
                <a
                  href="mailto:info@growthgaming.it"
                  className="text-gg-orange/80 hover:text-gg-orange transition-colors"
                >
                  info@growthgaming.it
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
