"use client";

import {
  FileText,
  Plus,
  Search,
  MoreHorizontal,
  Trash2,
  Copy,
  Pencil,
} from "lucide-react";

import { useMemo, useState } from "react";
import type { KnowledgeItem } from "../types";


interface KnowledgeSidebarProps {
  items: KnowledgeItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  onCreate: () => void;
  onRename: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}


export function KnowledgeSidebar({
  items,
  selectedId,
  onSelect,
  onCreate,
  onRename,
  onDuplicate,
  onDelete,
}: KnowledgeSidebarProps) {

  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState<string | null>(null);


  const filteredItems = useMemo(() => {

    if (!query.trim()) {
      return items;
    }

    return items.filter((item) =>
      item.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  }, [items, query]);



  function closeMenu() {
    setOpenMenu(null);
  }



  return (
    <div className="flex h-full flex-col">


      {/* Header */}

      <div className="border-b border-white/[0.08] px-5 py-5">

        <h1 className="text-lg font-semibold tracking-tight text-white">
          Knowledge
        </h1>

        <p className="mt-1 text-sm text-white/40">
          Your connected information
        </p>


        <button
          onClick={onCreate}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-white
            px-4
            py-2.5
            text-sm
            font-medium
            text-black
            transition
            hover:bg-white/90
          "
        >
          <Plus size={16} />
          New Document
        </button>

      </div>



      {/* Search */}

      <div className="border-b border-white/[0.08] p-4">

        <div
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/[0.08]
            bg-white/[0.03]
            px-3
            py-2.5
          "
        >

          <Search
            size={15}
            className="text-white/35"
          />

          <input
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search knowledge..."
            className="
              w-full
              bg-transparent
              text-sm
              text-white
              outline-none
              placeholder:text-white/35
            "
          />

        </div>

      </div>





      {/* Documents */}

      <div className="flex-1 overflow-y-auto px-3 py-4">


        <div
          className="
            mb-3
            flex
            items-center
            justify-between
            px-2
          "
        >

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-white/30
            "
          >
            Documents
          </p>


          <span className="text-xs text-white/25">
            {items.length}
          </span>

        </div>




        <div className="space-y-1">


          {filteredItems.map((item) => {

            const active =
              item.id === selectedId;


            return (

              <div
                key={item.id}
                className="group relative"
              >

                <button
                  onClick={() => {
                    onSelect(item.id);
                    closeMenu();
                  }}

                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    transition

                    ${
                      active
                        ? "bg-white/[0.08] text-white"
                        : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                    }
                  `}
                >

                  <FileText
                    size={16}
                    className={
                      active
                        ? "text-white"
                        : "text-white/40"
                    }
                  />


                  <span
                    className="
                      flex-1
                      truncate
                      text-sm
                      font-medium
                    "
                  >
                    {item.title}
                  </span>



                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(
                        openMenu === item.id
                          ? null
                          : item.id
                      );
                    }}
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      opacity-0
                      transition
                      hover:bg-white/10
                      group-hover:opacity-100
                    "
                  >

                    <MoreHorizontal size={15} />

                  </span>


                </button>





                {openMenu === item.id && (

                  <div
                    className="
                      absolute
                      right-2
                      top-11
                      z-50
                      w-40
                      rounded-xl
                      border
                      border-white/10
                      bg-[#111113]
                      p-1
                      shadow-xl
                    "
                  >


                    <button
                      onClick={() => {
                        onRename(item.id);
                        closeMenu();
                      }}

                      className="
                        flex
                        w-full
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-2
                        text-sm
                        text-white/70
                        hover:bg-white/10
                      "
                    >
                      <Pencil size={14}/>
                      Rename
                    </button>



                    <button
                      onClick={() => {
                        onDuplicate(item.id);
                        closeMenu();
                      }}

                      className="
                        flex
                        w-full
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-2
                        text-sm
                        text-white/70
                        hover:bg-white/10
                      "
                    >
                      <Copy size={14}/>
                      Duplicate
                    </button>



                    <button
                      onClick={() => {
                        onDelete(item.id);
                        closeMenu();
                      }}

                      className="
                        flex
                        w-full
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-2
                        text-sm
                        text-red-400
                        hover:bg-red-400/10
                      "
                    >
                      <Trash2 size={14}/>
                      Delete
                    </button>


                  </div>

                )}


              </div>

            );

          })}





          {!filteredItems.length && (

            <div
              className="
                rounded-xl
                border
                border-dashed
                border-white/[0.08]
                px-4
                py-6
                text-center
              "
            >
              <p className="text-sm text-white/35">
                No documents found
              </p>
            </div>

          )}


        </div>


      </div>


    </div>
  );
}