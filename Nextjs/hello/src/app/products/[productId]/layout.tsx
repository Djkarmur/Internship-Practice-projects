import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata = () =>{
  return{
    title:'Explore our Products'
  }
}

export default function productIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1 className="flex justify-center items-center bg-slate-600">
        featured products
      </h1>
    </>
  );
}
