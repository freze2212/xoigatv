const DEFAULT_IFRAME_URL = "https://example.com";

export function IframePanel() {
  const iframeUrl = process.env.NEXT_PUBLIC_IFRAME_URL ?? DEFAULT_IFRAME_URL;

  return (
    <section className="glass-panel overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--neon))] shadow-[0_0_18px_rgba(57,255,20,0.55)]" />
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Nguồn nhúng (iframe)
          </h2>
        </div>
        <div className="hidden text-xs text-white/55 md:block">Bên phải</div>
      </div>

      <div className="px-4 pb-3">
        <div className="rounded-xl border border-white/10 bg-black/35 p-3 text-xs text-white/70">
          <div className="flex flex-col gap-1">
            <div className="text-white/55">Đang dùng:</div>
            <div className="break-all font-mono text-[11px] text-white/80">
              {iframeUrl}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[520px] w-full border-t border-white/10 bg-black/30 xl:h-[calc(100vh-220px)]">
        <iframe
          title="embedded-football-site"
          src={iframeUrl}
          className="h-full w-full"
          referrerPolicy="no-referrer"
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-presentation"
        />
      </div>
    </section>
  );
}

