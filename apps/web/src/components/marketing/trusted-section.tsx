export function TrustedSection() {
  const companies = [
    "Vertex",
    "Northstar",
    "Linear Labs",
    "Atlas",
    "Nova",
  ];

  return (
    <section
      className="
        relative
        border-y
        border-white/10
        py-16
        overflow-hidden
      "
    >

      {/* subtle ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-64
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />


      <div className="mx-auto max-w-7xl px-6">

        <p
          className="
            text-center
            text-sm
            text-zinc-500
          "
        >
          Trusted by modern teams building the future
        </p>


        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-8
            text-center
            text-lg
            font-medium
            text-zinc-500
            md:grid-cols-5
          "
        >

          {companies.map((company) => (

            <div
              key={company}
              className="
                transition
                duration-300
                hover:text-zinc-300
              "
            >
              {company}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}