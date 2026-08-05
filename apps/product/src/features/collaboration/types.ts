export type Role = "Admin" | "Editor" | "Viewer";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface TeamMember {
  user: UserProfile;
  role: Role;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
}

export interface ActivityItem {
  id: string;
  actor: UserProfile;
  action: string;
  target: string;
  createdAt: string;
}

export interface CommentItem {
  id: string;
  author: UserProfile;
  body: string;
  createdAt: string;
  target: string;
}
