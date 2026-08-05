"use client";

import {
  Database,
  FileText,
  Boxes,
  Activity,
  Users,
  Link2,
  ArrowUpRight,
} from "lucide-react";


const modules = [
  {
    title: "Data",
    description:
      "Datasets, analytics, and connected sources.",
    icon: Database,
    href: "/data",
  },
  {
    title: "Knowledge",
    description:
      "Documents and shared intelligence.",
    icon: FileText,
    href: "/knowledge",
  },
  {
    title: "Objects",
    description:
      "Entities and relationships.",
    icon: Boxes,
    href: "/objects",
  },
];


export function WorkspaceView() {
  return (
    <div
      className="
        space-y-8
        pb-10
      "
    >

      {/* Workspace header */}

      <section
        className="
          flex
          items-start
          justify-between
        "
      >

        <div>

          <p
            className="
              text-xs

              uppercase

              tracking-[0.18em]

              text-[color:var(--white-35)]
            "
          >
            Workspace
          </p>


          <h1
            className="
              mt-3

              text-3xl

              font-semibold

              tracking-tight

              text-[color:var(--foreground)]
            "
          >
            Operations Workspace
          </h1>


          <p
            className="
              mt-2

              max-w-xl

              text-sm

              text-[color:var(--white-45)]
            "
          >
            A connected environment for your
            projects, data, knowledge, and
            intelligent workflows.
          </p>

        </div>


        <button
          className="
            hidden

            items-center
            gap-2

            rounded-xl

            border
            border-[var(--white-08)]

            bg-[var(--white-03)]

            px-4
            py-2

            text-sm

            text-[color:var(--white-60)]

            hover:bg-[var(--white-06)]

            md:flex
          "
        >

          <Users
            size={16}
          />

          Members

        </button>


      </section>



      {/* Workspace modules */}

      <section
        className="
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
              key={module.title}

              className="
                group

                rounded-2xl

                border
                border-[var(--white-08)]

                bg-[var(--white-03)]

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

                  <Icon
                    size={19}
                  />

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


              <h2
                className="
                  mt-6

                  text-base

                  font-medium

                  text-[color:var(--foreground)]
                "
              >
                {module.title}
              </h2>


              <p
                className="
                  mt-2

                  text-sm

                  text-[color:var(--white-40)]
                "
              >
                {module.description}
              </p>


            </button>
          );

        })}

      </section>



      {/* Connected systems */}

      <section
        className="
          grid

          gap-6

          lg:grid-cols-2
        "
      >

        <div
          className="
            rounded-2xl

            border
            border-[var(--white-08)]

            bg-[var(--white-03)]

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

            <Link2
              size={18}

              className="
                text-[color:var(--accent-text)]
              "
            />


            <h2
              className="
                text-base

                font-medium
              "
            >
              Connections
            </h2>

          </div>


          <p
            className="
              mt-3

              text-sm

              text-[color:var(--white-40)]
            "
          >
            Manage external data sources,
            integrations, and services.
          </p>


        </div>



        <div
          className="
            rounded-2xl

            border
            border-[var(--white-08)]

            bg-[var(--white-03)]

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

            <Activity
              size={18}

              className="
                text-[color:var(--accent-text)]
              "
            />


            <h2
              className="
                text-base

                font-medium
              "
            >
              Activity
            </h2>

          </div>


          <p
            className="
              mt-3

              text-sm

              text-[color:var(--white-40)]
            "
          >
            Recent changes and events inside
            this workspace.
          </p>


        </div>


      </section>


    </div>
  );
}