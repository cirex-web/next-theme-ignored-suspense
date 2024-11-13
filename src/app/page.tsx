import { Suspense } from "react";
import Comp from "./clientComponent";

export default function Home() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Comp />
    </Suspense>
  );
}
