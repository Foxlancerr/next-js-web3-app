"use client";
import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
export interface IGlobalState {
  isDropDownOpen: Boolean;
  setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
  isCopied: boolean;
  setIsCopied: Dispatch<SetStateAction<boolean>>;
  isMetaMaskBoxOpen: boolean;
  setIsMetaMaskBoxOpen: Dispatch<SetStateAction<boolean>>;
  selectedBoxId: number | null;
  setSelectedBoxId: Dispatch<SetStateAction<number | null>>;
  isSmartChainBoxOpen: Boolean;
  setIsSmartChainBoxOpen: Dispatch<SetStateAction<boolean>>;
}
export const GlobalContext = createContext<IGlobalState | undefined>(undefined);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [selectedBoxId, setSelectedBoxId] = useState<null | number>(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isSmartChainBoxOpen, setIsSmartChainBoxOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMetaMaskBoxOpen, setIsMetaMaskBoxOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isMetaMaskBoxOpen,
        setIsMetaMaskBoxOpen,
        isDropDownOpen,
        setIsDropDownOpen,
        isCopied,
        setIsCopied,
        selectedBoxId,
        setSelectedBoxId,
        isSmartChainBoxOpen,
        setIsSmartChainBoxOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
