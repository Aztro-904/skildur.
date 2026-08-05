"use client";

import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Database,
  FileText,
  LayoutGrid,
  LineChart,
  Sparkles,
  Users,
} from "lucide-react";

const summaryCards = [
  { title: "Open roadmap", icon: LayoutGrid, subtitle: "4 active projects" },
  { title: "Review docs", icon: FileText, subtitle: "12 comments" },
  { title: "Explore knowledge", icon: BookOpen, subtitle: "8 connected topics" },
  { title: "Sync data", icon: Database, subtitle: "Live refresh enabled" },
];

const projects = [
  { title: "Sprint planning", phase: "In review", owner: "Mina", due: "Today" },
  { title: "Data sync design", phase: "In progress", owner: "Azlan", due: "Thu" },
  { title: "Documentation refresh", phase: "Ready", owner: "Noah", due: "Fri" },
];

const teamMembers = [
  { name: "Azlan Harper", role: "Admin", status: "Online" },
  { name: "Mina Patel", role: "Editor", status: "Away" },
  { name: "Noah Kim", role: "Viewer", status: "Offline" },
  { name: "Eve Zhang", role: "Editor", status: "Online" },
];

const metrics = [
  { name: "Revenue", value: "$1.8M", progress: 82 },
  { name: "Conversion", value: "12.4%", progress: 64 },
  { name: "Retention", value: "76%", progress: 88 },
];

const activityItems = [
  { title: "Comment added", subtitle: "Mina updated the release notes." },
  { title: "Board moved", subtitle: "Sprint planning advanced to review." },
  { title: "Share link", subtitle: "Workspace link copied for stakeholders." },
];

function StatusPill({ status }: { status: string }) {
  const classes = status === "Online"
    ? "bg-[var(--accent-soft)] text-[color:var(--accent)]"
    : "bg-[var(--white-05)] text-[color:var(--white-40)]";

  return (
    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${classes}`}>
      {status}
    </span>
  );
}

export function HomeView() {
  return (
    <div className="mx-auto max-w-[1400px] px-8 py-14">
      <div className="grid gap-10 xl:grid-cols-[1.35fr_0.65fr]">
        <section className="space-y-8 rounded-[2rem] border border-[var(--white-08)] bg-[var(--surface-strong)] p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Workspace overview</p>
              <h1 className="mt-3 text-5xl font-semibold leading-tight text-[color:var(--foreground)]">Launch collaboration studio</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--white-45)]">
                Track launch readiness, coordinate reviews, and keep every workspace asset connected in one place.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-[1.75rem] bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-black shadow-[0_20px_40px_rgba(99,102,241,0.12)] transition hover:bg-[var(--accent-muted)]">
              <ArrowUpRight size={16} /> Open workspace
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {summaryCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[1.75rem] border border-[var(--accent-soft)] bg-[var(--surface-elevated)] p-7 shadow-[0_10px_30px_rgba(99,102,241,0.06)]">
                  <div className="flex items-center justify-between">
                    <div className="rounded-[1.5rem] bg-[var(--surface-strong)] p-3 text-[color:var(--foreground)]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-[color:var(--foreground)]">{card.title}</p>
                  <p className="mt-2 text-sm text-[color:var(--white-45)]">{card.subtitle}</p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-[2rem] border border-[var(--accent-soft)] bg-[var(--surface-elevated)] p-8 shadow-[0_20px_40px_rgba(99,102,241,0.06)]">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">Project pipeline</p>
                  <p className="mt-2 text-sm text-[color:var(--white-45)]">Active work across the product launch.</p>
                </div>
                <button className="rounded-2xl bg-[var(--white-03)] px-4 py-2 text-sm text-[color:var(--foreground)] transition hover:bg-[var(--white-05)]">View all</button>
              </div>
              <div className="mt-8 space-y-4">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-[1.75rem] bg-[var(--white-03)] p-5 shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-semibold text-[color:var(--foreground)]">{project.title}</p>
                      <span className="rounded-full bg-[var(--white-05)] px-3 py-1.5 text-[11px] font-semibold text-[color:var(--white-40)]">{project.phase}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-[color:var(--white-45)]">
                      <span>Owner: {project.owner}</span>
                      <span>Due: {project.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--accent-soft)] bg-[var(--surface-elevated)] p-8 shadow-[0_20px_40px_rgba(99,102,241,0.06)]">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">Team snapshot</p>
              <p className="mt-2 text-sm text-[color:var(--white-45)]">Active collaborators and status indicators.</p>
              <div className="mt-8 space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center justify-between rounded-[1.75rem] bg-[var(--white-03)] p-5 shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                    <div>
                      <p className="font-semibold text-[color:var(--foreground)]">{member.name}</p>
                      <p className="text-sm text-[color:var(--white-45)]">{member.role}</p>
                    </div>
                    <StatusPill status={member.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-[var(--accent-soft)] bg-[var(--surface-elevated)] p-8 shadow-[0_20px_40px_rgba(99,102,241,0.06)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Workspace health</p>
            <h2 className="mt-4 text-3xl font-semibold text-[color:var(--foreground)]">Metrics at a glance</h2>
            <div className="mt-8 space-y-5">
              {metrics.map((metric) => (
                <div key={metric.name}>
                  <div className="flex items-center justify-between text-sm text-[color:var(--white-45)]">
                    <span>{metric.name}</span>
                    <span className="font-semibold text-[color:var(--foreground)]">{metric.value}</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[var(--white-05)]">
                    <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${metric.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--accent-soft)] bg-[var(--surface-elevated)] p-8 shadow-[0_20px_40px_rgba(99,102,241,0.06)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Next actions</p>
                <h2 className="mt-3 text-3xl font-semibold text-[color:var(--foreground)]">Action queue</h2>
              </div>
              <button className="rounded-2xl bg-[var(--white-03)] px-3 py-2 text-xs text-[color:var(--foreground)] transition hover:bg-[var(--white-05)]">
                Manage
              </button>
            </div>
            <div className="mt-8 grid gap-4">
              {activityItems.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] bg-[var(--white-03)] p-5 shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                  <p className="font-semibold text-[color:var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm text-[color:var(--white-45)]">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
