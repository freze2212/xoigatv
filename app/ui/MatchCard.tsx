export type Match = {
  league: string;
  home: string;
  away: string;
  time: string;
  tag?: string;
};

export function MatchCard({ match }: { match: Match }) {
  return (
    <article className="match-card">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold tracking-wide text-white/70">
          {match.league}
        </div>
        {match.tag ? <span className="badge">{match.tag}</span> : null}
      </div>

      <div className="mt-3 space-y-2">
        <TeamRow name={match.home} side="home" />
        <TeamRow name={match.away} side="away" />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-white/60">Giờ đá</div>
        <div className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs font-semibold text-white/85">
          {match.time}
        </div>
      </div>
    </article>
  );
}

function TeamRow({ name, side }: { name: string; side: "home" | "away" }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-7 w-7 rounded-lg ring-1 ring-white/10"
        style={{
          background:
            side === "home"
              ? "linear-gradient(135deg, rgba(var(--neon), 0.35), rgba(16,185,129,0.06))"
              : "linear-gradient(135deg, rgba(16,185,129,0.28), rgba(var(--neon), 0.06))",
        }}
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1 truncate text-sm font-medium text-white/90">
        {name}
      </div>
      <div className="hidden h-1.5 w-1.5 rounded-full bg-[rgb(var(--neon))]/70 md:block" />
    </div>
  );
}

