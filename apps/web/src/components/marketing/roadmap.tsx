const roadmap = [
  {
    phase: "Now",
    title: "The connected workspace",
    description:
      "A unified place for projects, documents, dashboards, and everything your team needs.",
  },
  {
    phase: "Next",
    title: "Deeper intelligence",
    description:
      "AI that understands your workflows, decisions, and the context behind your work.",
  },
  {
    phase: "Future",
    title: "A smarter way to work",
    description:
      "A workspace that continuously adapts around how people create and collaborate.",
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden py-32"
    >

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-1/2
          -z-10
          h-[500px]
          w-[500px]
          -translate-y-1/2
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
            Roadmap
          </p>


          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              tracking-[-0.05em]
              text-white
              md:text-6xl
            "
          >
            Building the next{" "}
            <span className="text-indigo-400">
              layer.
            </span>
          </h2>


          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Skildur is evolving toward a future where information, people, and
            intelligence work together naturally.
          </p>


        </div>



        <div className="mt-20 space-y-6">


          {roadmap.map((item) => (

            <div
              key={item.phase}
              className="
                group
                grid
                gap-6
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                hover:border-indigo-400/30
                md:grid-cols-[120px_1fr]
              "
            >

              <div
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-zinc-500
                "
              >
                {item.phase}
              </div>


              <div>

                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    max-w-2xl
                    leading-7
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}