import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy di Growth Gaming APS ai sensi dell'Art. 13 del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="font-display text-[10px] font-bold tracking-[0.3em] text-gg-orange/60 uppercase">
            Legale
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-6 tracking-tight">
            <span className="text-gradient">PRIVACY POLICY</span>
          </h1>
          <p className="text-sm font-body text-muted-foreground/60 mb-12">
            Ultimo aggiornamento: 15 marzo 2026
          </p>

          <div className="space-y-10 font-body text-muted-foreground leading-relaxed">
            {/* Titolare */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                1. Titolare del trattamento
              </h2>
              <p>
                <strong className="text-white/80">Growth Gaming APS</strong>
                <br />
                Sassari, Sardegna
                <br />
                Email:{" "}
                <a
                  href="mailto:info@growthgaming.it"
                  className="text-gg-orange/80 hover:text-gg-orange transition-colors"
                >
                  info@growthgaming.it
                </a>
              </p>
            </section>

            {/* Dati raccolti */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                2. Dati personali raccolti
              </h2>
              <p className="mb-3">
                Raccogliamo dati personali esclusivamente attraverso il{" "}
                <strong className="text-white/80">modulo contatti</strong> del
                sito:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Nome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono (facoltativo)</li>
                <li>Contenuto del messaggio</li>
              </ul>
              <p className="mt-3">
                Non raccogliamo dati di navigazione a fini di profilazione. Non
                utilizziamo analytics o strumenti di tracciamento di terze
                parti.
              </p>
            </section>

            {/* Finalità */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                3. Finalità e base giuridica
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-card/30 border border-white/5">
                  <p className="text-white/80 font-display text-sm font-bold mb-1">
                    Risposta alle richieste di contatto
                  </p>
                  <p className="text-sm">
                    Base giuridica: consenso dell&apos;interessato (Art. 6,
                    comma 1, lett. a GDPR), espresso tramite la compilazione
                    volontaria del modulo e la spunta della relativa checkbox.
                  </p>
                </div>
                <div className="p-4 bg-card/30 border border-white/5">
                  <p className="text-white/80 font-display text-sm font-bold mb-1">
                    Funzionamento tecnico del sito
                  </p>
                  <p className="text-sm">
                    Base giuridica: legittimo interesse del titolare (Art. 6,
                    comma 1, lett. f GDPR) per garantire il corretto
                    funzionamento e la sicurezza del sito web.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                4. Cookie
              </h2>
              <p>
                Questo sito utilizza esclusivamente{" "}
                <strong className="text-white/80">cookie tecnici</strong>{" "}
                necessari al suo funzionamento. Non utilizziamo cookie di
                profilazione, marketing o di terze parti. Per maggiori dettagli,
                consulta la nostra{" "}
                <Link
                  href="/cookie-policy"
                  className="text-gg-orange/80 hover:text-gg-orange transition-colors"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* Conservazione */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                5. Periodo di conservazione
              </h2>
              <p>
                I dati raccolti tramite il modulo contatti vengono conservati per
                il tempo strettamente necessario a gestire la richiesta e
                comunque per un periodo non superiore a{" "}
                <strong className="text-white/80">24 mesi</strong> dalla
                ricezione, salvo obblighi di legge che ne richiedano una
                conservazione più lunga.
              </p>
            </section>

            {/* Trasferimento */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                6. Comunicazione e trasferimento dei dati
              </h2>
              <p>
                I dati personali non vengono comunicati a terzi, venduti o
                trasferiti al di fuori dell&apos;Unione Europea. I dati sono
                trattati esclusivamente dal titolare e dai suoi collaboratori
                interni, debitamente autorizzati.
              </p>
            </section>

            {/* Diritti */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                7. Diritti dell&apos;interessato
              </h2>
              <p className="mb-3">
                In qualità di interessato, hai il diritto di:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong className="text-white/80">Accesso</strong> &mdash;
                  ottenere conferma dell&apos;esistenza dei tuoi dati e
                  accedervi
                </li>
                <li>
                  <strong className="text-white/80">Rettifica</strong> &mdash;
                  correggere dati inesatti o incompleti
                </li>
                <li>
                  <strong className="text-white/80">Cancellazione</strong>{" "}
                  &mdash; richiedere la cancellazione dei tuoi dati
                </li>
                <li>
                  <strong className="text-white/80">
                    Limitazione del trattamento
                  </strong>{" "}
                  &mdash; limitare il trattamento in determinati casi
                </li>
                <li>
                  <strong className="text-white/80">Portabilità</strong> &mdash;
                  ricevere i tuoi dati in formato strutturato
                </li>
                <li>
                  <strong className="text-white/80">Opposizione</strong> &mdash;
                  opporti al trattamento dei tuoi dati
                </li>
                <li>
                  <strong className="text-white/80">Revoca del consenso</strong>{" "}
                  &mdash; revocare il consenso in qualsiasi momento
                </li>
              </ul>
              <p className="mt-3">
                Per esercitare i tuoi diritti, scrivi a{" "}
                <a
                  href="mailto:info@growthgaming.it"
                  className="text-gg-orange/80 hover:text-gg-orange transition-colors"
                >
                  info@growthgaming.it
                </a>
                . Hai inoltre il diritto di proporre reclamo al{" "}
                <strong className="text-white/80">
                  Garante per la protezione dei dati personali
                </strong>
                .
              </p>
            </section>

            {/* Modifiche */}
            <section>
              <h2 className="font-display text-lg font-bold text-white mb-3">
                8. Modifiche alla presente informativa
              </h2>
              <p>
                Growth Gaming APS si riserva il diritto di aggiornare questa
                informativa. Le modifiche saranno pubblicate su questa pagina
                con indicazione della data di ultimo aggiornamento.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
