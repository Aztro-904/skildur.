const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals getting started.",
    button: "Get Started",
    featured: false,
    features: [
      "1 workspace",
      "Up to 3 members",
      "Unlimited documents",
      "Basic projects",
      "Basic dashboards",
      "1 GB storage",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    description: "For professionals and small teams.",
    button: "Start Pro",
    featured: true,
    features: [
      "Everything in Free",
      "Unlimited workspaces",
      "Unlimited members",
      "Advanced projects",
      "Custom databases",
      "Automations",
      "Version history",
      "100 GB storage",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "$24",
    description: "Built for growing companies.",
    button: "Start Business",
    featured: false,
    features: [
      "Everything in Pro",
      "Admin console",
      "Single Sign-On (SSO)",
      "Audit logs",
      "Team permissions",
      "Team analytics",
      "API access",
      "1 TB shared storage",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organisations with advanced needs.",
    button: "Contact Sales",
    featured: false,
    features: [
      "Custom pricing",
      "Unlimited storage",
      "Advanced security",
      "Compliance",
      "Dedicated support",
      "Custom integrations",
      "SLA",
      "Custom contracts",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-32">

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
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
            Pricing
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
            Simple, transparent pricing.
          </h2>


          <p
            className="
              mt-8
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Start for free and upgrade when your team needs more.
          </p>

        </div>


        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`
                relative
                rounded-3xl
                border
                p-8
                transition
                duration-300
                hover:-translate-y-2

                ${
                  plan.featured
                    ? `
                      border-indigo-400/40
                      bg-indigo-500/20
                      shadow-[0_0_70px_rgba(99,102,241,0.25)]
                    `
                    : `
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                    `
                }
              `}
            >

              {plan.featured && (
                <div
                  className="
                    absolute
                    -top-3
                    left-1/2
                    -translate-x-1/2
                    rounded-full
                    bg-indigo-400
                    px-4
                    py-1
                    text-xs
                    font-medium
                    text-white
                  "
                >
                  Most Popular
                </div>
              )}


              <h3
                className="
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                {plan.name}
              </h3>


              <p
                className="
                  mt-3
                  text-zinc-400
                "
              >
                {plan.description}
              </p>


              <div className="mt-8 flex items-end gap-1">

                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="text-zinc-500">
                    /user/mo
                  </span>
                )}

              </div>


              <button
                className={`
                  mt-8
                  w-full
                  rounded-full
                  px-5
                  py-3
                  font-medium
                  transition

                  ${
                    plan.featured
                      ? `
                        bg-white
                        text-indigo-600
                        hover:bg-zinc-100
                      `
                      : `
                        bg-white
                        text-black
                        hover:bg-zinc-200
                      `
                  }
                `}
              >
                {plan.button}
              </button>


              <ul className="mt-10 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="
                      text-sm
                      text-zinc-400
                    "
                  >
                    <span className="text-indigo-400">
                      ✓
                    </span>{" "}
                    {feature}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}