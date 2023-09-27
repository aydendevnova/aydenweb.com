"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
export default function Button({
  type = "button",
  styleType = "normal",
  href,
  external,
  className,
  onClick,
  children,
}: {
  type?: "button" | "link";
  styleType?: "normal" | "normal2";
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  function getStyle() {
    if (styleType === "normal") {
      return `text-md text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-full bg-accent px-12 py-4 transition-transform duration-200 hover:scale-105 shadow-lg ${className}`;
    } else if (styleType === "normal2") {
      return `text-md text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-xl bg-light-gray px-8 py-3 transition-transform duration-200 hover:scale-105 shadow-md ${className}`;
    }
  }
  return type === "button" ? (
    <button className={getStyle()} onClick={onClick}>
      <p>{children}</p>

      <FiArrowRight size={24} className="" />
    </button>
  ) : (
    <Link
      className={getStyle()}
      href={href ?? "/"}
      target={external ? "_blank" : ""}
      rel={external ? "noreferrer noopener" : ""}
    >
      <p>{children}</p>
      {external ? <FiArrowUpRight size={22} /> : <FiArrowRight size={22} />}
    </Link>
  );
}
