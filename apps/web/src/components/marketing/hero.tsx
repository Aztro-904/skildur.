export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-[#09090B] md:text-7xl">
          The Intelligent Workspace.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Connect projects, documents, dashboards, reports, and AI into one
          modern workspace where everything stays organised, searchable, and
          actionable.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-black px-7 py-3 font-medium text-white transition hover:bg-neutral-800">
            Get Started
          </button>

          <button className="rounded-full border border-neutral-200 bg-white px-7 py-3 font-medium text-black transition hover:bg-neutral-100">
            Watch Demo
          </button>
        </div>

        <div className="mt-20 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-neutral-200 bg-white">
            <span className="text-neutral-400">
              Skildur Dashboard Preview
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}