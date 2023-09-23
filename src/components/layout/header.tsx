"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "../ui/modal";
import Mounted from "../mounted";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return pathname.includes("/admin") ? null : (
    <Mounted>
      <Modal isOpen={menuOpen} setIsOpen={setMenuOpen} title="Menu">
        <div className="bg-light-gray/50 mx-auto flex w-48 flex-col gap-4">
          <Links setMenuOpen={setMenuOpen} />
        </div>
      </Modal>
      <header className="fixed z-10 flex w-full animate-fade justify-between px-4 py-1 pt-4 text-center lg:px-8">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="items-center">
            <a href={`https://${process.env.NEXT_PUBLIC_URL}`}>
              <span className="hover:text-accent bg-light-gray/50 flex w-full gap-2 rounded-md px-2 py-1 pb-3 pl-6 pr-7 pt-2.5 text-2xl text-slate-800 backdrop-blur-md transition-colors">
                <span className="mb-0">{process.env.NEXT_PUBLIC_URL}</span>
              </span>
            </a>
          </div>
          <div className="bg-light-gray/50 flex shrink-0 items-center gap-2 rounded-md px-4 py-2 backdrop-blur-md">
            {pathname != "/" && (
              <Link
                href={"/"}
                className="animate-in fade-in md:slide-in-from-right-10 duration-300"
              >
                <div className="py-1 pr-2 text-2xl text-black">
                  <BiArrowBack
                    size={30}
                    className="hover:text-accent transition-colors duration-300"
                  />
                </div>
              </Link>
            )}

            <div className="hidden shrink-0 items-center gap-6  py-1 md:flex">
              <Links setMenuOpen={setMenuOpen} />
            </div>
            <div className="flex md:hidden">
              <button className="header-link" onClick={() => setMenuOpen(true)}>
                <RxHamburgerMenu
                  size={30}
                  className="hover:text-accent transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </Mounted>
  );
}

function Links({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <HeaderLink text="About" link="/about" setMenuOpen={setMenuOpen} />
      <HeaderLink text="Contact" link="/contact" setMenuOpen={setMenuOpen} />
      <HeaderLink text="Resume" link="/resume" setMenuOpen={setMenuOpen} />
    </>
  );
}

function HeaderLink({
  text,
  link,
  setMenuOpen,
}: {
  text: string;
  link: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Link href={link}>
      <div
        className="hover:text-accent flex w-full cursor-pointer gap-2 rounded-full px-2 text-2xl text-black transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        {text}
      </div>
    </Link>
  );
}
