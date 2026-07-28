export function ProductPreview() {
  return (
    <section
      id="product"
      className="relative overflow-hidden py-32"
    >

      {/* Atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[600px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-[180px]
        "
      />


      <div className="mx-auto max-w-7xl px-6 text-center">


        <div className="mx-auto max-w-3xl">

          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-indigo-400
            "
          >
            The Workspace
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
            Everything in{" "}
            <span className="text-indigo-400">
              context.
            </span>
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Projects, documents, insights, and AI working together inside one
            connected environment.
          </p>

        </div>



        {/* Product mockup */}
        <div
          className="
            relative
            mt-20
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-3
            shadow-[0_50px_140px_rgba(0,0,0,0.7)]
            backdrop-blur-xl
          "
        >

          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-[#080808]
            "
          >


            {/* Top bar */}
            <div
              className="
                flex
                h-14
                items-center
                justify-between
                border-b
                border-white/10
                px-6
              "
            >

              <div
                className="
                  text-sm
                  font-medium
                  text-white
                "
              >
                Skildur Workspace
              </div>


              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-indigo-400
                "
              />

            </div>



            <div
              className="
                grid
                min-h-[500px]
                md:grid-cols-[220px_1fr]
              "
            >


              {/* Sidebar */}
              <aside
                className="
                  hidden
                  border-r
                  border-white/10
                  p-6
                  md:block
                "
              >

                <div className="space-y-5 text-sm text-zinc-500">

                  <p className="text-white">
                    Overview
                  </p>

                  <p>
                    Projects
                  </p>

                  <p>
                    Documents
                  </p>

                  <p>
                    Dashboards
                  </p>

                  <p>
                    AI Assistant
                  </p>

                </div>

              </aside>



              {/* Main */}
              <main
                className="
                  space-y-6
                  p-8
                  text-left
                "
              >

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                  "
                >

                  <p className="text-sm text-zinc-500">
                    Active project
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    Product Launch
                  </h3>


                  <div
                    className="
                      mt-6
                      h-2
                      rounded-full
                      bg-white/10
                    "
                  >

                    <div
                      className="
                        h-full
                        w-[72%]
                        rounded-full
                        bg-indigo-500
                      "
                    />

                  </div>

                </div>



                <div
                  className="
                    grid
                    gap-6
                    md:grid-cols-2
                  "
                >

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                    "
                  >

                    <p className="text-sm text-zinc-500">
                      Documents
                    </p>

                    <p className="mt-3 text-white">
                      24 connected files
                    </p>

                  </div>



                  <div
                    className="
                      rounded-2xl
                      border
                      border-indigo-400/20
                      bg-indigo-500/10
                      p-6
                    "
                  >

                    <p className="text-sm text-indigo-300">
                      AI Insight
                    </p>

                    <p className="mt-3 text-white">
                      Everything important is connected.
                    </p>

                  </div>

                </div>


              </main>


            </div>


          </div>

        </div>


      </div>

    </section>
  );
}