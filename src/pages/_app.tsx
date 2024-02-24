import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { atom, useAtom } from 'jotai'

const countAtom = atom(0)
export const incrementCountAction = atom(
  (get) => get(countAtom),
  (get, set) => set(countAtom, get(countAtom) + 1),
);

export default function App({
  Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
