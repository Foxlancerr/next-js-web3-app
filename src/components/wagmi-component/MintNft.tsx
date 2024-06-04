"use client";
import { abiKey } from "@/contracts/abiKey"; 
import { requestToSmartContract } from "@/utils/smartContractConnection";
import Link from "next/link";
import { useEffect, useState } from "react";


export function MintNFT() {

  const uri =
    "https://gateway.ipfs.chaingpt.org/ipfs/QmVwvAKHru69TBtTdTD6Rix1AyBSZAYwzqbfp2xgKyRY5b";
  const [contract, setContract] = useState<any>();

  console.log(contract);
  useEffect(() => {
    requestToSmartContract().then((res) => {
      if (res) {
        setContract(res);
      }
    });
  }, []);

  async function mintNFT() {
    const responce = await contract.create("Funavry", "FT", uri, 1, [1], false);
    console.log(responce);
  }

  return (
    <div className="flex flex-col gap-y-3 items-center justify-center h-[80vh]">
      <form className="flex gap-y-2 flex-col bg-blue-100 p-10 rounded-xl">
        <input
          type="text"
          placeholder="Name"
          className="border-none px-3 py-2 rounded-sm bg-slate-100"
        />
        <input
          type="text"
          placeholder="Symbol"
          className="border-none px-3 py-2 rounded-sm bg-slate-100"
        />
        <input
          type="number"
          placeholder="max supply"
          className="border-none px-3 py-2 rounded-sm bg-slate-100"
        />
        <input
          type="text"
          placeholder="symbol"
          className="border-none px-3 py-2 rounded-sm bg-slate-100"
        />
        <input
          type="text"
          placeholder="url"
          className="border-none px-3 py-2 rounded-sm bg-slate-100"
        />
        <input
          type="text"
          placeholder="url"
          className="border-none px-3 py-2 rounded-sm bg-slate-100"
        />
      </form>
      <button
        onClick={mintNFT}
        className="py-3 px-5 bg-blue-500 rounded-full text-white font-bold"
      >
        Mint NFT
      </button>

      <Link href={"/"} className="underline text-blue-500">
        Go to Home Page
      </Link>
    </div>
  );
}
