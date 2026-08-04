"use client";

import type { Editor } from "@tiptap/react";

import {
  Bold,
  Italic,
  Code,
  Heading2,
  List,
  Quote,
} from "lucide-react";


interface ToolbarProps {
  editor: Editor | null;
}


export function Toolbar({
  editor,
}: ToolbarProps) {

  if (!editor) return null;


  const buttons = [
    {
      icon: Bold,
      action: () =>
        editor.chain().focus().toggleBold().run(),
      active: editor.isActive("bold"),
      label: "Bold",
    },

    {
      icon: Italic,
      action: () =>
        editor.chain().focus().toggleItalic().run(),
      active: editor.isActive("italic"),
      label: "Italic",
    },

    {
      icon: Heading2,
      action: () =>
        editor.chain().focus()
          .toggleHeading({ level: 2 })
          .run(),
      active: editor.isActive("heading"),
      label: "Heading",
    },

    {
      icon: List,
      action: () =>
        editor.chain().focus()
          .toggleBulletList()
          .run(),
      active: editor.isActive("bulletList"),
      label: "List",
    },

    {
      icon: Quote,
      action: () =>
        editor.chain().focus()
          .toggleBlockquote()
          .run(),
      active: editor.isActive("blockquote"),
      label: "Quote",
    },

    {
      icon: Code,
      action: () =>
        editor.chain().focus()
          .toggleCodeBlock()
          .run(),
      active: editor.isActive("codeBlock"),
      label: "Code",
    },
  ];


  return (
    <div
      className="
        sticky
        top-0
        z-10
        mb-6
        flex
        w-fit
        items-center
        gap-1
        rounded-xl
        border
        border-white/[0.08]
        bg-[#111113]/80
        p-1.5
        backdrop-blur-xl
      "
    >

      {buttons.map(
        ({
          icon: Icon,
          action,
          active,
          label,
        }) => (

          <button
            key={label}
            type="button"
            title={label}
            onClick={action}

            className={`
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              transition

              ${
                active
                  ? "bg-white/15 text-white"
                  : "text-white/45 hover:bg-white/10 hover:text-white"
              }
            `}
          >

            <Icon size={15}/>

          </button>

        )
      )}

    </div>
  );
}