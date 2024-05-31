import { IProduct } from "@/types/ProductList.type";

export async function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

export function calculateTotalAmount(productList:IProduct[]) {
  const calculateTotalsPrice: number = productList.reduce(
    (acc: number, current: IProduct) => {
      return acc + current.price;
    },
    0
  );
  return calculateTotalsPrice;
}
