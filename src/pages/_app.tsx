import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { atom, useAtom } from 'jotai'

const countAtom = atom(0)
const [count, setCount] = useAtom(countAtom)
const handleCountUp = () => setCount(prev => prev + 1);

export default function App({
  Component, pageProps }: AppProps) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCountUp}>+</button>
    </div>
  )
}
