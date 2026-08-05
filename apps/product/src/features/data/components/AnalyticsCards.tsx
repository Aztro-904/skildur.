"use client";

import {
  Activity,
  Database,
  Rows3,
  Columns3,
} from "lucide-react";

import type { Dataset } from "../types";


interface AnalyticsCardsProps {
  dataset: Dataset;
}


export function AnalyticsCards({
  dataset,
}: AnalyticsCardsProps) {

  const cards = [
    {
      label: "Records",
      value: dataset.rows.length,
      icon: Rows3,
      description: "Total rows",
    },
    {
      label: "Columns",
      value: dataset.columns.length,
      icon: Columns3,
      description: "Data fields",
    },
    {
      label: "Status",
      value: "Active",
      icon: Activity,
      description: "Dataset availability",
    },
    {
      label: "Sources",
      value: "1",
      icon: Database,
      description: "Connected sources",
    },
  ];


  return (
    <div
      className="
        grid

        gap-4

        px-8

        py-6

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >

      {cards.map((card) => {

        const Icon =
          card.icon;


        return (
          <div
            key={card.label}

            className="
              rounded-2xl

              border

              border-[var(--white-08)]

              bg-[var(--white-03)]

              p-5

              transition

              hover:bg-[var(--white-05)]
            "
          >

            <div
              className="
                flex

                items-center

                justify-between
              "
            >

              <p
                className="
                  text-sm

                  text-[color:var(--white-45)]
                "
              >
                {card.label}
              </p>


              <div
                className="
                  flex

                  h-8

                  w-8

                  items-center

                  justify-center

                  rounded-lg

                  bg-[var(--accent-soft)]

                  text-[color:var(--accent-text)]
                "
              >

                <Icon
                  size={16}
                />

              </div>


            </div>



            <p
              className="
                mt-5

                text-2xl

                font-semibold

                tracking-tight

                text-[color:var(--foreground)]
              "
            >
              {card.value}
            </p>


            <p
              className="
                mt-1

                text-xs

                text-[color:var(--white-35)]
              "
            >
              {card.description}
            </p>


          </div>
        );

      })}

    </div>
  );
}