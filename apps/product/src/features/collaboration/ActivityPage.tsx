"use client";

import { useState } from "react";
import { Activity } from "lucide-react";
import { activityItems as initialActivityItems, comments as initialComments } from "./data";

function ActivityRow({ item }: { item: (typeof initialActivityItems)[number] }) {
  return (
    <div className="rounded-2xl border border-[var(--white-08)] bg-[var(--white-03)] p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-medium text-[color:var(--foreground)]">{item.actor.name}</p>
          <p className="text-sm text-[color:var(--white-40)]">{item.action} {item.target}</p>
        </div>
        <span className="text-xs text-[color:var(--white-35)]">{item.createdAt}</span>
      </div>
    </div>
  );
}

function CommentRow({ comment }: { comment: (typeof initialComments)[number] }) {
  return (
    <div className="rounded-[1.5rem] border border-[var(--white-08)] bg-[var(--surface-elevated)] p-4 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[color:var(--foreground)]">{comment.author.name}</p>
          <p className="text-xs text-[color:var(--white-40)]">{comment.target}</p>
        </div>
        <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[color:var(--white-40)]">{comment.createdAt}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-[color:var(--white-45)]">{comment.body}</p>
    </div>
  );
}

export function ActivityPage() {
  const [comments, setComments] = useState(initialComments);
  const [activityItems, setActivityItems] = useState(initialActivityItems);
  const [commentDraft, setCommentDraft] = useState("");

  const recentCount = activityItems.length;

  function addComment() {
    if (!commentDraft.trim()) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: {
        id: "u-me",
        name: "You",
        email: "you@skildur.com",
      },
      body: commentDraft.trim(),
      createdAt: "just now",
      target: "Workspace discussion",
    };

    setComments((current) => [newComment, ...current]);
    setActivityItems((current) => [
      {
        id: `a-${Date.now()}`,
        actor: {
          id: "u-me",
          name: "You",
          email: "you@skildur.com",
        },
        action: "commented on",
        target: "Workspace discussion",
        createdAt: "just now",
      },
      ...current,
    ]);
    setCommentDraft("");
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--white-35)]">Activity</p>
          <h1 className="mt-2 text-3xl font-semibold text-[color:var(--foreground)]">Workspace history</h1>
          <p className="mt-3 max-w-2xl text-sm text-[color:var(--white-45)]">Review recent collaboration events, permission changes, and comment activity.</p>
        </div>
        <div className="rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm font-semibold text-[color:var(--accent)]">Shared with your team</div>
      </header>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <div className="rounded-3xl border border-[var(--white-08)] bg-[var(--white-03)] p-6">
            <div className="flex items-center gap-3 text-[color:var(--accent)]">
              <Activity size={18} />
              <h2 className="text-lg font-semibold text-[color:var(--foreground)]">Recent activity</h2>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 rounded-3xl border border-[var(--white-08)] bg-[var(--surface-elevated)] px-4 py-3">
              <p className="text-sm text-[color:var(--foreground)]">{recentCount} events in the last 24 hours</p>
              <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">Workspace stream</span>
            </div>
            <div className="mt-6 space-y-3">
              {activityItems.map((item) => (
                <ActivityRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-[var(--white-08)] bg-[var(--white-03)] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--foreground)]">Comments</h2>
                <p className="mt-1 text-sm text-[color:var(--white-45)]">Keep the workspace discussion threaded and visible.</p>
              </div>
              <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">{comments.length} comments</span>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[var(--white-08)] bg-[var(--surface-strong)] p-5 shadow-[var(--shadow-border)]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-sm font-semibold text-[color:var(--accent)]">Y</div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--foreground)]">New comment</p>
                    <p className="text-xs text-[color:var(--white-45)]">Share a quick update with your workspace.</p>
                  </div>
                </div>

                <textarea
                  value={commentDraft}
                  onChange={(event) => setCommentDraft(event.target.value)}
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full min-h-[130px] rounded-[1.5rem] border border-[var(--white-06)] bg-[var(--surface)] px-4 py-4 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--white-40)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[color:var(--white-45)]">Posted comments are visible to everyone on this workspace.</p>
                  <button
                    onClick={addComment}
                    className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[color:var(--accent-text)] hover:bg-[var(--accent-hover)]"
                  >
                    Post comment
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {comments.map((comment) => (
                <CommentRow key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
