"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = () => [
  { label: "Home", href: "/" },
  { label: " Companions", href: "/companions" },
  { label: "My Journey ", href: "/my-journey" },
];

const NavItems = () => {
  const pathName = usePathname();

  return (
    <nav className="flex itrems-center gap-4">
      {navItems().map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(pathName === href && "text-primary font-semibold")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
