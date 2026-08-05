"use client";

import {
  FileText,
  Plus,
  Search,
} from "lucide-react";

import type { KnowledgeItem } from "../types";


interface KnowledgeSidebarProps {
  items: KnowledgeItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  onCreate: () => void;
}


export function KnowledgeSidebar({
  items,
  selectedId,
  onSelect,
  onCreate,
}: KnowledgeSidebarProps) {


  return (
    <aside
      className="
        flex

        h-full

        flex-col

        p-4
      "
    >


      {/* Header */}

      <div
        className="
          flex

          items-center

          justify-between

          px-1

          pb-4
        "
      >

        <p
          className="
            text-xs

            font-medium

            uppercase

            tracking-[0.16em]

            text-[color:var(--white-30)]
          "
        >
          Knowledge
        </p>


        <button
          onClick={onCreate}

          className="
            flex

            h-7

            w-7

            items-center

            justify-center

            rounded-lg

            bg-[var(--accent-soft)]

            text-[color:var(--accent-text)]

            transition

            hover:bg-[var(--accent-muted)]
          "
        >

          <Plus size={15}/>

        </button>


      </div>





      {/* Search */}

      <button
        className="
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
        "
      >

        <Search
          size={15}
        />

        Search documents

      </button>





      {/* Documents */}

      <div
        className="
          mt-6

          flex-1

          overflow-y-auto
        "
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
          Documents
        </p>



        <div
          className="
            space-y-1
          "
        >

          {items.map((item) => {

            const active =
              item.id === selectedId;


            return (

              <button

                key={item.id}

                onClick={() =>
                  onSelect(item.id)
                }

                className={`
                  group

                  flex

                  w-full

                  items-center

                  gap-3

                  rounded-xl

                  px-3

                  py-2.5

                  text-left

                  text-sm

                  transition

                  ${
                    active
                    ?
                      "bg-[var(--white-08)] text-[color:var(--foreground)]"
                    :
                      "text-[color:var(--white-50)] hover:bg-[var(--white-04)] hover:text-[color:var(--foreground)]"
                  }
                `}
              >

                <FileText
                  size={15}

                  className={
                    active
                    ?
                      "text-[color:var(--accent-text)]"
                    :
                      "text-[color:var(--white-30)]"
                  }
                />


                <span
                  className="
                    truncate
                  "
                >
                  {item.title}
                </span>


              </button>

            );

          })}

        </div>


      </div>


    </aside>
  );
}