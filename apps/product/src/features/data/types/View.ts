export interface DataView {
  id: string;
  name: string;

  filters: {
    columnId: string;
    operator:
      | "contains"
      | "equals"
      | "greater"
      | "less";

    value: string;
  }[];

  sort?: {
    columnId: string;
    direction:
      | "asc"
      | "desc";
  };

  createdAt: string;
}