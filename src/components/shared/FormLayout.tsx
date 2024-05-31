import React from "react";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="fixed z-[20] bg-[#F5F7FB] top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className="bg-white shadow-sm shadow-black/10 w-max rounded-lg p-5 items-start flex flex-col gap-y-2">
        {children}
      </div>
    </section>
  );
}
