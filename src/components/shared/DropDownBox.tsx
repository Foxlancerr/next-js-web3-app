import { GlobalContext, IGlobalState } from "@/context/GlobalContext";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
} from "react";

interface IDropDownProps {
  children: React.ReactNode;
  isDropDownOpen: Boolean;
  setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
}
const DropDownBox: React.FC<IDropDownProps> = ({
  children,
  isDropDownOpen,
  setIsDropDownOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false);
      }
    };

    if (isDropDownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownOpen]);

  return (
    isDropDownOpen && (
      <div
        ref={dropdownRef}
        className=" text-sm flex gap-y-2 flex-col absolute top-6 right-0 py-2 px-3 rounded-lg w-max bg-slate-100"
      >
        {children}
      </div>
    )
  );
};

export default DropDownBox;
