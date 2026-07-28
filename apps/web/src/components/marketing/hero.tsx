import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40">

      {/* Ambient background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[600px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/20
          blur-[140px]
        "
      />

      <div className="mx-auto max-w-7xl px-6 text-center">

        <h1
          className="
            mx-auto
            max-w-4xl
            text-5xl
            font-semibold
            tracking-tight
            text-white
            md:text-7xl
          "
        >
          The Intelligent Workspace.
        </h1>


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
          Connect projects, documents, dashboards, reports, and AI into one
          modern workspace where everything stays organised, searchable, and
          actionable.
        </p>


        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/signup"
            className="
              rounded-full
              bg-indigo-500
              px-7
              py-3
              font-medium
              text-white
              shadow-[0_0_40px_rgba(99,102,241,0.35)]
              transition
              hover:-translate-y-0.5
              hover:bg-indigo-400
            "
          >
            Get Started
          </Link>


          <button
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-7
              py-3
              font-medium
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/10
            "
          >
            Watch Demo
          </button>

        </div>


        {/* Dashboard Preview */}
        <div
          className="
            relative
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            shadow-[0_30px_100px_rgba(0,0,0,0.5)]
            backdrop-blur-xl
          "
        >

          {/* Preview glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-b
              from-indigo-500/10
              to-transparent
            "
          />

          <div
            className="
              relative
              flex
              aspect-video
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-black/40
            "
          >
            <span className="text-zinc-500">
              Skildur Dashboard Preview
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}