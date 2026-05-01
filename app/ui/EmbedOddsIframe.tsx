export function EmbedOddsIframe() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <iframe
        src="https://soikeo.xxx/embed/odds"
        title="Tỷ lệ cược SOIKEO.XXX"
        width="100%"
        height="900"
        style={{ border: 0, maxWidth: "100%" }}
        loading="lazy"
      />
    </div>
  );
}

