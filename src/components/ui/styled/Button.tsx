"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { RxArrowRight } from "react-icons/rx";

export default function Button({
  type = "button",
  href,
  className,
  onClick,
  children,
}: {
  type?: "button" | "link";
  href?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return type === "button" ? (
    <button
      className={`hover:bg-gray/20 text-md text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-full bg-accent px-12 py-4 transition-transform duration-200 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <p>{children}</p>

      <RxArrowRight size={24} className="" />
    </button>
  ) : (
    <Link
      className={`hover:bg-gray/20 text-md text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-full bg-accent px-12 py-4 no-underline transition-transform duration-200 hover:scale-105 ${className}`}
      href={href ?? "/"}
    >
      <p>{children}</p>
      <RxArrowRight size={24} className="" />
    </Link>
  );
}
