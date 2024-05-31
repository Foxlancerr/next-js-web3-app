"use client";

import Header from "@/components/Header";
import RootComponent from "@/components/RootComponent";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <Header></Header>
      <RootComponent></RootComponent>
    </>
  );
}

export default App;
