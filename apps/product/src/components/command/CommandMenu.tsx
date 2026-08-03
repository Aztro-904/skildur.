"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { objects } from "@/features/objects/data";

export function CommandMenu({
  onClose,
}: {
  onClose: () => void;
}) {
  const router = useRouter();

  const itemClass =
    "rounded-lg px-3 py-3 text-sm text-white hover:bg-white/10";

  return (
    <Command className="max-h-[600px] w-[700px] overflow-hidden rounded-2xl border border-white/10 bg-[#09090B] shadow-2xl">
      <Command.Input
        autoFocus
        placeholder="Search Skildur..."
        className="h-16 w-full border-b border-white/10 bg-transparent px-6 text-base text-white outline-none placeholder:text-white/40"
      />

      <Command.List className="p-2">
        <Command.Empty className="px-4 py-8 text-center text-sm text-white/40">
          No results found.
        </Command.Empty>

        <Command.Group
          heading="Objects"
          className="px-2 py-2 text-xs text-white/40"
        >
          {objects.map((object) => (
            <Command.Item
              key={object.id}
              onSelect={() => {
                onClose();
                router.push(`/objects?object=${object.id}`);
              }}
              className={itemClass}
            >
              <div>
                <p>{object.title}</p>
                <p className="text-xs text-white/40">
                  {object.type}
                </p>
              </div>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group
          heading="Navigation"
          className="px-2 py-2 text-xs text-white/40"
        >
          <Command.Item
            onSelect={() => {
              onClose();
              router.push("/");
            }}
            className={itemClass}
          >
            Go to Home
          </Command.Item>

          <Command.Item
            onSelect={() => {
              onClose();
              router.push("/objects");
            }}
            className={itemClass}
          >
            Open Objects
          </Command.Item>

          <Command.Item
            onSelect={() => {
              onClose();
              router.push("/knowledge");
            }}
            className={itemClass}
          >
            Open Knowledge
          </Command.Item>
        </Command.Group>

        <Command.Group
          heading="Actions"
          className="px-2 py-2 text-xs text-white/40"
        >
          <Command.Item
            disabled
            className={`${itemClass} cursor-not-allowed opacity-50`}
          >
            Create Object
          </Command.Item>

          <Command.Item
            disabled
            className={`${itemClass} cursor-not-allowed opacity-50`}
          >
            Create Document
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  );
}