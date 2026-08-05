import type { DataRow } from "../types";
import type { DataView } from "../types/View";

export function sortRows(
  rows: DataRow[],
  view?: DataView
) {
  if (!view?.sort) {
    return rows;
  }

  const {
    columnId,
    direction,
  } = view.sort;

  return [...rows].sort((a, b) => {
    const first =
      a.values[columnId] ?? "";

    const second =
      b.values[columnId] ?? "";

    if (
      typeof first === "number" &&
      typeof second === "number"
    ) {
      return direction === "asc"
        ? first - second
        : second - first;
    }

    return direction === "asc"
      ? String(first).localeCompare(
          String(second)
        )
      : String(second).localeCompare(
          String(first)
        );
  });
}