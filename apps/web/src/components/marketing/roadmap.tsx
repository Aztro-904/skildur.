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
    <section className="relative overflow-hidden py-32">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/4
          -z-10
          h-[500px]
          w-[600px]
          rounded-full
          bg-indigo-500/10
          blur-[140px]
        "
      />


      <div className="mx-auto max-w-7xl px-6">

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
            Roadmap
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
            Built for today.
            <br />
            Growing tomorrow.
          </h2>


          <p
            className="
              mt-8
              text-lg
              leading-8
              text-zinc-400
            "
          >
            We're focused on building a rock-solid workspace first, then
            expanding into intelligent automation and AI.
          </p>

        </div>


        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {items.map((item) => (

            <div
              key={item.title}
              className="
                group
                flex
                items-start
                justify-between
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-400/30
                hover:bg-white/[0.05]
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]
              "
            >

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>

              </div>


              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  backdrop-blur-md

                  ${
                    item.status === "MVP"
                      ? `
                        bg-indigo-500/20
                        text-indigo-300
                        border
                        border-indigo-400/20
                      `
                      : `
                        bg-white/5
                        text-zinc-400
                        border
                        border-white/10
                      `
                  }
                `}
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