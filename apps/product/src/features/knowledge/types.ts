export type KnowledgeType = "note" | "document";

export interface KnowledgeItem {
  id: string;
  title: string;
  type: KnowledgeType;
  content: string;
  linkedObjects: string[];
}