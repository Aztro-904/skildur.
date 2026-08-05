import Papa from "papaparse";

import type {
  Dataset,
  DataColumn,
  DataRow,
} from "../types";

export function importCsv(
  file: File,
  onComplete: (dataset: Dataset) => void
) {
  Papa.parse<Record<string, string>>(file, {
    header: true,
    skipEmptyLines: true,

    complete(results) {
      const headers = results.meta.fields ?? [];

      const columns: DataColumn[] = headers.map(
        (header) => ({
          id: crypto.randomUUID(),
          name: header,
          type: "text",
        })
      );

      const rows: DataRow[] = results.data.map(
        (row) => ({
          id: crypto.randomUUID(),
          values: Object.fromEntries(
            headers.map((header, index) => [
              columns[index].id,
              row[header] ?? "",
            ])
          ),
        })
      );

      const dataset: Dataset = {
        id: crypto.randomUUID(),
        name: file.name.replace(/\.csv$/i, ""),
        description: "",
        columns,
        rows,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      onComplete(dataset);
    },
  });
}