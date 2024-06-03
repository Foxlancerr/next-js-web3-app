import { SmartChainImages } from "@/assets/constant";
import { GlobalContext, IGlobalState } from "@/context/GlobalContext";
import Image from "next/image";
import React, { useContext } from "react";
import { useSwitchChain } from "wagmi";

function SmartChain() {
  const { chains, switchChain } = useSwitchChain();
  const { setIsSmartChainBoxOpen } = useContext(GlobalContext) as IGlobalState;
  return (
    <div className="w-[200px] flex flex-col gap-y-2">
      {chains.map((chain, index) => (
        <div
          key={chain.id}
          onClick={() => {
            switchChain({ chainId: chain.id });
            setIsSmartChainBoxOpen(false);
          }}
          className="cursor-pointer flex gap-2 items-center"
        >
          <Image
            src={SmartChainImages[index]}
            alt={chain.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm">{chain.name}</span>
        </div>
      ))}
    </div>
  );
}

export default SmartChain;
