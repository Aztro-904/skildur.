export function ConnectedWorkspace() {
  const items = [
    "Projects",
    "Documents",
    "Tasks",
    "Reports",
    "Dashboards",
    "AI",
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Everything is connected.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
          Skildur brings your projects, knowledge, data, and AI together into
          one intelligent workspace.
        </p>

        <div className="relative mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}