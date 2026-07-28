const features = [
  {
    title: "Projects stay connected",
    highlight: "connected",
    description:
      "Plan, track, and manage work while keeping every decision attached to the bigger picture.",
    label: "Projects",
  },
  {
    title: "Knowledge stays organised",
    highlight: "organised",
    description:
      "Documents and information remain connected instead of disappearing across different tools.",
    label: "Documents",
  },
  {
    title: "AI understands context",
    highlight: "context",
    description:
      "Skildur AI works with your entire workspace, not isolated fragments.",
    label: "AI Assistant",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-32"
    >

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
            Capabilities
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
            Built around how teams{" "}
            <span className="text-indigo-400">
              work.
            </span>
          </h2>


        </div>



        <div className="mt-24 space-y-20">


          {features.map((feature, index) => (

            <div
              key={feature.label}
              className="
                grid
                items-center
                gap-12
                md:grid-cols-2
              "
            >


              <div
                className={
                  index % 2 === 1
                    ? "md:order-2"
                    : ""
                }
              >

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-zinc-600
                  "
                >
                  {feature.label}
                </p>


                <h3
                  className="
                    mt-5
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-white
                    md:text-4xl
                  "
                >
                  {feature.title.split(feature.highlight)[0]}

                  <span className="text-indigo-400">
                    {feature.highlight}
                  </span>

                  {feature.title.split(feature.highlight)[1]}

                </h3>


                <p
                  className="
                    mt-6
                    max-w-lg
                    text-lg
                    leading-8
                    text-zinc-400
                  "
                >
                  {feature.description}
                </p>


              </div>



              {/* Visual placeholder */}
              <div
                className="
                  relative
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    aspect-[4/3]
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    p-6
                  "
                >

                  <div
                    className="
                      h-3
                      w-24
                      rounded-full
                      bg-white/10
                    "
                  />


                  <div className="mt-8 space-y-4">

                    <div
                      className="
                        h-12
                        rounded-xl
                        bg-white/[0.05]
                      "
                    />

                    <div
                      className="
                        h-12
                        rounded-xl
                        bg-white/[0.05]
                      "
                    />

                    <div
                      className="
                        h-12
                        rounded-xl
                        bg-indigo-500/10
                      "
                    />

                  </div>

                </div>

              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}