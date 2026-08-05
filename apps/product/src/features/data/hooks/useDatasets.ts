"use client";

import { useEffect, useMemo, useState } from "react";

import { datasets as initialDatasets } from "../data";
import type {
  Dataset,
  DataColumn,
  DataRow,
} from "../types";

const STORAGE_KEY = "skildur-datasets";

export function useDatasets() {
  const [datasets, setDatasets] =
    useState<Dataset[]>(initialDatasets);

  const [selectedId, setSelectedId] =
    useState(initialDatasets[0]?.id ?? "");

  useEffect(() => {
    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed: Dataset[] =
        JSON.parse(saved);

      if (parsed.length) {
        setDatasets(parsed);
        setSelectedId(parsed[0].id);
      }
    } catch {
      console.error(
        "Failed to load datasets."
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(datasets)
    );
  }, [datasets]);

  const selected = useMemo(
    () =>
      datasets.find(
        (d) => d.id === selectedId
      ) ?? datasets[0],
    [datasets, selectedId]
  );

  function createDataset() {
    const dataset: Dataset = {
      id: crypto.randomUUID(),
      name: "Untitled Dataset",
      description: "",
      columns: [],
      rows: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setDatasets((c) => [...c, dataset]);
    setSelectedId(dataset.id);
  }

  function addDataset(dataset: Dataset) {
    setDatasets((c) => [...c, dataset]);
    setSelectedId(dataset.id);
  }

  function renameDataset(
    id: string,
    name: string
  ) {
    setDatasets((c) =>
      c.map((d) =>
        d.id === id
          ? {
              ...d,
              name,
              updatedAt:
                new Date().toISOString(),
            }
          : d
      )
    );
  }

  function duplicateDataset(id: string) {
    const dataset = datasets.find(
      (d) => d.id === id
    );

    if (!dataset) return;

    const copy: Dataset = {
      ...dataset,
      id: crypto.randomUUID(),
      name: `${dataset.name} Copy`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setDatasets((c) => [...c, copy]);
    setSelectedId(copy.id);
  }

  function deleteDataset(id: string) {
    const remaining = datasets.filter(
      (d) => d.id !== id
    );

    if (!remaining.length) {
      createDataset();
      return;
    }

    setDatasets(remaining);

    if (selectedId === id) {
      setSelectedId(remaining[0].id);
    }
  }

  function updateCell(
    datasetId: string,
    rowId: string,
    columnId: string,
    value: string | number | boolean
  ) {
    setDatasets((current) =>
      current.map((dataset) => {
        if (dataset.id !== datasetId)
          return dataset;

        return {
          ...dataset,
          updatedAt:
            new Date().toISOString(),
          rows: dataset.rows.map((row) =>
            row.id !== rowId
              ? row
              : {
                  ...row,
                  values: {
                    ...row.values,
                    [columnId]: value,
                  },
                }
          ),
        };
      })
    );
  }

  function addRow(datasetId: string) {
    setDatasets((current) =>
      current.map((dataset) => {
        if (dataset.id !== datasetId)
          return dataset;

        const values = Object.fromEntries(
          dataset.columns.map((c) => [
            c.id,
            "",
          ])
        );

        const row: DataRow = {
          id: crypto.randomUUID(),
          values,
        };

        return {
          ...dataset,
          updatedAt:
            new Date().toISOString(),
          rows: [...dataset.rows, row],
        };
      })
    );
  }

  function addColumn(
    datasetId: string,
    name = "New Column"
  ) {
    setDatasets((current) =>
      current.map((dataset) => {
        if (dataset.id !== datasetId)
          return dataset;

        const column: DataColumn = {
          id: crypto.randomUUID(),
          name,
          type: "text",
        };

        return {
          ...dataset,
          updatedAt:
            new Date().toISOString(),

          columns: [
            ...dataset.columns,
            column,
          ],

          rows: dataset.rows.map((row) => ({
            ...row,
            values: {
              ...row.values,
              [column.id]: "",
            },
          })),
        };
      })
    );
  }

  function deleteRow(
    datasetId: string,
    rowId: string
  ) {
    setDatasets((current) =>
      current.map((dataset) =>
        dataset.id !== datasetId
          ? dataset
          : {
              ...dataset,
              updatedAt:
                new Date().toISOString(),
              rows: dataset.rows.filter(
                (r) => r.id !== rowId
              ),
            }
      )
    );
  }

  function deleteColumn(
    datasetId: string,
    columnId: string
  ) {
    setDatasets((current) =>
      current.map((dataset) => {
        if (dataset.id !== datasetId)
          return dataset;

        return {
          ...dataset,
          updatedAt:
            new Date().toISOString(),

          columns: dataset.columns.filter(
            (c) => c.id !== columnId
          ),

          rows: dataset.rows.map((row) => {
            const values = {
              ...row.values,
            };

            delete values[columnId];

            return {
              ...row,
              values,
            };
          }),
        };
      })
    );
  }

  return {
    datasets,
    selected,
    selectedId,

    setSelectedId,

    createDataset,
    addDataset,
    renameDataset,
    duplicateDataset,
    deleteDataset,

    updateCell,
    addRow,
    addColumn,
    deleteRow,
    deleteColumn,
  };
}