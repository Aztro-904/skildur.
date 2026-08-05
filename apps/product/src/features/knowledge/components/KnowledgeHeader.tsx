"use client";

import type { ReactNode } from "react";

import {
  FileText,
} from "lucide-react";


interface KnowledgeHeaderProps {

  title: string;

  updatedAt: string;

  onTitleChange: (
    title: string
  ) => void;

  menu?: ReactNode;

}



export function KnowledgeHeader({

  title,

  updatedAt,

  onTitleChange,

  menu,

}: KnowledgeHeaderProps) {


  return (

    <header
      className="
        flex

        items-center

        justify-between

        border-b

        border-[var(--white-06)]

        px-10

        py-5
      "
    >


      <div
        className="
          flex

          items-center

          gap-4
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

          <FileText
            size={18}
            strokeWidth={1.8}
          />

        </div>



        <div>

          <input

            value={title}

            onChange={(e) =>
              onTitleChange(
                e.target.value
              )
            }

            className="
              w-[420px]

              bg-transparent

              text-xl

              font-semibold

              tracking-tight

              text-[color:var(--foreground)]

              outline-none

              placeholder:text-[color:var(--white-30)]
            "

          />


          <p
            className="
              mt-1

              text-xs

              text-[color:var(--white-35)]
            "
          >

            Updated{" "}
            {new Date(updatedAt).toLocaleString()}

          </p>


        </div>


      </div>





      <div
        className="
          flex

          items-center

          gap-2
        "
      >

        {menu}

      </div>


    </header>

  );

}