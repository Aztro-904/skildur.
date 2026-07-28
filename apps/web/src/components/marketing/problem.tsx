

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
    <section className="relative overflow-hidden py-32">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-[150px]
        "
      />


      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            The Problem
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
            Work is fragmented.
          </h2>


          <p
            className="
              mt-8
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Modern work happens across dozens of disconnected tools. Every new
            app creates another place where information lives, making it harder
            to stay organised and even harder for AI to understand your work.
          </p>

        </div>


        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {problems.map((problem) => (

            <div
              key={problem.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-indigo-400/30
                hover:bg-white/[0.05]
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]
              "
            >

              <div
                className="
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-500/10
                  text-xl
                  text-indigo-400
                  transition
                  group-hover:bg-indigo-500/20
                "
              >
                ×
              </div>


              <h3
                className="
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {problem.title}
              </h3>


              <p
                className="
                  mt-4
                  leading-7
                  text-zinc-400
                "
              >
                {problem.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}