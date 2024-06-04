import { bscTestnet } from 'wagmi/chains';
import { SmartChainImages } from "@/assets/constant";

export function switchChainImage(chain: any) {
  switch (chain?.name) {
    case "Ethereum":
      return SmartChainImages[0];
      break;
    case "Sepolia":
      return SmartChainImages[1];
      break;
    case "Binance Smart Chain Testnet":
      return SmartChainImages[2];
      break;
    case "Avalanche":
      return SmartChainImages[3];
      break;
    default:
      return SmartChainImages[0];
      break;
  }
}
