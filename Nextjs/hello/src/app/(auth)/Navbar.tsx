"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const navLinks = [
        {
          name: "Login",
          href: "/login",
        },
        {
          name: "register",
          href: "/register",
        },
        {
          name: "Forget Password",
          href: "/forget-password",
        },
      ];
      const pathName = usePathname();
  return (
    <div>
      {
    navLinks.map((link)=>{
        const isActive = pathName.startsWith(link.href)
        return(
            <Link href={link.href} key={link.name} className={`m-[50px]  ${isActive ? `font-bold text-red-400 bg-gray-300 p-2 rounded-md ` : `text-white-500` } `}>{link.name}</Link>
        )
    })
  }

    </div>
  )
}

export default Navbar
