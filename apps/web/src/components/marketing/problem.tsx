import RevealText from "@/components/ui/RevealText";

export function Problem() {
  const problems = [
    {
      title: "Information scattered",
      description:
        "Projects, documents, and decisions are spread across too many disconnected tools.",
    },
    {
      title: "Context disappears",
      description:
        "Teams lose time searching instead of understanding what matters next.",
    },
    {
      title: "AI sees fragments",
      description:
        "Most AI tools only know isolated pieces of your work.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">

      {/* Atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-1/3
          -z-10
          h-[500px]
          w-[500px]
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
              tracking-[0.3em]
              text-indigo-400
            "
          >
            The Problem
          </p>


         <RevealText
  as="h2"
  className="
    mt-6
    text-4xl
    font-semibold
    leading-tight
    tracking-[-0.05em]
    text-white
    md:text-6xl
  "
>
  Work became too{" "}
  <span className="text-indigo-400">
    fragmented.
  </span>
</RevealText>


          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Modern teams have more tools than ever, yet information is harder
            to find, harder to understand, and harder to act on.
          </p>


        </div>



        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {problems.map((problem, index) => (

            <div
              key={problem.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                duration-300
                hover:-translate-y-1
                hover:border-indigo-400/30
                hover:bg-white/[0.05]
              "
            >

              <div
                className="
                  mb-10
                  text-sm
                  font-medium
                  text-zinc-600
                "
              >
                0{index + 1}
              </div>


              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight
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