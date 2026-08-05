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
        flex
        items-center
        gap-1

        rounded-xl

        border
        border-[var(--white-08)]

        bg-[var(--surface-deep)]/90

        p-1.5

        shadow-[0_10px_40px_rgba(0,0,0,.25)]

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
                ?
                "bg-[var(--accent-muted)] text-[color:var(--accent-text)]"
                :
                "text-[color:var(--white-45)] hover:bg-[var(--white-06)] hover:text-[color:var(--foreground)]"
              }
            `}
          >

            <Icon
              size={15}
              strokeWidth={1.8}
            />

          </button>

        )
      )}

    </div>
  );
}