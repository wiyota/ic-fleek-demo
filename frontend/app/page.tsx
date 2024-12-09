import Image from "next/image";
import LinkButton from "@/components/linkButton";
import GreetCard from "@/components/greetCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold self-center">
          Fully On-Chain Edge SSR Demo
        </h1>
        <div className="flex flex-row gap-8 items-center self-center">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={26}
              priority
            />
          </a>
          <a
            href="https://fleek.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/fleek.svg"
              alt="Fleek logo"
              width={120}
              height={26}
              priority
            />
          </a>
          <a
            href="https://internetcomputer.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ic.svg"
              alt="Internet Computer logo"
              width={120}
              height={26}
              priority
            />
          </a>
        </div>

        <div className="flex gap-8 items-center flex-col sm:flex-row">
          <LinkButton href="/greet-fleek">Greet Fleek</LinkButton>
          <GreetCard />
        </div>
      </main>
    </div>
  );
}
