import { sepolia } from "wagmi/chains";
import { EStatus, IProduct } from "@/types/ProductList.type";

import WalletConnectImage from "./icons/wallet-connect.png";
import MetaMaskImage from "./icons/metamask-logo.png";
import BnbChainLogo from "./icons/bnb-logo.png";
import EtheriumChainLogo from "./icons/etherium-logo.jpg";
import AvalancheChainLogo from "./icons/avalanche-logo.png";
import SepoliaChainLogo from "./icons/sepholia-logo.png";
export const WalletsImages = [WalletConnectImage, MetaMaskImage];

export const productsListArr: IProduct[] = [
  {
    id: 0,
    "Product Name": "Smartphone",
    category: "Electronics",
    price: 599,
    status: EStatus.COMPLETE,
  },
  {
    id: 1,
    "Product Name": "Laptop",
    category: "Electronics",
    price: 899,
    status: EStatus.CLOSE,
  },
  {
    id: 2,
    "Product Name": "Desk Chair",
    category: "Furniture",
    price: 149,
    status: EStatus.COMPLETE,
  },
  {
    id: 3,
    "Product Name": "Running Shoes",
    category: "Footwear",
    price: 79,
    status: EStatus.CLOSE,
  },
  {
    id: 4,
    "Product Name": "Digital Camera",
    category: "Electronics",
    price: 399,
    status: EStatus.PENDING,
  },
  {
    id: 5,
    "Product Name": "Coffee Maker",
    category: "Appliances",
    price: 49,
    status: EStatus.CLOSE,
  },
  {
    id: 6,
    "Product Name": "TV Stand",
    category: "Furniture",
    price: 199,
    status: EStatus.PENDING,
  },
  {
    id: 7,
    "Product Name": "Headphones",
    category: "Electronics",
    price: 129,
    status: EStatus.COMPLETE,
  },
  {
    id: 8,
    "Product Name": "Backpack",
    category: "Bags",
    price: 59,
    status: EStatus.CLOSE,
  },
  {
    id: 9,
    "Product Name": "Desk Lamp",
    category: "Home Decor",
    price: 29,
    status: EStatus.CLOSE,
  },
];

export const SmartChainImages = [
  EtheriumChainLogo,
  SepoliaChainLogo,
  BnbChainLogo,
  AvalancheChainLogo,
];
