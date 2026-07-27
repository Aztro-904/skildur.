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
    <section id="pricing" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Pricing
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
  Simple, transparent pricing.
</h2>

<p className="mt-8 text-lg leading-8 text-neutral-600">
  Start for free and upgrade when your team needs more.
</p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition hover:-translate-y-1 hover:shadow-lg ${
                plan.featured
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-neutral-200 bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-semibold ${
                  plan.featured ? "text-white" : "text-neutral-900"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`mt-3 ${
                  plan.featured ? "text-blue-100" : "text-neutral-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>

                {plan.price !== "Custom" && (
                  <span
                    className={
                      plan.featured ? "text-blue-100" : "text-neutral-500"
                    }
                  >
                    /user/mo
                  </span>
                )}
              </div>

              <button
                className={`mt-8 w-full rounded-full px-5 py-3 font-medium transition ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-neutral-900 text-white hover:bg-black"
                }`}
              >
                {plan.button}
              </button>

              <ul className="mt-10 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm ${
                      plan.featured ? "text-blue-50" : "text-neutral-600"
                    }`}
                  >
                    ✓ {feature}
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