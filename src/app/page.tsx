"use client";

import { Suspense } from "react";
import Home2 from "./page2";

export default function Home() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Home2 />
    </Suspense>
  );
}
