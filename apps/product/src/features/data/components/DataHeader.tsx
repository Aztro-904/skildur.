"use client";

import {
  Database,
  Upload,
  MoreHorizontal,
  Rows3,
  Columns3,
} from "lucide-react";

import type { Dataset } from "../types";


interface DataHeaderProps {
  dataset: Dataset;
  onImport?: () => void;
}


export function DataHeader({
  dataset,
  onImport,
}: DataHeaderProps) {

  return (
    <div
      className="
        flex

        items-start

        justify-between

        border-b

        border-[var(--white-06)]

        px-8

        py-6
      "
    >

      {/* Left */}

      <div
        className="
          flex

          items-start

          gap-4
        "
      >

        <div
          className="
            flex

            h-11
            w-11

            items-center

            justify-center

            rounded-xl

            bg-[var(--accent-soft)]

            text-[color:var(--accent-text)]
          "
        >

          <Database
            size={21}
          />

        </div>


        <div>

          <h1
            className="
              text-xl

              font-semibold

              tracking-tight

              text-[color:var(--foreground)]
            "
          >
            {dataset.name}
          </h1>


          <p
            className="
              mt-1

              text-sm

              text-[color:var(--white-40)]
            "
          >
            Manage and analyze this dataset.
          </p>


          <div
            className="
              mt-4

              flex

              items-center

              gap-4

              text-xs

              text-[color:var(--white-35)]
            "
          >

            <span
              className="
                flex

                items-center

                gap-1.5
              "
            >
              <Rows3
                size={13}
              />

              {dataset.rows.length} rows

            </span>


            <span
              className="
                flex

                items-center

                gap-1.5
              "
            >
              <Columns3
                size={13}
              />

              {dataset.columns.length} columns

            </span>


          </div>

        </div>


      </div>



      {/* Actions */}

      <div
        className="
          flex

          items-center

          gap-2
        "
      >

        <button
          onClick={onImport}

          className="
            flex

            items-center

            gap-2

            rounded-xl

            border

            border-[var(--white-08)]

            bg-[var(--white-03)]

            px-4

            py-2.5

            text-sm

            text-[color:var(--white-70)]

            transition

            hover:bg-[var(--white-06)]

            hover:text-[color:var(--foreground)]
          "
        >

          <Upload
            size={16}
          />

          Import

        </button>



        <button
          className="
            flex

            h-10

            w-10

            items-center

            justify-center

            rounded-xl

            border

            border-[var(--white-08)]

            bg-[var(--white-03)]

            text-[color:var(--white-50)]

            hover:bg-[var(--white-06)]

            hover:text-[color:var(--foreground)]
          "
        >

          <MoreHorizontal
            size={18}
          />

        </button>


      </div>


    </div>
  );
}