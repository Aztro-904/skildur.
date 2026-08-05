import type {
  ActivityItem,
  CommentItem,
  Team,
  UserProfile,
} from "./types";

const users: UserProfile[] = [
  {
    id: "u1",
    name: "Azlan Harper",
    email: "azlan@skildur.com",
  },
  {
    id: "u2",
    name: "Mina Patel",
    email: "mina@skildur.com",
  },
  {
    id: "u3",
    name: "Noah Kim",
    email: "noah@skildur.com",
  },
  {
    id: "u4",
    name: "Eve Zhang",
    email: "eve@skildur.com",
  },
];

export const teams: Team[] = [
  {
    id: "t1",
    name: "Skildur Ops",
    description: "Team workspace for operations, analytics, and cross-functional collaboration.",
    members: [
      { user: users[0], role: "Admin" },
      { user: users[1], role: "Editor" },
      { user: users[2], role: "Viewer" },
    ],
  },
  {
    id: "t2",
    name: "Growth Squad",
    description: "Customer insights, growth experiments, and connected analytics.",
    members: [
      { user: users[1], role: "Admin" },
      { user: users[3], role: "Editor" },
    ],
  },
];

export const activityItems: ActivityItem[] = [
  {
    id: "a1",
    actor: users[0],
    action: "updated",
    target: "Sales forecast document",
    createdAt: "2m ago",
  },
  {
    id: "a2",
    actor: users[1],
    action: "commented on",
    target: "Q3 planning notes",
    createdAt: "14m ago",
  },
  {
    id: "a3",
    actor: users[2],
    action: "shared",
    target: "Operations workspace",
    createdAt: "45m ago",
  },
  {
    id: "a4",
    actor: users[3],
    action: "granted access to",
    target: "Finance dashboard",
    createdAt: "1h ago",
  },
];

export const comments: CommentItem[] = [
  {
    id: "c1",
    author: users[1],
    body: "We should sync the final project plan with the product team before Monday.",
    createdAt: "10m ago",
    target: "Project roadmap",
  },
  {
    id: "c2",
    author: users[2],
    body: "The dataset update is live — analytics will refresh automatically.",
    createdAt: "32m ago",
    target: "Revenue dataset",
  },
];
