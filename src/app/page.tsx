"use client";

export default function Home() {
  console.log(
    "you shouldn't see this client-side! (should only be logged on the server)"
  );
  throw new Promise(() => {});
}
