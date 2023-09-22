"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { RxArrowRight } from "react-icons/rx";
import Mounted from "~/components/mounted";

export default function Button({
  type = "button",
  href,
  onClick,
  children,
}: {
  type?: "button" | "link";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return type === "button" ? (
    <button
      className="hover:bg-gray/20 text-md text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-full bg-btn px-12 py-4 transition-transform duration-200 hover:scale-105"
      onClick={onClick}
    >
      {children}
      <RxArrowRight size={24} className="" />
    </button>
  ) : (
    <Link
      className="hover:bg-gray/20 text-md text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-full bg-btn px-12 py-4 transition-transform duration-200 hover:scale-105"
      href={href || "/"}
    >
      {children}
      <RxArrowRight size={24} className="" />
    </Link>
  );
}
