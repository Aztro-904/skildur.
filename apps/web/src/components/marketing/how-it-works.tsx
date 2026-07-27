export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Bring everything together",
      description:
        "Projects, documents, dashboards, reports and AI live in one connected workspace.",
    },
    {
      number: "02",
      title: "Everything stays connected",
      description:
        "Information links naturally, so context is never lost as your work grows.",
    },
    {
      number: "03",
      title: "AI understands your work",
      description:
        "Instead of isolated files, AI can reason across your entire workspace.",
    },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            How It Works
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
            Three simple steps.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Skildur removes complexity by keeping everything connected from the
            beginning.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
            >
              <p className="text-5xl font-semibold text-blue-600">
                {step.number}
              </p>

              <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}