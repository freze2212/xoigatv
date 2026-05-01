import Link from "next/link";

export function EmbedOddsIframe() {
  return (
    <div className="odds-embed relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10">
        <div className="flex h-11 items-center justify-between gap-2 bg-black/75 px-3 backdrop-blur">
          <div className="text-xs font-semibold tracking-wide text-white/85">
            TỶ LỆ KÈO
          </div>
          <div className="pointer-events-auto flex items-center gap-2">
            <Link
              href="https://t.me/CSKHGG88KJC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center rounded-full border border-white/15 bg-white/5 px-3 text-[11px] font-semibold text-white/90 hover:bg-white/10"
            >
              CSKH
            </Link>
            <Link
              href="https://gg8850.com/?id=525443428"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center rounded-full bg-[#39ff14] px-3 text-[11px] font-extrabold text-black hover:brightness-110"
            >
              ĐĂNG KÝ
            </Link>
          </div>
        </div>
      </div>

      <iframe
        src="https://soikeo.xxx/embed/odds"
        title="Tỷ lệ cược SOIKEO.XXX"
        width="100%"
        height="900"
        style={{ border: 0, maxWidth: "100%", display: "block" }}
        loading="lazy"
      />
    </div>
  );
}

