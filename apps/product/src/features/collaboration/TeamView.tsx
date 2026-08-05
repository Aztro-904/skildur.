"use client";

import { useState } from "react";
import { Users, PlusCircle, X } from "lucide-react";
import { teams as initialTeams } from "./data";
import type { Team, TeamMember, Role } from "./types";

const roles: Role[] = ["Admin", "Editor", "Viewer"];

function MemberRow({
  member,
  onRoleChange,
}: {
  member: TeamMember;
  onRoleChange?: (role: Role) => void;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[var(--white-08)] bg-[var(--white-03)] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-medium text-[color:var(--foreground)]">{member.user.name}</p>
        <p className="text-xs text-[color:var(--white-40)]">{member.user.email}</p>
      </div>
      {onRoleChange ? (
        <select
          value={member.role}
          onChange={(event) => onRoleChange(event.target.value as Role)}
          className="rounded-2xl border border-[var(--white-08)] bg-[var(--white-02)] px-3 py-2 text-sm text-[color:var(--foreground)]"
        >
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      ) : (
        <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-60)]">{member.role}</span>
      )}
    </div>
  );
}

function TeamModal({
  open,
  mode,
  teamName,
  values,
  onChange,
  onClose,
  onSubmit,
}: {
  open: boolean;
  mode: "create" | "invite";
  teamName?: string;
  values: {
    name: string;
    description: string;
    email: string;
    role: Role;
  };
  onChange: (field: "name" | "description" | "email" | "role", value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--black-60)] backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-[var(--white-08)] bg-[var(--surface-strong)] p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--white-45)]">
              {mode === "create" ? "Create team" : "Invite member"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">
              {mode === "create" ? "New team details" : `Invite to ${teamName}`}
            </h2>
          </div>
          <button onClick={onClose} className="text-[color:var(--white-40)] hover:text-[color:var(--foreground)]">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <label className="block text-sm text-[color:var(--white-40)]">
            Name
            <input
              value={values.name}
              onChange={(event) => onChange("name", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[var(--white-08)] bg-[var(--white-02)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
            />
          </label>

          {mode === "create" ? (
            <label className="block text-sm text-[color:var(--white-40)]">
              Description
              <textarea
                value={values.description}
                onChange={(event) => onChange("description", event.target.value)}
                rows={4}
                className="mt-2 w-full rounded-2xl border border-[var(--white-08)] bg-[var(--white-02)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
              />
            </label>
          ) : (
            <>
              <label className="block text-sm text-[color:var(--white-40)]">
                Email
                <input
                  value={values.email}
                  onChange={(event) => onChange("email", event.target.value)}
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-[var(--white-08)] bg-[var(--white-02)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
                />
              </label>
              <label className="block text-sm text-[color:var(--white-40)]">
                Role
                <select
                  value={values.role}
                  onChange={(event) => onChange("role", event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[var(--white-08)] bg-[var(--white-02)] px-4 py-3 text-sm text-[color:var(--foreground)]"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </label>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-2xl border border-[var(--white-08)] bg-[var(--white-03)] px-4 py-3 text-sm text-[color:var(--foreground)] hover:bg-[var(--white-05)]">
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--accent-text)] hover:bg-[var(--accent-hover)]"
          >
            {mode === "create" ? "Create team" : "Send invite"}
          </button>
        </div>
      </div>
    </div>
  );
}

function formatTeamSummary(team: Team) {
  return `${team.members.length} member${team.members.length === 1 ? "" : "s"}`;
}

export function TeamView() {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [modal, setModal] = useState<{
    type: "create" | "invite";
    teamId?: string;
  } | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    email: "",
    role: "Editor" as Role,
  });

  function openCreateTeam() {
    setFormValues({ name: "", description: "", email: "", role: "Editor" });
    setModal({ type: "create" });
  }

  function openInvite(teamId: string) {
    setFormValues({ name: "", description: "", email: "", role: "Editor" });
    setModal({ type: "invite", teamId });
  }

  function closeModal() {
    setModal(null);
  }

  function handleFormChange(field: "name" | "description" | "email" | "role", value: string) {
    setFormValues((current) => ({ ...current, [field]: value }));
  }

  function createTeam() {
    if (!formValues.name.trim()) return;

    setTeams((current) => [
      ...current,
      {
        id: `t-${Date.now()}`,
        name: formValues.name.trim(),
        description: formValues.description.trim(),
        members: [],
      },
    ]);

    closeModal();
  }

  function inviteMember(teamId: string) {
    if (!formValues.name.trim() || !formValues.email.trim()) return;

    setTeams((current) =>
      current.map((team) =>
        team.id === teamId
          ? {
              ...team,
              members: [
                ...team.members,
                {
                  user: {
                    id: `u-${Date.now()}`,
                    name: formValues.name.trim(),
                    email: formValues.email.trim(),
                  },
                  role: formValues.role,
                },
              ],
            }
          : team
      )
    );

    closeModal();
  }

  function updateRole(teamId: string, userId: string, role: Role) {
    setTeams((current) =>
      current.map((team) =>
        team.id === teamId
          ? {
              ...team,
              members: team.members.map((member) =>
                member.user.id === userId ? { ...member, role } : member
              ),
            }
          : team
      )
    );
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--white-35)]">People</p>
          <h1 className="mt-2 text-3xl font-semibold text-[color:var(--foreground)]">Team workspace</h1>
          <p className="mt-3 max-w-2xl text-sm text-[color:var(--white-45)]">Manage teams, permissions, comments, and collaboration across linked workspaces.</p>
        </div>

        <button
          onClick={openCreateTeam}
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[color:var(--foreground)] hover:bg-[var(--surface-hover)]"
        >
          <PlusCircle size={16} />
          Create team
        </button>
      </header>

      <div className="grid gap-6 xl:grid-cols-2">
        {teams.map((team) => (
          <section key={team.id} className="rounded-3xl border border-[var(--white-08)] bg-[var(--white-03)] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--white-35)]">Team</p>
                <h2 className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">{team.name}</h2>
                <p className="mt-3 text-sm text-[color:var(--white-45)]">{team.description}</p>
              </div>

              <div className="rounded-2xl bg-[var(--accent-soft)] px-3 py-2 text-sm font-semibold text-[color:var(--accent)]">{formatTeamSummary(team)}</div>
            </div>

            <div className="mt-6 space-y-3">
              {team.members.length > 0 ? (
                team.members.map((member) => (
                  <MemberRow
                    key={member.user.id}
                    member={member}
                    onRoleChange={(role) => updateRole(team.id, member.user.id, role)}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-[var(--white-08)] bg-[var(--white-02)] p-5 text-sm text-[color:var(--white-45)]">No members yet. Invite your first collaborator to get started.</div>
              )}
            </div>

            <button
              onClick={() => openInvite(team.id)}
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[var(--surface-elevated)] px-4 py-3 text-sm font-medium text-[color:var(--foreground)] hover:bg-[var(--surface-hover)]"
            >
              Invite member
            </button>
          </section>
        ))}
      </div>

      <TeamModal
        open={modal !== null}
        mode={modal?.type ?? "create"}
        teamName={modal?.type === "invite" ? teams.find((team) => team.id === modal?.teamId)?.name : undefined}
        values={formValues}
        onChange={handleFormChange}
        onClose={closeModal}
        onSubmit={() => {
          if (modal?.type === "create") {
            createTeam();
          } else if (modal?.type === "invite" && modal.teamId) {
            inviteMember(modal.teamId);
          }
        }}
      />
    </div>
  );
}
