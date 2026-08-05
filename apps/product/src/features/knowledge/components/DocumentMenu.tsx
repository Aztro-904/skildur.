"use client";

import {
  Copy,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import { useState } from "react";


interface DocumentMenuProps {
  onRename: () => void;

  onDuplicate: () => void;

  onDelete: () => void;
}


export function DocumentMenu({
  onRename,
  onDuplicate,
  onDelete,
}: DocumentMenuProps) {

  const [
    open,
    setOpen,
  ] = useState(false);


  return (
    <div
      className="
        relative
      "
    >

      <button
        onClick={() =>
          setOpen(!open)
        }

        className="
          flex

          h-9

          w-9

          items-center

          justify-center

          rounded-xl

          border

          border-transparent

          text-[color:var(--white-35)]

          transition

          hover:border-[var(--white-08)]

          hover:bg-[var(--white-05)]

          hover:text-[color:var(--foreground)]
        "
      >

        <MoreHorizontal
          size={18}
        />

      </button>



      {open && (

        <div
          className="
            absolute

            right-0

            top-11

            z-50

            w-52

            rounded-2xl

            border

            border-[var(--white-08)]

            bg-[var(--surface-deep)]/95

            p-1.5

            shadow-2xl

            backdrop-blur-xl
          "
        >

          <button
            onClick={() => {
              onRename();
              setOpen(false);
            }}

            className="
              flex

              w-full

              items-center

              gap-3

              rounded-xl

              px-3

              py-2.5

              text-sm

              text-[color:var(--white-60)]

              transition

              hover:bg-[var(--white-06)]

              hover:text-[color:var(--foreground)]
            "
          >

            <Pencil
              size={15}
            />

            Rename

          </button>



          <button
            onClick={() => {
              onDuplicate();
              setOpen(false);
            }}

            className="
              flex

              w-full

              items-center

              gap-3

              rounded-xl

              px-3

              py-2.5

              text-sm

              text-[color:var(--white-60)]

              transition

              hover:bg-[var(--white-06)]

              hover:text-[color:var(--foreground)]
            "
          >

            <Copy
              size={15}
            />

            Duplicate

          </button>



          <div
            className="
              my-1.5

              h-px

              bg-[var(--white-08)]
            "
          />



          <button
            onClick={() => {
              onDelete();
              setOpen(false);
            }}

            className="
              flex

              w-full

              items-center

              gap-3

              rounded-xl

              px-3

              py-2.5

              text-sm

              text-red-400/80

              transition

              hover:bg-red-500/10

              hover:text-red-300
            "
          >

            <Trash2
              size={15}
            />

            Delete

          </button>


        </div>

      )}

    </div>
  );
}