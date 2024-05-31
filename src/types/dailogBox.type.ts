import { IProduct } from "./ProductList.type";

export type TDialogBoxState = {
  dialogModelBox: boolean;
};

export interface IDialogBoxProps {
  handleSave: (event: React.FormEvent<HTMLFormElement>) => void;
  setDialogBoxFormData: React.Dispatch<
    React.SetStateAction<Partial<IProduct> | null>
  >;
  dialogBoxFormData: Partial<IProduct> | null;
}
