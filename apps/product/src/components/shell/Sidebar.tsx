"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  FolderKanban,
  Database,
  BookOpen,
  Box,
  Brain,
  Workflow,
  Settings,
  Search,
} from "lucide-react";


const groups = [
  {
    label: "Core",
    items: [
      {
        name: "Overview",
        href: "/",
        icon: Home,
      },
      {
        name: "Workspaces",
        href: "/workspaces",
        icon: FolderKanban,
      },
      {
        name: "Data",
        href: "/data",
        icon: Database,
      },
      {
        name: "Knowledge",
        href: "/knowledge",
        icon: BookOpen,
      },
      {
        name: "Objects",
        href: "/objects",
        icon: Box,
      },
    ],
  },

  {
    label: "Intelligence",
    items: [
      {
        name: "Assistant",
        href: "/assistant",
        icon: Brain,
      },
      {
        name: "Automations",
        href: "/automations",
        icon: Workflow,
      },
    ],
  },

  {
    label: "System",
    items: [
      {
        name: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];


export function Sidebar() {

  const pathname = usePathname();


  return (
    <aside
      className="
        fixed
        left-0
        top-0

        flex
        h-screen
        w-[264px]
        flex-col

        border-r
        border-[var(--white-06)]

        bg-[var(--surface-backdrop)]

        backdrop-blur-2xl

        px-4
        py-5
      "
    >

      {/* Brand */}

      <div
        className="
          flex
          items-center
          gap-3

          px-2
          pb-6
        "
      >

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center

            rounded-xl

            border
            border-[var(--accent-muted)]

            bg-[var(--accent-soft)]

            text-sm
            font-semibold

            text-[color:var(--accent-text)]
          "
        >
          S
        </div>


        <span
          className="
            text-[17px]
            font-semibold
            tracking-tight
            text-[color:var(--foreground)]
          "
        >
          Skildur.
        </span>

      </div>



      {/* Search */}

      <button
        className="
          mb-6

          flex
          items-center
          gap-3

          rounded-xl

          border
          border-[var(--white-08)]

          bg-[var(--white-03)]

          px-3
          py-2.5

          text-sm

          text-[color:var(--white-40)]

          transition

          hover:bg-[var(--white-06)]
          hover:text-[color:var(--white-80)]
        "
      >

        <Search
          size={15}
          strokeWidth={1.8}
        />

        Search


        <span
          className="
            ml-auto

            rounded-md

            border
            border-[var(--white-08)]

            bg-[var(--white-02)]

            px-1.5
            py-0.5

            text-[10px]

            text-[color:var(--white-30)]
          "
        >
          ⌘K
        </span>

      </button>




      {/* Navigation */}

      <nav
        className="
          flex-1
          space-y-7
        "
      >

        {groups.map((group) => (

          <div
            key={group.label}
          >

            <p
              className="
                mb-2

                px-2

                text-[10px]

                uppercase

                tracking-[0.18em]

                text-[color:var(--white-25)]
              "
            >
              {group.label}
            </p>



            <div
              className="
                space-y-1
              "
            >

              {group.items.map((item) => {

                const Icon =
                  item.icon;


                const active =
                  pathname === item.href;



                return (
                  <Link
                    key={item.href}

                    href={item.href}

                    className={`
                      relative

                      flex
                      items-center
                      gap-3

                      rounded-xl

                      px-3
                      py-2.5

                      text-sm

                      transition-all

                      ${
                        active
                          ?
                            "bg-[var(--white-08)] text-[color:var(--foreground)]"
                          :
                            "text-[color:var(--white-45)] hover:bg-[var(--white-04)] hover:text-[color:var(--foreground)]"
                      }
                    `}
                  >

                    {active && (

                      <span
                        className="
                          absolute
                          left-0

                          h-5
                          w-[2px]

                          rounded-full

                          bg-[var(--accent-hover)]
                        "
                      />

                    )}



                    <Icon

                      size={16}

                      strokeWidth={1.8}

                      className={
                        active
                          ?
                            "text-[color:var(--accent-text)]"
                          :
                            "text-[color:var(--white-35)]"
                      }

                    />


                    {item.name}


                  </Link>
                );

              })}

            </div>


          </div>

        ))}

      </nav>




      {/* AI Status */}

      <div
        className="
          rounded-xl

          border
          border-[var(--white-06)]

          bg-[var(--white-02)]

          p-3
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              h-2
              w-2

              rounded-full

              bg-[var(--accent-hover)]

              shadow-[0_0_12px_rgba(99,102,241,0.8)]
            "
          />


          <span
            className="
              text-xs
              text-[color:var(--white-50)]
            "
          >
            AI Ready
          </span>

        </div>

      </div>


    </aside>
  );
}