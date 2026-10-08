"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function FormattedDate() {
  const date = useSyncExternalStore(
    emptySubscribe,
    () => new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }),
    () => "", // SSR snapshot to prevent hydration mismatch
  );

  return <span>{date}</span>;
}