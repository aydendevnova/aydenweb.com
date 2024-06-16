"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
export default function Button({
  type = "button",
  styleType = "normal",
  color = "accent",
  href,
  external,
  className,
  onClick,
  children,
}: {
  type?: "button" | "link";
  styleType?: "normal" | "normal2";
  color?: "accent" | "secondary";
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  function getColor() {
    if (color === "accent") {
      return "bg-accent";
    } else if (color === "secondary") {
      return "bg-light-gray";
    }
  }
  function getStyle() {
    if (styleType === "normal") {
      return `text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-xl px-6 py-4 transition-transform duration-200 hover:scale-105 shadow-lg ${getColor()} ${className}`;
    } else if (styleType === "normal2") {
      return `text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-xl px-8 py-3 transition-transform duration-200 hover:scale-105 shadow-md ${getColor()} ${className}`;
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
      <p className="font-semibold">{children}</p>
      {external ? <FiArrowUpRight size={24} /> : <FiArrowRight size={24} />}
    </Link>
  );
}
