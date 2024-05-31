import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

import FormLayout from "./shared/FormLayout";
import { storeUserDetails } from "@/features/User/UserSlice";
import React, { useContext} from "react";
import { GlobalContext, IGlobalState } from "@/context/GlobalContext";
import { WalletOptions } from "./wagmi-component/WalletOption";
import { useAccount } from "wagmi";

export default function MetamaskBox() {
  const dispatch = useDispatch();
  const { setIsMetaMaskBoxOpen } = useContext(GlobalContext) as IGlobalState;
  const { isConnected, address, chain } = useAccount();

  React.useEffect(() => {
    if (isConnected) {
      const accountInfo = {
        name: chain?.name,
        chainId: chain?.id,
        address: address,
      };
      setIsMetaMaskBoxOpen(false);
      dispatch(storeUserDetails({ user: accountInfo }));
    }
  }, [address, isConnected]);
  return (
    <FormLayout>
      <span
        onClick={() => {
          setIsMetaMaskBoxOpen(false);
        }}
        className="sm:text-4xl text-2xl cursor-pointer absolute right-10 top-5"
      >
        <IoClose></IoClose>
      </span>
      <div className="mb-2">
        <h1 className="font-bold text-lg">Connect Wallet</h1>
        <p>Choose how you want to connect wallet</p>
      </div>

      <h3 className="text-sm text-slate-400">Popular</h3>
      <WalletOptions></WalletOptions>
    </FormLayout>
  );
}
