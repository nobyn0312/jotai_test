import Image from "next/image";
import { Inter } from "next/font/google";
import { atom, useAtom } from 'jotai'

const inter = Inter({ subsets: ["latin"] });


const countAtom = atom(0)


export default function Home() {
  const [count, setCount] = useAtom(countAtom)
  const handleCountUp = () => setCount(prev => prev + 1);

  return (
    <main
      className={`container`}
    >
      <h1>jotai</h1>
      <p>{count}</p>
      <button onClick={handleCountUp}>+</button>

    </main>
  );
}
