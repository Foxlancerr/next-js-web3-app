import { abiKey } from "@/contracts/abiKey";
import { ethers } from "ethers";
import { deployContract } from "viem/actions";

export const requestToSmartContract = async () => {
  try {
    if (window.ethereum) {
      // make a request
      const provider = new ethers.BrowserProvider(window.ethereum);
      // request to metamask account for connection
      const account = await provider.send("eth_requestAccounts", []);
      //signer will help to interect our smart contract
      const signer = await provider.getSigner();
      // pass these data to my smart contract and this will verified me
      console.log(process.env.MINT_NFT_CONTRACT_ADDRESS);
      
      const deplyContract = new ethers.Contract(
        '0xb3d5c9297A0A41DD11559f75981922F85Cb54f93',
          abiKey,
          signer
        );
        
        console.log("connection successful",deployContract);
        return deplyContract;
    } else {
      console.log("pl connect to your metamask");
    }
  } catch (err) {
    if (err) {
        console.log("errr",err);
        throw err;

    }
  }
};
