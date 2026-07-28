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
    <section className="relative overflow-hidden py-32">

      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[450px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/10
          blur-[140px]
        "
      />


      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            How It Works
          </p>


          <h2
            className="
              mt-6
              text-5xl
              font-semibold
              tracking-tight
              text-white
            "
          >
            Three simple steps.
          </h2>


          <p
            className="
              mt-8
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Skildur removes complexity by keeping everything connected from the
            beginning.
          </p>

        </div>


        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step) => (

            <div
              key={step.number}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-indigo-400/30
              "
            >

              <p
                className="
                  text-5xl
                  font-semibold
                  text-indigo-400
                  transition
                  group-hover:text-indigo-300
                "
              >
                {step.number}
              </p>


              <h3
                className="
                  mt-8
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                {step.title}
              </h3>


              <p
                className="
                  mt-4
                  leading-7
                  text-zinc-400
                "
              >
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}