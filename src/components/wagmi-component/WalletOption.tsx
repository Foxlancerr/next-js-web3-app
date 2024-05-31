import Image from "next/image";
import * as React from "react";
import { Connector, useAccount, useConnect } from "wagmi";
import { WalletsImages } from "@/assets/constant";
import { GlobalContext, IGlobalState } from "@/context/GlobalContext";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const handleConnect = (connector: Connector) => {
    connect({ connector });
  };

  return connectors.map((connector: Connector, index: number) => (
    <div
      key={connector.uid}
      onClick={() => {
        handleConnect(connector);
      }}
      className={`group flex gap-x-2 flex-grow border-2 w-full p-3 bg-[#F5F7FB]  border-black/10 items-center justify-between cursor-pointer hover:bg-slate-200 rounded-md duration-150`}
    >
      <Image
        src={WalletsImages[index]}
        // src=''
        alt="Metamask-icon"
        className="w-7 h-7 cursor-pointer object-cover group-hover:-rotate-[15deg] group-hover:scale-[2] duration-200 "
      ></Image>

      <h1 className={`text-lg font-bold `}> {connector.name}</h1>
    </div>
  ));
}
