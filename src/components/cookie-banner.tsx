"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "gg-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-3xl bg-black/95 border border-gg-orange/20 backdrop-blur-sm p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm font-body text-muted-foreground flex-1">
          Questo sito utilizza solo cookie tecnici necessari al funzionamento.
          Nessun tracciamento, nessuna profilazione.{" "}
          <Link
            href="/cookie-policy"
            className="text-gg-orange/80 hover:text-gg-orange transition-colors underline underline-offset-2"
          >
            Cookie Policy
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 px-5 py-2 bg-gradient-to-r from-gg-orange to-gg-red text-black font-display text-xs font-bold tracking-widest hover:opacity-90 transition-opacity"
        >
          ACCETTA
        </button>
      </div>
    </div>
  );
}
