"use client";

export default function Home2() {
  console.log(
    "you shouldn't see this client-side! (should only be logged on the server)"
  );
  throw new Promise(() => {});
  return <div>df</div>;
}
