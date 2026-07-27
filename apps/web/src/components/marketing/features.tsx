export function Features() {
  const features = [
    {
      title: "Projects",
      description:
        "Plan, organise and execute work from one collaborative workspace.",
    },
    {
      title: "Documents",
      description:
        "Write, organise and connect knowledge with everything else.",
    },
    {
      title: "Dashboards",
      description:
        "Visualise progress, metrics and insights in real time.",
    },
    {
      title: "Reports",
      description:
        "Generate professional reports from live workspace data.",
    },
    {
      title: "AI",
      description:
        "An assistant that understands your entire workspace, not isolated files.",
    },
    {
      title: "Automation",
      description:
        "Automate repetitive workflows across every part of your workspace.",
    },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Features
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
            Everything you need.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Built around one connected workspace instead of disconnected apps.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-neutral-100" />

              <h3 className="text-xl font-semibold text-neutral-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}