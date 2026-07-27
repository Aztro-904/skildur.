export function Roadmap() {
  const items = [
    {
      title: "Projects",
      status: "MVP",
      description: "Plan and manage work from one place.",
    },
    {
      title: "Documents",
      status: "MVP",
      description: "Write and organise connected knowledge.",
    },
    {
      title: "Dashboards",
      status: "MVP",
      description: "Track progress with live metrics.",
    },
    {
      title: "Reports",
      status: "MVP",
      description: "Generate professional reports.",
    },
    {
      title: "Workspace AI",
      status: "Coming Soon",
      description: "An assistant that understands your entire workspace.",
    },
    {
      title: "Automation",
      status: "Coming Soon",
      description: "Automate repetitive workflows.",
    },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Roadmap
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
            Built for today.
            <br />
            Growing tomorrow.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            We're focused on building a rock-solid workspace first, then expanding
            into intelligent automation and AI.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
            >
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-neutral-600">
                  {item.description}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  item.status === "MVP"
                    ? "bg-green-100 text-green-700"
                    : "bg-neutral-100 text-neutral-600"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}