const trustPoints = [
  {
    title: "Connected by design",
    description:
      "Projects, documents, dashboards, and AI are built to work together instead of living separately.",
  },
  {
    title: "Privacy focused",
    description:
      "Your workspace is designed around control, ownership, and responsible handling of information.",
  },
  {
    title: "Built for teams",
    description:
      "Skildur is designed for people who need clarity across complex workflows.",
  },
];

export function TrustedSection() {
  return (
    <section className="relative overflow-hidden py-24">

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[400px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-[150px]
        "
      />


      <div className="mx-auto max-w-7xl px-6">


        <div
          className="
            flex
            flex-col
            gap-6
            border-y
            border-white/10
            py-16
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

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
              Why Skildur
            </p>


            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-white
                md:text-5xl
              "
            >
              Built on{" "}
              <span className="text-indigo-400">
                trust.
              </span>
            </h2>


          </div>


          <p
            className="
              max-w-md
              text-zinc-400
              leading-7
            "
          >
            Skildur is built with a focus on connected workflows, simplicity,
            and giving teams a clearer way to work.
          </p>


        </div>



        <div
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {trustPoints.map((point) => (

            <div
              key={point.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              <h3
                className="
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {point.title}
              </h3>


              <p
                className="
                  mt-4
                  leading-7
                  text-zinc-400
                "
              >
                {point.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}