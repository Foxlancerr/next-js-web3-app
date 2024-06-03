// 'use server'
import { ethers } from "ethers";

const API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;
const infuraProvider = new ethers.InfuraProvider("sepolia", API_KEY);

export const sendTransaction = async (
  address: string,
  amount: string,
) => {
  if (!window.ethereum) console.error("No wallet found!");
  else {
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const tx = await signer.sendTransaction({
      to: address,
      value: ethers.parseEther(amount),
    });
    console.log("called", tx);
    return "Transaction initiated! Tx hash: " + tx.hash;
  }
};
