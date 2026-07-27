export function Problem() {
  const problems = [
    {
      title: "Scattered information",
      description:
        "Projects, notes and documents live across different tools, making context difficult to find.",
    },
    {
      title: "Constant context switching",
      description:
        "Moving between tabs interrupts focus and slows down everyday work.",
    },
    {
      title: "Disconnected AI",
      description:
        "AI only sees fragments instead of understanding your entire workspace.",
    },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            The Problem
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
            Work is fragmented.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Modern work happens across dozens of disconnected tools. Every new
            app creates another place where information lives, making it harder
            to stay organised and even harder for AI to understand your work.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-xl">
                ×
              </div>

              <h3 className="text-xl font-semibold text-neutral-900">
                {problem.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}