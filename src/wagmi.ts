import { http, createConfig } from "wagmi";
import { avalanche, bsc, mainnet, sepolia } from "wagmi/chains";
import { walletConnect, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia, bsc, avalanche],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID as string,
    }),
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    "43114": http(),
    "56": http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
