// "use client";
import { deleteProductFromList } from "@/features/TodoListProduct/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import type { IProduct } from "@/types/ProductList.type";
import { useContext} from "react";


import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { ModelBoxOpenHandlar } from "@/features/ModelBox/ModelBoxSlice";
import { calculateTotalAmount } from "@/utils/clipCopyText";
import { GlobalContext, IGlobalState } from "@/context/GlobalContext";
import { useAccount } from "wagmi";

interface ITableProps {
  setDialogBoxFormData: React.Dispatch<
    React.SetStateAction<Partial<IProduct> | null>
  >;
}
function Table({ setDialogBoxFormData }: ITableProps) {
  const {isConnected} = useAccount()
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector(
    (state: RootState) => state.productReducer.productsListArr
  );

  const isAuthentic = useSelector(
    (state: RootState) => state.userReducer.isLogIn
  );
  const { selectedBoxId, setSelectedBoxId } = useContext(
    GlobalContext
  ) as IGlobalState;

  function onEdit(id: number) {
    dispatch(ModelBoxOpenHandlar());
    setDialogBoxFormData(productList?.[id]);
    setSelectedBoxId(id);
  }

  function onDelete(id: number) {
    dispatch(deleteProductFromList(id));
    console.log(selectedBoxId);
  }

  return (
    <div className="w-full flex flex-col relative mt-12">
      <div className="grid md:grid-cols-6 grid-cols-5 rounded-sm md:justify-between justify-start items-center md:py-3 md:px-5 py-2 px-2 bg-gray-700 text-white md:text-lg text-[12px]">
        <h1 className="hidden md:block">#</h1>
        <h1>Product Name</h1>
        <h1>Category</h1>
        <h1>Price</h1>
        <h1 className="mx-auto">Status</h1>
        <div className="flex gap-3 ml-auto">
          <h1>Action</h1>
        </div>
      </div>

      {/* tbody */}
      <div className="w-full">
        {productList.map((product: IProduct, index: number) => {
          return (
            <div
              key={product?.id}
              className="border-b-2 text-[10px] md:text-sm  border-black/5 last:border-none md:py-3 py-1  md:px-5 px-2 grid grid-cols-6 text-sm gap-y-3 justify-end items-center"
            >
              <h4 className="hidden md:block">{product?.id}</h4>
              <h4>{product["Product Name"]}</h4>
              <h4 className="md:m-0 mx-auto">{product?.category}</h4>
              <h4 className="md:m-0 mx-auto">{product?.price}</h4>
              <h4
                className={` rounded-full mx-auto text-center py-2 px-3 
                      ${product?.status === "complete" && "bg-green-300"}
                      ${product?.status === "pending" && "bg-orange-300"}
                      ${
                        product?.status === "close" && "bg-red-200 line-through"
                      }
                      `}
              >
                {product?.status}
              </h4>
              <div className="flex md:gap-y-2 gap-1 ml-auto justify-end">
                <h4
                  className="w-max bg-green-400 text-black rounded-full p-2 text-lg hover:bg-green-800 cursor-pointer duration-100 transition-all hover:text-white"
                  onClick={() => {
                    if (isConnected) {
                      onEdit(index);
                    } else {
                      alert("connect your metamask to perform this operation");
                    }
                  }}
                >
                  <MdEdit></MdEdit>
                </h4>
                <h4
                  className="w-max bg-red-400 text-black rounded-full p-2 text-lg hover:bg-red-800 cursor-pointer duration-100 transition-all hover:text-white"
                  onClick={() => {
                    if (isConnected) {
                      onDelete(product.id);
                    } else {
                      alert("connect your metamask to perform this operation");
                    }
                  }}
                >
                  <MdDeleteOutline></MdDeleteOutline>
                </h4>
              </div>
            </div>
          );
        })}
        <div className="flex py-3 rounded-sm items-center bg-blue-400 text-white md:px-5 px-1 justify-between text-sm">
          <h1 className="text-xl font-semibold">Total</h1>
          <h1>{calculateTotalAmount(productList)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Table;
