import { ethers } from "ethers";

export function hasMetaMaskInstall() {
  if (!(window as any).ethereum) {
    alert("Metamask wallet is not installed");
    return;
  } else {
    alert("Metamask wallet is installed");
  }
}

export const connectMetaMask = async () => {
  try {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const address = accounts[0];
    let balance: bigint | string = await provider.getBalance(address);
    balance = Number(ethers.formatEther(balance)).toFixed(2);
    const network = await provider.getNetwork();
    const networkName = network.name;
    const chainId = Number(network.chainId);

    return { address, networkName, chainId, balance };
  } catch (error) {
    console.log(error);
  }
};


export function shortenEthAddress(address: `0x${string}` | undefined): string {
  if (!address) return '';
  return `${address.slice(0, 5)}...${address.slice(-3)}`;
}