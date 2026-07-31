export type ObjectType =
  | "document"
  | "project"
  | "data"
  | "person"
  | "goal";

export interface SkildurObject {
  id: string;
  type: ObjectType;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}