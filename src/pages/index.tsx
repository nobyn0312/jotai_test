import { Inter } from "next/font/google";
import Link from "next/link";
import {incrementCountAction} from "@/pages/_app";
import {useAtom} from "jotai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, incrementCount] = useAtom(incrementCountAction);

  return (
    <main
      className={`min-h-screen text-center mx-auto space-y-2 ${inter.className}`}
    >
      <h1 className={"text-2xl"}>Top Page</h1>
      <p>count: {count}</p>
      <button className={"px-3 py-1.5 rounded bg-green-700 text-white"} onClick={incrementCount}>Count Up</button>
      <ul>
        <li>
          <Link className={"text-cyan-600 underline"} href={"/cart"}>Cartページ</Link>
        </li>
      </ul>
    </main>
  );
}
