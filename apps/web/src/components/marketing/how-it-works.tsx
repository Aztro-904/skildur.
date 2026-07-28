const steps = [
  {
    number: "01",
    title: (
      <>
        <span className="text-indigo-400">Connect</span> everything
      </>
    ),
    description:
      "Bring projects, documents, and knowledge into one shared workspace.",
  },
  {
    number: "02",
    title: (
      <>
        <span className="text-indigo-400">Understand</span> your work
      </>
    ),
    description:
      "Give your team and AI the full context behind every decision.",
  },
  {
    number: "03",
    title: (
      <>
        Move with <span className="text-indigo-400">clarity</span>
      </>
    ),
    description:
      "Turn connected information into faster, better decisions.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-32">

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/10
          blur-[150px]
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
            How It Works
          </p>


          <h2
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-4xl
              font-semibold
              tracking-[-0.05em]
              text-white
              md:text-6xl
            "
          >
            From scattered to{" "}
            <span className="text-indigo-400">
              connected.
            </span>
          </h2>

        </div>



        <div
          className="
            mt-24
            grid
            gap-12
            md:grid-cols-3
          "
        >

          {steps.map((step) => (

            <div
              key={step.number}
              className="
                border-t
                border-white/10
                pt-8
              "
            >

              <p
                className="
                  text-sm
                  font-medium
                  text-zinc-600
                "
              >
                {step.number}
              </p>


              <h3
                className="
                  mt-8
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                {step.title}
              </h3>


              <p
                className="
                  mt-5
                  leading-7
                  text-zinc-400
                "
              >
                {step.description}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}