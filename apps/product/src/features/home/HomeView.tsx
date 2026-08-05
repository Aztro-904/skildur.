"use client";

import {
  ArrowUpRight,
  Database,
  FileText,
  Boxes,
  Sparkles,
  Activity,
} from "lucide-react";


const modules = [
  {
    name: "Knowledge",
    description:
      "Documents, decisions, and connected information.",
    icon: FileText,
    href: "/knowledge",
  },
  {
    name: "Data",
    description:
      "Datasets, analytics, and intelligent insights.",
    icon: Database,
    href: "/data",
  },
  {
    name: "Objects",
    description:
      "Entities and relationships across Skildur.",
    icon: Boxes,
    href: "/objects",
  },
];


const activity = [
  "Revenue dataset analyzed",
  "Project documentation updated",
  "New object relationship created",
];


export function HomeView() {

  return (
    <div
      className="
        mx-auto
        max-w-[1200px]
        px-8
        py-12
      "
    >

      {/* Overview Header */}

      <section>

        <p
          className="
            text-xs
            uppercase
            tracking-[0.18em]
            text-[color:var(--white-30)]
          "
        >
          Overview
        </p>


        <h1
          className="
            mt-5
            text-5xl
            font-semibold
            tracking-[-0.05em]
            text-[color:var(--foreground)]
          "
        >
          Your intelligent

          <span
            className="
              block
              text-[color:var(--accent-hover)]
            "
          >
            overview.
          </span>

        </h1>


        <p
          className="
            mt-5
            max-w-xl
            text-base
            leading-7
            text-[color:var(--white-45)]
          "
        >
          Skildur gives you a complete view of your
          projects, knowledge, data, and intelligence.
        </p>

      </section>




      {/* Core Modules */}

      <section
        className="
          mt-14
          grid
          gap-4
          md:grid-cols-3
        "
      >

        {modules.map((module) => {

          const Icon =
            module.icon;


          return (
            <button
              key={module.name}

              className="
                group

                rounded-2xl

                border
                border-[var(--white-07)]

                bg-[var(--white-02)]

                p-5

                text-left

                transition

                hover:bg-[var(--white-05)]
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    bg-[var(--accent-soft)]

                    text-[color:var(--accent-text)]
                  "
                >

                  <Icon size={18}/>

                </div>


                <ArrowUpRight
                  size={16}
                  className="
                    text-[color:var(--white-30)]

                    transition

                    group-hover:text-[color:var(--foreground)]
                  "
                />

              </div>



              <h3
                className="
                  mt-5
                  text-lg
                  font-medium
                  text-[color:var(--foreground)]
                "
              >
                {module.name}
              </h3>



              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[color:var(--white-40)]
                "
              >
                {module.description}
              </p>


            </button>
          );

        })}

      </section>





      {/* AI Intelligence */}

      <section
        className="
          mt-10

          rounded-2xl

          border
          border-[var(--white-07)]

          bg-[var(--white-02)]

          p-6
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <Sparkles
            size={18}
            className="
              text-[color:var(--accent-text)]
            "
          />


          <h2
            className="
              font-medium
              text-[color:var(--foreground)]
            "
          >
            AI Intelligence
          </h2>


        </div>


        <p
          className="
            mt-3
            text-sm
            text-[color:var(--white-45)]
          "
        >
          Skildur continuously discovers patterns,
          changes, and useful insights across your
          organization.
        </p>


      </section>





      {/* Recent Activity */}

      <section
        className="
          mt-10
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <Activity
            size={16}
            className="
              text-[color:var(--white-40)]
            "
          />


          <h2
            className="
              text-sm
              font-medium
              text-[color:var(--foreground)]
            "
          >
            Recent Activity
          </h2>


        </div>



        <div
          className="
            mt-4
            space-y-2
          "
        >

          {activity.map((item) => (

            <div
              key={item}

              className="
                rounded-xl

                border
                border-[var(--white-06)]

                bg-[var(--white-015)]

                px-4
                py-3

                text-sm

                text-[color:var(--white-50)]
              "
            >

              {item}

            </div>

          ))}

        </div>


      </section>


    </div>
  );
}