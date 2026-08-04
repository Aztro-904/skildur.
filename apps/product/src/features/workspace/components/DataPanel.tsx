export function DataPanel() {
  return (
    <section className="rounded-3xl border border-white/8 bg-[#18181B] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">Data</p>
          <h2 className="mt-3 text-lg font-semibold text-white">Intelligent datasets</h2>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/40">4 sources</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { label: "Inventory", value: "1,248 items" },
          { label: "Sales forecast", value: "+12% trend" },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/8 bg-[#0F0F12] p-4">
            <p className="text-sm text-white/50">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
