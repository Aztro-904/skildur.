"use client";

import type { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  subtitle?: string;
}

export function MetricCard({
  label,
  value,
  icon,
  subtitle,
}: MetricCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--white-08)]
        bg-[var(--white-03)]
        p-5
        transition-all
        duration-200
        hover:border-[var(--white-12)]
        hover:bg-[var(--white-05)]
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-[color:var(--white-40)]
            "
          >
            {label}
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-semibold
              tracking-tight
              text-[color:var(--foreground)]
            "
          >
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-[color:var(--white-40)]">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div
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
              text-[color:var(--white-70)]
            "
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}