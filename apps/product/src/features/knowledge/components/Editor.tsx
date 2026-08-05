"use client";

import { useEffect } from "react";

import {
  EditorContent,
  useEditor,
} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";

import type { KnowledgeItem } from "../types";
import { Toolbar } from "./Toolbar";


interface EditorProps {
  item: KnowledgeItem;
  onChange: (content: string) => void;
}


export function Editor({
  item,
  onChange,
}: EditorProps) {


  const editor = useEditor({

    extensions: [

      StarterKit.configure({

        link: false,

        heading: {
          levels: [1, 2, 3],
        },

        codeBlock: {
          HTMLAttributes: {
            class:
              "rounded-xl bg-[var(--black-40)] border border-[var(--white-08)] px-4 py-3 text-sm font-mono text-[color:var(--white-80)]",
          },
        },

      }),


      Placeholder.configure({

        placeholder:
          "Start writing your thoughts, plans, and knowledge..."

      }),



      Link.configure({

        openOnClick: false,

        HTMLAttributes: {
          class:
            "text-[color:var(--accent-hover)] underline underline-offset-4 hover:text-[color:var(--accent-text)] transition",
        },

      }),

    ],



    content: item.content,



    immediatelyRender: false,



    editorProps: {

      attributes: {

        class:
          "min-h-[700px] w-full max-w-none outline-none text-[16px] leading-8 text-[color:var(--white-80)]",

      },

    },



    onUpdate({ editor }) {

      onChange(
        editor.getHTML()
      );

    },

  });





  useEffect(() => {

    if (!editor) return;


    if (
      editor.getHTML() !== item.content
    ) {

      editor.commands.setContent(

        item.content || "",

        {
          emitUpdate: false,
        }

      );

    }


  }, [
    editor,
    item.id,
  ]);





  if (!editor) {

    return null;

  }





  return (

    <div
      className="
        w-full
        px-12
        pb-24
      "
    >


      <Toolbar
        editor={editor}
      />



      <div

        className="
          mt-6
          w-full
          min-h-[800px]
          rounded-2xl
          border
          border-[var(--white-06)]
          bg-[var(--white-015)]
          px-16
          py-12
        "

      >

        <EditorContent
          editor={editor}
        />


      </div>


    </div>

  );
}