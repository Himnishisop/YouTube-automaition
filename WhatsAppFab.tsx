import { useEffect, useState } from "react";
import { waLink, PHONE_DISPLAY } from "../lib/site";
import { WaIcon } from "./Nav";

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setTip(true), 2600);
    const t2 = setTimeout(() => setTip(false), 9000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-[70] flex items-center gap-3 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <div
        className={`hidden max-w-[230px] rounded-2xl rounded-br-sm border border-white/10 bg-white px-4 py-3 text-right text-sm leading-snug text-ink shadow-2xl transition-all duration-500 sm:block ${
          tip ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"
        }`}
      >
        <b className="block font-display">Need scripts that convert?</b>
        <span className="text-ink/60">Message me — I reply in minutes.</span>
      </div>

      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label={`Hire KK Creations on WhatsApp ${PHONE_DISPLAY}`}
        onMouseEnter={() => setTip(true)}
        className="animate-shake group relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.9)]"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          style={{ animation: "pulse-ring 2.2s cubic-bezier(0.2,0.6,0.3,1) infinite" }}
        />
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          style={{ animation: "pulse-ring 2.2s cubic-bezier(0.2,0.6,0.3,1) 1.1s infinite" }}
        />
        <WaIcon className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-flame text-[11px] font-bold text-white ring-4 ring-ink">
          1
        </span>
      </a>
    </div>
  );
}
