"use client";

import { useState } from "react";
import Link from "./link";

export const runtime = "edge";

export default function GreetCard() {
  const [name, setName] = useState("");

  return (
    <div className="relative grid border rounded-lg items-center justify-items-center p-8 gap-4 font-[family-name:var(--font-geist-sans)]">
      <p className="absolute top-0 left-0 px-3 py-2 text-xs font-bold opacity-50">
        Crient Side Component
      </p>
      <div className="grid gap-1 py-4">
        <p className="text-sm">Enter your name</p>
        <input
          className="border rounded-lg px-4 py-1 dark:bg-stone-900"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>
      <Link href={`/greet/${name}`} disabled={name == ""}>
        Greet {name || "you"}
      </Link>
    </div>
  );
}
