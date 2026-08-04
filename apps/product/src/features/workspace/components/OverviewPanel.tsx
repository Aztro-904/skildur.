export function OverviewPanel() {
  return (
    <section className="rounded-3xl border border-white/8 bg-[#18181B] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">Workspace overview</p>
          <h2 className="mt-3 text-xl font-semibold text-white">Intelligence at a glance</h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50">
          Live
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/8 bg-[#0F0F12] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Focus</p>
          <p className="mt-3 text-lg font-semibold text-white">Project Atlas deadline in 5 days</p>
          <p className="mt-2 text-sm text-white/50">Review the launch brief and align every connected object.</p>
        </div>

        <div className="rounded-3xl border border-white/8 bg-[#0F0F12] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Insight</p>
          <p className="mt-3 text-lg font-semibold text-white">3 priority updates today</p>
          <p className="mt-2 text-sm text-white/50">Documents, decisions, and AI suggestions are aligned in one place.</p>
        </div>
      </div>
    </section>
  );
}
