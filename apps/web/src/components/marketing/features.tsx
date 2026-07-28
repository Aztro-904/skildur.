import BorderGlow from "@/components/ui/BorderGlow";

export function Features() {
  const features = [
    {
      title: "Projects",
      description:
        "Plan, organise and execute work from one collaborative workspace.",
    },
    {
      title: "Documents",
      description:
        "Write, organise and connect knowledge with everything else.",
    },
    {
      title: "Dashboards",
      description:
        "Visualise progress, metrics and insights in real time.",
    },
    {
      title: "Reports",
      description:
        "Generate professional reports from live workspace data.",
    },
    {
      title: "AI",
      description:
        "An assistant that understands your entire workspace, not isolated files.",
    },
    {
      title: "Automation",
      description:
        "Automate repetitive workflows across every part of your workspace.",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden py-32">

      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-40
          -z-10
          h-[500px]
          w-[700px]
          -translate-x-1/2
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
            Features
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
            Everything you need.
          </h2>


          <p
            className="
              mt-8
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Built around one connected workspace instead of disconnected apps.
          </p>

        </div>


        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <BorderGlow
              key={feature.title}

              edgeSensitivity={18}

              /* Indigo Skildur glow */
              glowColor="235 85 75"

              backgroundColor="#111113"

              borderRadius={28}

              glowRadius={90}

              glowIntensity={1.6}

              coneSpread={45}

              animated={false}

              colors={[
                "#312E81",
                "#6366F1",
                "#818CF8",
              ]}

              className="
                transition-transform
                duration-300
                hover:-translate-y-2
              "
            >

              <div className="p-8">

                {/* Icon placeholder */}
                <div
                  className="
                    mb-6
                    h-12
                    w-12
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    shadow-inner
                  "
                />


                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {feature.title}
                </h3>


                <p
                  className="
                    mt-4
                    leading-7
                    text-zinc-400
                  "
                >
                  {feature.description}
                </p>

              </div>

            </BorderGlow>

          ))}

        </div>

      </div>

    </section>
  );
}