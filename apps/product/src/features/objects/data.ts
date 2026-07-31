import type { SkildurObject } from "./types";

export const objects: SkildurObject[] = [
  {
    id: "project-1",
    title: "Product Launch",
    type: "project",
    description: "Skildur v1 product development.",
    connections: [
      "document-1",
      "person-1",
      "data-1",
    ],
  },

  {
    id: "document-1",
    title: "Launch Strategy",
    type: "document",
    description: "Product launch planning document.",
    connections: [
      "project-1",
    ],
  },

  {
    id: "person-1",
    title: "Product Team",
    type: "person",
    description: "People responsible for execution.",
    connections: [
      "project-1",
    ],
  },

  {
    id: "data-1",
    title: "Analytics Dashboard",
    type: "data",
    description: "Product performance metrics.",
    connections: [
      "project-1",
    ],
  },
];