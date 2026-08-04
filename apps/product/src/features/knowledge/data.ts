import type { KnowledgeItem } from "./types";

export const knowledgeItems: KnowledgeItem[] = [
  {
    id: "welcome",
    title: "Welcome to Skildur",
    type: "document",
    content: "Your connected knowledge workspace.",
    linkedObjects: ["project-1"],

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];