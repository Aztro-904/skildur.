import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-40">

      {/* Deep atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/20
          blur-[220px]
        "
      />


      <div className="mx-auto max-w-6xl px-6">


        <div
          className="
            relative
            overflow-hidden
            rounded-[48px]
            border
            border-white/10
            bg-gradient-to-b
            from-white/[0.08]
            to-white/[0.02]
            px-8
            py-24
            text-center
            shadow-[0_50px_150px_rgba(0,0,0,0.7)]
            md:px-20
          "
        >

          {/* Inner glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-indigo-400/20
              blur-[100px]
            "
          />


          <div className="relative">


            <p
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.35em]
                text-indigo-300
              "
            >
              Join Skildur
            </p>


            <h2
              className="
                mx-auto
                mt-8
                max-w-4xl
                text-5xl
                font-semibold
                leading-[1.05]
                tracking-[-0.06em]
                text-white
                md:text-7xl
              "
            >
              Your work deserves
              <br />

              a{" "}
              <span className="text-indigo-400">
                better
              </span>{" "}
              place.
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
              Stop searching across disconnected tools. Bring your projects,
              knowledge, and intelligence into one workspace built around you.
            </p>



            <div className="mt-12 flex justify-center">


              <Link
                href="/signup"
                className="
                  group
                  relative
                  rounded-full
                  bg-white
                  px-10
                  py-4
                  font-medium
                  text-black
                  transition
                  hover:-translate-y-1
                "
              >

                <span className="relative z-10">
                  Enter Skildur
                </span>

              </Link>


            </div>


            <p
              className="
                mt-5
                text-sm
                text-zinc-500
              "
            >
              Start building your connected workspace today.
            </p>


          </div>


        </div>


      </div>


    </section>
  );
}