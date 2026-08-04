"use client";

import {
  FileText,
  Clock3,
} from "lucide-react";

import type { ReactNode } from "react";


interface KnowledgeHeaderProps {
  title: string;
  content: string;
  updatedAt: string;
  onTitleChange: (title: string) => void;
  menu?: ReactNode;
}


export function KnowledgeHeader({
  title,
  content,
  updatedAt,
  onTitleChange,
  menu,
}: KnowledgeHeaderProps) {


  const words = content
    .replace(/<[^>]*>/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);



  const wordCount = words.length;



  const readingTime = Math.max(
    1,
    Math.ceil(wordCount / 250)
  );



  // Stable formatting across server + client
  const formattedDate = updatedAt
    ? new Date(updatedAt)
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join(" ")
    : "Unknown";



  return (

    <header
      className="
        border-b
        border-white/[0.08]
      "
    >

      <div
        className="
          flex
          items-start
          justify-between
          px-12
          pt-8
          pb-7
        "
      >


        <div className="min-w-0">


          <div
            className="
              mb-5
              flex
              items-center
              gap-2
              text-xs
              uppercase
              tracking-[0.14em]
              text-white/35
            "
          >

            <FileText size={14}/>

            <span>
              Document
            </span>


          </div>





          <input

            value={title}

            onChange={(e)=>
              onTitleChange(e.target.value)
            }

            placeholder="Untitled"

            className="
              w-full
              bg-transparent
              text-4xl
              font-semibold
              tracking-tight
              text-white
              outline-none
              placeholder:text-white/20
            "

          />





          <div
            className="
              mt-5
              flex
              items-center
              gap-5
              text-xs
              text-white/35
            "
          >


            <span>
              Updated {formattedDate}
            </span>



            <span>
              {wordCount} words
            </span>



            <span
              className="
                flex
                items-center
                gap-1.5
              "
            >

              <Clock3 size={12}/>

              {readingTime} min read


            </span>


          </div>


        </div>





        {menu && (

          <div
            className="
              pt-1
            "
          >
            {menu}
          </div>

        )}



      </div>


    </header>

  );
}