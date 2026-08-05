"use client";

import { useEffect, useState } from "react";

import type { DataView } from "../types/View";

const STORAGE_KEY = "skildur-data-views";

export function useViews() {
  const [views, setViews] =
    useState<DataView[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!saved) return;

    try {
      setViews(JSON.parse(saved));
    } catch {
      console.error(
        "Failed to load views"
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(views)
    );
  }, [views]);

  function createView(
    name: string
  ) {
    const view: DataView = {
      id: crypto.randomUUID(),

      name,

      filters: [],

      createdAt:
        new Date().toISOString(),
    };

    setViews((current) => [
      ...current,
      view,
    ]);

    return view;
  }

  function deleteView(id: string) {
    setViews((current) =>
      current.filter(
        (view) => view.id !== id
      )
    );
  }

  function updateView(
    id: string,
    updates: Partial<DataView>
  ) {
    setViews((current) =>
      current.map((view) =>
        view.id === id
          ? {
              ...view,
              ...updates,
            }
          : view
      )
    );
  }

  return {
    views,
    createView,
    deleteView,
    updateView,
  };
}