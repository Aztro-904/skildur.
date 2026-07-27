export function ConnectedWorkspace() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Connected Workspace
          </span>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
            Everything works together.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Skildur connects your projects, documents, dashboards, reports and
            AI into one intelligent workspace.
          </p>
        </div>

        <div className="relative mx-auto mt-24 h-[650px] max-w-5xl rounded-[32px] border border-neutral-200 bg-neutral-50">

          {/* Workspace */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-3xl bg-black px-10 py-8 text-xl font-semibold text-white shadow-xl">
              Workspace
            </div>
          </div>

          {/* Top */}
          <div className="absolute left-1/2 top-12 -translate-x-1/2 rounded-2xl border bg-white px-8 py-5 shadow-sm">
            Projects
          </div>

          {/* Left */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 rounded-2xl border bg-white px-8 py-5 shadow-sm">
            Documents
          </div>

          {/* Right */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 rounded-2xl border bg-white px-8 py-5 shadow-sm">
            Dashboards
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-10 left-56 rounded-2xl border bg-white px-8 py-5 shadow-sm">
            Reports
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-10 right-56 rounded-2xl border bg-white px-8 py-5 shadow-sm">
            AI
          </div>

        </div>

      </div>
    </section>
  );
}