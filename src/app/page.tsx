"use client";

import Header from "@/components/Header";
import RootComponent from "@/components/RootComponent";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function App() {
  return (
    <>
      <RootComponent></RootComponent>
    </>
  );
}

export default App;
