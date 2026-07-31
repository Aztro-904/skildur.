"use client";

import { Command } from "cmdk";

export function CommandMenu() {
  return (
    <Command className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
      <Command.Input
        autoFocus
        placeholder="Search workspace..."
        className="h-14 w-full border-b border-zinc-800 bg-transparent px-5 text-sm text-white outline-none placeholder:text-zinc-500"
      />

      <Command.List className="p-2">
        <Command.Empty className="px-4 py-8 text-center text-sm text-zinc-500">
          No results found.
        </Command.Empty>

        <Command.Group
          heading="Actions"
          className="px-2 py-2 text-xs text-zinc-500"
        >
          <Command.Item className="rounded-lg px-3 py-3 text-sm text-white hover:bg-zinc-900">
            Create object
          </Command.Item>

          <Command.Item className="rounded-lg px-3 py-3 text-sm text-white hover:bg-zinc-900">
            Open workspace
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  );
}