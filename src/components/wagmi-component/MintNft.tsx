"use client";
import { abiKey } from "@/contracts/abiKey"; // Import your ABI
import { requestToSmartContract } from "@/utils/smartContractConnection";
import { ethers } from "ethers";
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
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Symbol" />
        <input type="number" placeholder="max supply" />
        <input type="text" placeholder="symbol" />
        <input type="text" placeholder="url" />
        <input type="text" placeholder="url" />
      </form>
      <button onClick={mintNFT}
      className="py-3 px-5 bg-blue-500"
      >Mint NFT</button>
    </div>
  );
}
