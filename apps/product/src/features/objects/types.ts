export type ObjectType =
  | "project"
  | "document"
  | "person"
  | "data"
  | "knowledge";

export interface SkildurObject {
  id: string;
  title: string;
  type: ObjectType;
  description?: string;
  connections: string[];
}