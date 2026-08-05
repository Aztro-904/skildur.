import type { Dataset } from "./types";

export const datasets: Dataset[] = [
  {
    id: crypto.randomUUID(),
    name: "Orders",
    description: "Sample commerce dataset",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),

    columns: [
      { id: "customer", name: "Customer", type: "text" },
      { id: "status", name: "Status", type: "text" },
      { id: "revenue", name: "Revenue", type: "number" },
      { id: "date", name: "Date", type: "date" },
    ],

    rows: [
      {
        id: crypto.randomUUID(),
        values: {
          customer: "Apple",
          status: "Paid",
          revenue: 4200,
          date: "2026-08-01",
        },
      },
      {
        id: crypto.randomUUID(),
        values: {
          customer: "Tesla",
          status: "Pending",
          revenue: 860,
          date: "2026-08-03",
        },
      },
      {
        id: crypto.randomUUID(),
        values: {
          customer: "Stripe",
          status: "Paid",
          revenue: 1250,
          date: "2026-08-04",
        },
      },
    ],
  },
];