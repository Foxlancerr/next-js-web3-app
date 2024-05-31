import React from "react";

interface IInputBoxProps {
  label: string;
  InputName:string;
  placeHolder: string;
  inputType: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputBox({
  label,
  inputType,
  placeHolder,
  value,
  InputName,
  onChange,
}: IInputBoxProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-sm mb-1">
        {label}
      </label>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        name={InputName}
        id={label}
        className="outline-none text-sm soutline-none border-none py-2 rounded-md px-3"
      />
    </div>
  );
}

export default InputBox;
