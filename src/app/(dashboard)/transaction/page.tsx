"use client";
import FormLayout from "@/components/shared/FormLayout";
import { sendTransaction } from "@/utils/transaction";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

function Transaction() {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmitAmount = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const address = data.get("address");
    const amount = data.get("amount");
    sendTransaction(address as string, amount as string).then((result) => {
      alert(result);
      setLoading(false);
    });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <h1 className="text-center text-3xl">Loading...</h1>
      </div>
    );
  else
    return (
      <div className="flex h-screen w-full justify-center items-center flex-col gap-y-3">
        <form
          className="flex flex-col gap-y-3 justify-start w-[40%] mx-auto"
          onSubmit={handleSubmitAmount}
        >
          <input
            type="text"
            name="address"
            placeholder="Recipient Address"
            className="px-3 py-2 border-b-2 border-gray-300"
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount (ETH)"
            className="px-3 py-2 border-b-2 border-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-500 py-3 text-white font-bold text-2xl"
          >
            Send Amount
          </button>
        </form>

        <Link href={'/'}
        className="underline text-blue-500"
        >Go to Home Page</Link>
      </div>
    );
}

export default Transaction;
