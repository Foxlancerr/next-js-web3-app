"use client";

import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCopyOutline } from "react-icons/io5";

import { logOutUser } from "@/features/User/UserSlice";
import { LuUserCircle } from "react-icons/lu";
import { RootState } from "@/store/store";
import { shortenEthAddress } from "@/utils/metamaskConnect";
import { copyTextToClipboard } from "@/utils/clipCopyText";
import { GlobalContext, IGlobalState } from "@/context/GlobalContext";
import MetamaskBox from "./MetamaskBox";
import { metamaskBoxOpenHandlar } from "@/features/MetaMaskBox/MetaMaskBoxSlice";
import { useAccount, useDisconnect } from "wagmi";
import { GrTransaction } from "react-icons/gr";
import Link from "next/link";
import DropDownBox from "./shared/DropDownBox";
import SmartChain from "./wagmi-component/SmartChain";
import Image from "next/image";
import { switchChainImage } from "@/utils/switchChainImage";
import UserDetailBox from "./UserDetailBox";

function Header() {
  const {
    isCopied,
    isDropDownOpen,
    setIsDropDownOpen,
    setIsCopied,
    isSmartChainBoxOpen,
    setIsSmartChainBoxOpen,
    isMetaMaskBoxOpen,
    setIsMetaMaskBoxOpen,
  } = useContext(GlobalContext) as IGlobalState;

  const { address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const isUserDetailBoxOpen = useSelector(
    (state: RootState) => state.metaMaskBoxReducer.isBoxOpen
  );
  const dispatch = useDispatch();
  const userDetails = useSelector(
    (state: RootState) => state.userReducer.userData
  );

  const handleCopyClick = () => {
    setIsDropDownOpen(false);
    copyTextToClipboard(address as `0x${string}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isMetaMaskBoxOpen && <MetamaskBox />}
      {isUserDetailBoxOpen && <UserDetailBox />}
      <nav
        style={{
          background: " #232B2B",
        }}
        className="py-2 px-10 shadow-sm z-[10] sticky top-0 left-0 flex justify-between items-center"
      >
        <h1 className="text-white font-bold">NextJs-App</h1>

        <div className="flex gap-2 items-center">
          {isCopied && (
            <span className="absolute bottom-0 left-[50%] bg-slate-200 py-1 px-4">
              Copied!
            </span>
          )}

          {isConnected ? (
            <div className="flex items-center gap-2">
              <div className="relative">
                <Image
                  src={switchChainImage(chain)}
                  alt="image1"
                  className="w-8 h-8 cursor-pointer rounded-full"
                  onClick={() => setIsSmartChainBoxOpen((prev) => !prev)}
                ></Image>
                <DropDownBox
                  isDropDownOpen={isSmartChainBoxOpen}
                  setIsDropDownOpen={setIsSmartChainBoxOpen}
                >
                  <div className="grid grid-cols-1 gap-3">
                    <SmartChain></SmartChain>
                  </div>
                </DropDownBox>
              </div>
              <div className="relative">
                <h2
                  onClick={() => setIsDropDownOpen((prev) => !prev)}
                  className={`text-sm text-white cursor-pointer rounded-full duration-150 ${
                    isDropDownOpen && "bg-gray-300/50"
                  }`}
                >
                  {shortenEthAddress(address)}
                </h2>

                <DropDownBox
                  isDropDownOpen={isDropDownOpen}
                  setIsDropDownOpen={setIsDropDownOpen}
                >
                  <h1
                    className="flex gap-x-2 items-center cursor-pointer"
                    onClick={handleCopyClick}
                  >
                    Copy Address
                    <span className="text-xl">
                      <IoCopyOutline></IoCopyOutline>
                    </span>
                  </h1>
                  <Link
                    href="/transaction"
                    className="flex gap-x-2 items-center cursor-pointer"
                  >
                    Perform Trs
                    <span className="text-xl mr-auto">
                      <GrTransaction></GrTransaction>
                    </span>
                  </Link>
                  <h1
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(logOutUser());
                      disconnect();
                      setIsDropDownOpen(false);
                    }}
                  >
                    Disconnect Wallet
                  </h1>
                </DropDownBox>
              </div>

              <div
                className="p-2  text-white text-3xl  relative rounded-full "
                onClick={() => dispatch(metamaskBoxOpenHandlar())}
              >
                <LuUserCircle className="cursor-pointer object-cover hover:rotate-[15deg] hover:scale-[2] duration-200"></LuUserCircle>
              </div>
            </div>
          ) : (
            // here i will used the web3Model button to show the box having differents wallets
            <span>
              {/* <w3m-button /> */}
              <button
                className="text-white bg-blue-700 px-5 py-2 rounded-full"
                onClick={() => setIsMetaMaskBoxOpen(true)}
              >
                Connect
              </button>
            </span>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
