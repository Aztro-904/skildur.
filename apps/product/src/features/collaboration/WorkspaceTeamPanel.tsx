"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Users, Copy, X } from "lucide-react";
import { teams } from "./data";

function TeamItem({ name, members }: { name: string; members: number }) {
  return (
    <div className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card-strong)] p-4">
      <p className="text-sm font-semibold text-[color:var(--foreground)]">{name}</p>
      <p className="mt-2 text-sm text-[color:var(--white-50)]">{members} members</p>
    </div>
  );
}

export function WorkspaceTeamPanel() {
  const [isShareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://skildur.app/workspaces";
  const teamCount = teams.length;
  const totalMembers = teams.reduce((sum, team) => sum + team.members.length, 0);

  function copyShareLink() {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <section className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Collaboration</p>
          <h2 className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Team and permissions</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">
          <Users size={14} />
          {totalMembers} members
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {teams.slice(0, 2).map((team) => (
          <TeamItem key={team.id} name={team.name} members={team.members.length} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border-faint)] bg-[var(--surface-card-strong)] px-4 py-3 text-sm font-medium text-[color:var(--foreground)] hover:bg-[var(--surface-hover)]"
        >
          <ShieldCheck size={16} />
          Manage teams
        </Link>
        <button
          type="button"
          onClick={() => setShareOpen(true)}
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm font-medium text-[color:var(--accent)] hover:bg-[var(--accent-muted)]"
        >
          <Users size={16} />
          Share workspace
        </button>
      </div>

      {isShareOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--black-70)] px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-[var(--white-08)] bg-[var(--surface-strong)] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--white-45)]">Share workspace</p>
                <h2 className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">Send access to your team</h2>
              </div>
              <button
                type="button"
                onClick={() => setShareOpen(false)}
                className="text-[color:var(--white-40)] hover:text-[color:var(--foreground)]"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-4 text-sm text-[color:var(--white-45)]">
              Copy the workspace link and share it with collaborators so they can view this workspace.
            </p>

            <div className="mt-5 rounded-3xl border border-[var(--white-08)] bg-[var(--white-03)] px-4 py-4 text-sm text-[color:var(--foreground)]">
              <p className="break-all">{shareUrl}</p>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={copyShareLink}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--accent-text)] hover:bg-[var(--accent-hover)]"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy link"}
              </button>
              <button
                type="button"
                onClick={() => setShareOpen(false)}
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--white-08)] bg-[var(--white-03)] px-4 py-3 text-sm text-[color:var(--foreground)] hover:bg-[var(--white-05)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
