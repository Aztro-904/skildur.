"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  Check,
  ChevronDown,
} from "lucide-react";

import {
  EditableCell,
} from "./EditableCell";

import type { Dataset } from "../types";
import type { DataView } from "../types/View";


interface DataTableProps {
  dataset: Dataset;
  query: string;

  view?: DataView;

  onCellChange: (
    rowId: string,
    columnId: string,
    value: string | number | boolean
  ) => void;

  onAddRow: () => void;

  onAddColumn: () => void;
}


export function DataTable({
  dataset,
  query,
  onCellChange,
  onAddRow,
  onAddColumn,
}: DataTableProps) {


  const [
    selectedRows,
    setSelectedRows,
  ] = useState<string[]>([]);



  const rows = useMemo(() => {

    if (!query.trim()) {
      return dataset.rows;
    }


    const search =
      query.toLowerCase();


    return dataset.rows.filter(
      (row) =>
        Object.values(row.values)
          .some((value) =>
            String(value)
              .toLowerCase()
              .includes(search)
          )
    );

  }, [
    dataset.rows,
    query,
  ]);



  function toggleRow(
    id: string
  ) {

    setSelectedRows((current) =>
      current.includes(id)

        ? current.filter(
            (row) =>
              row !== id
          )

        : [
            ...current,
            id,
          ]
    );

  }



  return (
    <div
      className="
        px-8

        pb-8
      "
    >

      <div
        className="
          overflow-hidden

          rounded-2xl

          border

          border-[var(--white-08)]

          bg-[var(--surface-deeper)]
        "
      >

        <div
          className="
            max-h-[65vh]

            overflow-auto
          "
        >

          <table
            className="
              min-w-full

              border-collapse
            "
          >

            <thead>

              <tr
                className="
                  sticky

                  top-0

                  z-10

                  bg-[var(--surface-deep)]/95

                  backdrop-blur-xl
                "
              >

                <th
                  className="
                    w-12

                    border-b

                    border-[var(--white-08)]

                    px-4

                    py-3
                  "
                />


                {dataset.columns.map(
                  (column) => (

                    <th
                      key={column.id}

                      className="
                        border-b

                        border-[var(--white-08)]

                        px-5

                        py-3

                        text-left

                        text-[11px]

                        font-medium

                        uppercase

                        tracking-wider

                        text-[color:var(--white-35)]
                      "
                    >

                      <div
                        className="
                          flex

                          items-center

                          gap-2
                        "
                      >

                        {column.name}


                        <ChevronDown
                          size={12}
                        />

                      </div>

                    </th>

                  )
                )}


                <th
                  className="
                    border-b

                    border-[var(--white-08)]

                    px-4
                  "
                >

                  <button
                    onClick={onAddColumn}

                    className="
                      text-[color:var(--white-40)]

                      hover:text-[color:var(--foreground)]
                    "
                  >
                    +
                  </button>

                </th>


              </tr>

            </thead>



            <tbody>

              {rows.map((row) => {

                const selected =
                  selectedRows.includes(
                    row.id
                  );


                return (

                  <tr
                    key={row.id}

                    className={`
                      group

                      transition

                      hover:bg-[var(--white-03)]

                      ${
                        selected
                        ?
                        "bg-[var(--accent)]/[0.06]"
                        :
                        ""
                      }
                    `}
                  >

                    <td
                      className="
                        border-b

                        border-[var(--white-05)]

                        px-4

                        py-3
                      "
                    >

                      <button
                        onClick={() =>
                          toggleRow(row.id)
                        }

                        className={`
                          flex

                          h-4

                          w-4

                          items-center

                          justify-center

                          rounded

                          border

                          ${
                            selected
                            ?
                            "border-[var(--accent-hover)] bg-[var(--accent)]"
                            :
                            "border-[var(--white-20)]"
                          }
                        `}
                      >

                        {
                          selected &&
                          (
                            <Check
                              size={11}
                              className="text-[color:var(--foreground)]"
                            />
                          )
                        }

                      </button>

                    </td>



                    {dataset.columns.map(
                      (column) => (

                        <td
                          key={column.id}

                          className="
                            border-b

                            border-[var(--white-05)]

                            px-5

                            py-2

                            text-sm

                            text-[color:var(--white-75)]
                          "
                        >

                          <EditableCell

                            value={
                              row.values[
                                column.id
                              ] ?? ""
                            }

                            onChange={(value) =>
                              onCellChange(
                                row.id,
                                column.id,
                                value
                              )
                            }

                          />

                        </td>

                      )
                    )}



                    <td
                      className="
                        border-b

                        border-[var(--white-05)]
                      "
                    />

                  </tr>

                );

              })}


            </tbody>


          </table>


        </div>


        <div
          className="
            border-t

            border-[var(--white-06)]

            p-4
          "
        >

          <button
            onClick={onAddRow}

            className="
              rounded-xl

              bg-[var(--accent)]

              px-4

              py-2

              text-sm

              font-medium

              text-[color:var(--foreground)]

              hover:bg-[var(--accent-hover)]
            "
          >

            + New Row

          </button>


        </div>


      </div>


    </div>
  );
}