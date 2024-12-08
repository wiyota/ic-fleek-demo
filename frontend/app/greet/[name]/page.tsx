// Dynamic route

import { backend } from "@/declarations/isomorphic";

export const runtime = "edge";

export default async function Greet({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  const data = await backend.greet(name);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 row-start-2">
          <p className="self-center text-xl font-600">{data}</p>
          <p className="text-sm">This page is dynamic, rendered on the edge.</p>
        </div>
      </main>
    </div>
  );
}