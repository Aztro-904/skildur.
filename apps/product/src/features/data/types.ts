export interface DataColumn {
  id: string;
  name: string;
  type: "text" | "number" | "date" | "boolean";
}

export interface DataRow {
  id: string;
  values: Record<string, string | number | boolean>;
}

export interface Dataset {
  id: string;
  name: string;
  description?: string;
  columns: DataColumn[];
  rows: DataRow[];
  createdAt: string;
  updatedAt: string;
}