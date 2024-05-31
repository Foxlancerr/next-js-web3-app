import React, { ReactNode } from "react";
import FormLayout from "./shared/FormLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IoClose } from "react-icons/io5";
import { metamaskBoxCloseHandlar } from "@/features/MetaMaskBox/MetaMaskBoxSlice";

function UserDetailBox() {
  const dispatch = useDispatch();
  const logUserDetails = useSelector(
    (state: RootState) => state.userReducer.userData
  );

  return (
    <FormLayout>
      <div className="flex flex-col gap-y-2">
        <span
          onClick={() => {
            dispatch(metamaskBoxCloseHandlar());
          }}
          className="sm:text-4xl text-2xl cursor-pointer absolute right-5 top-5"
        >
          <IoClose></IoClose>
        </span>
        <h1 className="text-2xl font-bold text-blue-800 text-center">
          Details
        </h1>
        <hr />

        {logUserDetails &&
          Object.entries(logUserDetails)?.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-col flex-row gap-x-2 sm:items-start items-center"
            >
              <h4 className="text-xl text-black/70 font-semibold ">
                {item[0].split("")[0].toUpperCase() + item[0].slice(1)}:
              </h4>
              <h1 className="text-sm text-gray-400">{item[1] as ReactNode } {item[0] == 'balance' && 'ETH'} </h1>
            </div>
          ))}
        
      </div>
    </FormLayout>
  );
}

export default UserDetailBox;
