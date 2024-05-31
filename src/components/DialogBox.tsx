"use client";
import React from "react";
import InputBox from "./shared/InputBox";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { ModelBoxCloseHandlar } from "@/features/ModelBox/ModelBoxSlice";
import { IDialogBoxProps } from "@/types/dailogBox.type";
import FormLayout from "./shared/FormLayout";

function DialogBox({
  handleSave,
  dialogBoxFormData,
  setDialogBoxFormData,
}: IDialogBoxProps) {
  // redux
  const dispatch = useDispatch();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setDialogBoxFormData((prevState) => {
      if (!prevState) return prevState;
      const newState = {
        ...prevState,
        [name]: value,
      };
      return newState;
    });
  };


  return (
    <FormLayout>
      <div className="flex flex-col justify-center items-center h-screen w-full z-10 top-0 left-0 fixed">
        <span
          className="sm:text-4xl text-2xl cursor-pointer absolute right-5 top-5"
          onClick={() => {
            setDialogBoxFormData(null);
            dispatch(ModelBoxCloseHandlar());
          }}
        >
          <IoClose></IoClose>
        </span>

        <form
          onSubmit={handleSave}
          id="product-form"
          className="bg-slat md:py-10 bg-gray-200/30 py-3 md:px-10 px-3 rounded-lg md:w-2/5 w-[90%] flex flex-col gap-y-3 "
        >
          <InputBox
            onChange={handleInputChange}
            InputName="Product Name"
            value={dialogBoxFormData?.["Product Name"] || ""}
            inputType="text"
            label="Product Name"
            placeHolder="Edit your product name..."
          ></InputBox>
          <InputBox
            InputName="category"
            onChange={handleInputChange}
            value={dialogBoxFormData?.category || ""}
            inputType="text"
            label="category"
            placeHolder="Edit your product category..."
          ></InputBox>
          <InputBox
            InputName="price"
            onChange={handleInputChange}
            value={dialogBoxFormData?.price || ""}
            inputType="number"
            label="price"
            placeHolder="Edit your product price..."
          ></InputBox>

          <select
            name="status"
            id="status"
            onChange={handleInputChange}
            value={dialogBoxFormData?.status || ""}
            className="outline-none mt-4 text-sm soutline-none border-none py-3 rounded-md px-3"
          >
            {["pending", "complete", "close"].map((st) => {
              return (
                <option key={st} value={st} className="">
                  {st.toUpperCase()}
                </option>
              );
            })}
          </select>

          <div className="flex justify-between items-center gap-5 mt-3">
            <button
              onClick={() => {
                setDialogBoxFormData(null);
                dispatch(ModelBoxCloseHandlar());
              }}
              className="sm:text-lg text-md md:px-2 px-6 md:flex-grow rounded-full py-2  bg-red-400 text-black hover:bg-red-800 hover:text-white duration-100"
            >
              close
            </button>
            <button
              className="sm:text-lg text-md md:px-2 px-6 py-2 rounded-full md:flex-grow bg-green-400 text-black hover:bg-green-800 hover:text-white duration-10"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </FormLayout>
  );
}

export default DialogBox;
