"use client";

import { ReactNode } from "react";
import { RxArrowRight } from "react-icons/rx";
import Mounted from "~/components/mounted";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <Mounted>
      <button className="hover:bg-gray/20 text-md text-gray-800 hover:text-gray-600 flex max-w-fit shrink-0 animate-fade justify-center gap-1 rounded-full bg-btn px-12 py-4 transition-transform duration-200 hover:scale-105">
        {children}
        <RxArrowRight size={24} className="" />
      </button>
    </Mounted>
  );
}
