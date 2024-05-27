

import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import Navbar from "./Navbar";

export const metadata :Metadata = {
  
    title: {
        default:"Login and Register",
        template:"%s | NextJS"
    }

};

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <Navbar/>
  {children}</>;
}
