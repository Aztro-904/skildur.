import type { DataRow } from "../types";
import type { DataView } from "../types/View";

export function filterRows(
  rows: DataRow[],
  view?: DataView
) {
  if (!view || !view.filters.length) {
    return rows;
  }

  return rows.filter((row) =>
    view.filters.every((filter) => {
      const value =
        String(
          row.values[filter.columnId] ?? ""
        ).toLowerCase();

      const target =
        filter.value.toLowerCase();

      switch (filter.operator) {
        case "contains":
          return value.includes(target);

        case "equals":
          return value === target;

        case "greater":
          return (
            Number(value) >
            Number(target)
          );

        case "less":
          return (
            Number(value) <
            Number(target)
          );

        default:
          return true;
      }
    })
  );
}