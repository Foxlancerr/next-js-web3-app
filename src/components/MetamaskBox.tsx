import { connectMetaMask } from "@/utils/metamaskConnect";
import Image from "next/image";
import metaMaskIcon from "@/assets/icons/metamask.svg";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { metamaskBoxCloseHandlar } from "@/features/MetaMaskBox/MetaMaskBoxSlice";
import FormLayout from "./shared/FormLayout";
import { logInUser, storeUserDetails } from "@/features/User/UserSlice";
import { useContext } from "react";
import { GlobalContext, IGlobalState } from "@/context/GlobalContext";
import { WalletOptions } from "./wagmi-component/WalletOption";

export default function MetamaskBox() {
  const dispatch = useDispatch();
  const { setIsMetaMaskBoxOpen } = useContext(GlobalContext) as IGlobalState;

  const handleConnect = async () => {
    const account = await connectMetaMask();
    if (account) {
      alert("Connection successful: " + account.address);
      dispatch(storeUserDetails({ user: account }));
      dispatch(logInUser());
    } else {
      alert("Something went wrong");
    }
    setIsMetaMaskBoxOpen(false);
  };
  return (
    <FormLayout>
      <span
        onClick={() => {
          setIsMetaMaskBoxOpen(false);
        }}
        className="sm:text-4xl text-2xl cursor-pointer absolute right-5 top-5"
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
