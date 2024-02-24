import React from "react";
import { atom, useAtom } from 'jotai'

const countAtom = atom(0)

const testpage = () => {
  const [count, setCount] = useAtom(countAtom)
  const handleCountUp = () => setCount(prev => prev + 1)

  return <div>testpage</div>;
};

export default testpage;