const plans = [
  {
    name: "Starter",
    description:
      "For individuals exploring a connected workspace.",
    price: "$0",
    features: [
      "Personal workspace",
      "Basic projects",
      "Limited AI assistance",
    ],
  },
  {
    name: "Team",
    description:
      "For teams building with clarity.",
    price: "$12",
    featured: true,
    features: [
      "Everything in Starter",
      "Shared workspaces",
      "Advanced AI context",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    description:
      "For organisations scaling intelligent work.",
    price: "Custom",
    features: [
      "Advanced security",
      "Custom workflows",
      "Dedicated support",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-32"
    >

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
          blur-[160px]
        "
      />


      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">


          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-indigo-400
            "
          >
            Pricing
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
            Simple plans.
            <br />
            Built to{" "}
            <span className="text-indigo-400">
              scale.
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Start small and grow into a workspace designed around your team.
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

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`
                rounded-3xl
                border
                p-8
                backdrop-blur-xl
                transition
                ${
                  plan.featured
                    ? `
                      border-indigo-400/40
                      bg-indigo-500/10
                      shadow-[0_30px_80px_rgba(99,102,241,0.18)]
                    `
                    : `
                      border-white/10
                      bg-white/[0.03]
                    `
                }
              `}
            >

              <h3
                className="
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {plan.name}
              </h3>


              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-zinc-400
                "
              >
                {plan.description}
              </p>


              <div
                className="
                  mt-8
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                {plan.price}

                {plan.price !== "Custom" && (
                  <span
                    className="
                      text-base
                      font-normal
                      text-zinc-500
                    "
                  >
                    /month
                  </span>
                )}

              </div>


              <button
                className={`
                  mt-8
                  w-full
                  rounded-full
                  py-3
                  text-sm
                  font-medium
                  transition
                  ${
                    plan.featured
                      ? `
                        bg-indigo-500
                        text-white
                        hover:bg-indigo-400
                      `
                      : `
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-white
                        hover:bg-white/[0.08]
                      `
                  }
                `}
              >
                Get Started
              </button>


              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-zinc-400
                    "
                  >

                    <div
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-indigo-400
                      "
                    />

                    {feature}

                  </div>

                ))}

              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}
