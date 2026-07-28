export function ConnectedWorkspace() {
  return (
    <section className="relative py-32 overflow-hidden">

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

          <span
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Connected Workspace
          </span>


          <h2
            className="
              mt-6
              text-5xl
              font-semibold
              tracking-tight
              text-white
            "
          >
            Everything works together.
          </h2>


          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Skildur connects your projects, documents, dashboards, reports and
            AI into one intelligent workspace.
          </p>

        </div>


        {/* Workspace Diagram */}
        <div
          className="
            relative
            mx-auto
            mt-24
            h-[650px]
            max-w-5xl
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
          "
        >

          {/* Inner glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[32px]
              bg-gradient-to-b
              from-indigo-500/10
              to-transparent
            "
          />


          {/* Center */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                rounded-3xl
                border
                border-indigo-400/30
                bg-indigo-500/20
                px-10
                py-8
                text-xl
                font-semibold
                text-white
                shadow-[0_0_50px_rgba(99,102,241,0.35)]
                backdrop-blur-xl
              "
            >
              Workspace
            </div>
          </div>


          {/* Top */}
          <div
            className="
              absolute
              left-1/2
              top-12
              -translate-x-1/2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-8
              py-5
              text-zinc-200
              shadow-lg
              backdrop-blur-xl
            "
          >
            Projects
          </div>


          {/* Left */}
          <div
            className="
              absolute
              left-10
              top-1/2
              -translate-y-1/2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-8
              py-5
              text-zinc-200
              shadow-lg
              backdrop-blur-xl
            "
          >
            Documents
          </div>


          {/* Right */}
          <div
            className="
              absolute
              right-10
              top-1/2
              -translate-y-1/2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-8
              py-5
              text-zinc-200
              shadow-lg
              backdrop-blur-xl
            "
          >
            Dashboards
          </div>


          {/* Bottom Left */}
          <div
            className="
              absolute
              bottom-10
              left-56
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-8
              py-5
              text-zinc-200
              shadow-lg
              backdrop-blur-xl
            "
          >
            Reports
          </div>


          {/* Bottom Right */}
          <div
            className="
              absolute
              bottom-10
              right-56
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-8
              py-5
              text-zinc-200
              shadow-lg
              backdrop-blur-xl
            "
          >
            AI
          </div>

        </div>

      </div>
    </section>
  );
}