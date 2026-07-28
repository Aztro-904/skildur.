import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/20
          blur-[140px]
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.04]
          px-8
          py-24
          text-center
          text-white
          shadow-[0_30px_100px_rgba(0,0,0,0.5)]
          backdrop-blur-xl
        "
      >

        {/* Glass gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-indigo-500/20
            via-transparent
            to-transparent
          "
        />


        <div className="relative">

          <h2
            className="
              text-5xl
              font-semibold
              tracking-tight
            "
          >
            Ready to simplify your workspace?
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-zinc-400
            "
          >
            Join the people building their next generation of work with
            Skildur.
          </p>


          <Link
            href="/signup"
            className="
              mt-10
              inline-flex
              rounded-full
              bg-indigo-500
              px-8
              py-4
              font-medium
              text-white
              shadow-[0_0_50px_rgba(99,102,241,0.45)]
              transition
              hover:-translate-y-1
              hover:bg-indigo-400
            "
          >
            Get Started
          </Link>

        </div>

      </div>

    </section>
  );
}