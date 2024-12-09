"use client";

import { useState } from "react";
import LinkButton from "./linkButton";

export const runtime = "edge";

export default function GreetCard() {
  const [name, setName] = useState("");

  const urlSafeName = name
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9\-]/g, "");

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
      <LinkButton href={`/greet/${urlSafeName}`} disabled={!urlSafeName}>
        Greet {urlSafeName || "you"}
      </LinkButton>
    </div>
  );
}
