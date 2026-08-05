"use client";

import { useState } from "react";

import { DataWorkspace } from "@/features/data/components/DataWorkspace";
import { DataSidebar } from "@/features/data/components/DataSidebar";
import { DataHeader } from "@/features/data/components/DataHeader";
import { DataToolbar } from "@/features/data/components/DataToolbar";
import { DataTable } from "@/features/data/components/DataTable";
import { ImportModal } from "@/features/data/components/ImportModal";
import { AnalyticsCards } from "@/features/data/components/AnalyticsCards";
import { DataViews } from "@/features/data/components/DataViews";
import { FilterBar } from "@/features/data/components/FilterBar";
import { FilterModal } from "@/features/data/components/FilterModal";
import { SortBar } from "@/features/data/components/SortBar";

import { useDatasets } from "@/features/data/hooks/useDatasets";
import { useViews } from "@/features/data/hooks/useViews";

import { importCsv } from "@/features/data/utils/importCsv";

export default function DataPage() {
  const {
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
  } = useDatasets();

  const {
    views,
    createView,
    deleteView,
    updateView,
  } = useViews();

  const [query, setQuery] =
    useState("");

  const [importOpen, setImportOpen] =
    useState(false);

  const [filterOpen, setFilterOpen] =
    useState(false);

  const [selectedView, setSelectedView] =
    useState("");

  const activeView = views.find(
    (view) =>
      view.id === selectedView
  );

  function handleRename(id: string) {
    const dataset =
      datasets.find(
        (item) => item.id === id
      );

    if (!dataset) return;

    const name = window.prompt(
      "Rename dataset",
      dataset.name
    );

    if (!name) return;

    renameDataset(id, name);
  }

  function addFilter(filter: {
    columnId: string;
    operator:
      | "contains"
      | "equals"
      | "greater"
      | "less";
    value: string;
  }) {
    if (!activeView) return;

    updateView(
      activeView.id,
      {
        filters: [
          ...activeView.filters,
          filter,
        ],
      }
    );
  }

  function addSort(
    columnId: string,
    direction: "asc" | "desc"
  ) {
    if (!activeView) return;

    updateView(
      activeView.id,
      {
        sort: {
          columnId,
          direction,
        },
      }
    );
  }

  if (!selected) return null;

  return (
    <DataWorkspace
      sidebar={
        <DataSidebar
          datasets={datasets}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onCreate={createDataset}
          onRename={handleRename}
          onDuplicate={duplicateDataset}
          onDelete={deleteDataset}
        />
      }
    >
      <DataHeader dataset={selected} />

      <DataToolbar
        query={query}
        onQueryChange={setQuery}
        onImport={() =>
          setImportOpen(true)
        }
      />

      <DataViews
        views={views}
        selectedView={selectedView}
        onSelect={setSelectedView}
        onCreate={() => {
          const name =
            window.prompt(
              "View name"
            );

          if (!name) return;

          const view =
            createView(name);

          setSelectedView(view.id);
        }}
        onDelete={(id) => {
          deleteView(id);
          setSelectedView("");
        }}
      />

      <FilterBar
        columns={selected.columns}
        onAddFilter={() =>
          setFilterOpen(true)
        }
      />

      <FilterModal
        open={filterOpen}
        columns={selected.columns}
        onClose={() =>
          setFilterOpen(false)
        }
        onApply={addFilter}
      />

      <SortBar
        columns={selected.columns}
        onSort={addSort}
      />

      <AnalyticsCards dataset={selected} />

      <DataTable
        dataset={selected}
        query={query}
        view={activeView}
        onCellChange={(
          rowId,
          columnId,
          value
        ) =>
          updateCell(
            selected.id,
            rowId,
            columnId,
            value
          )
        }
        onAddRow={() =>
          addRow(selected.id)
        }
        onAddColumn={() =>
          addColumn(selected.id)
        }
      />

      <ImportModal
        open={importOpen}
        onClose={() =>
          setImportOpen(false)
        }
        onImport={(file) => {
          importCsv(
            file,
            addDataset
          );

          setImportOpen(false);
        }}
      />
    </DataWorkspace>
  );
}