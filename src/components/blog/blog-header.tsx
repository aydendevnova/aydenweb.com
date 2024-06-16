"use client";
import { type Dispatch, type SetStateAction, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "../ui/modal";
import Mounted from "../mounted";
import logo from "~/assets/logo.png";
import Image from "next/image";

export default function BlogHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Mounted>
      <header className="fixed top-0 z-10 flex w-full animate-fade justify-between px-4 py-1 pt-4 text-center lg:px-8">
        <div className="relative flex w-full items-center justify-between gap-4">
          <div className="items-center">
            <a href={`https://${process.env.NEXT_PUBLIC_URL}/blog`}>
              <span className="flex w-full items-center gap-4 rounded-md px-2 py-1 pb-3 pl-6 pr-7 pt-2.5 text-xl text-slate-800 backdrop-blur-md transition-colors hover:text-accent2">
                {/* <span className="mb-0">{process.env.NEXT_PUBLIC_URL}</span> */}
                <Image
                  src={logo.src}
                  alt="logo"
                  width={logo.width}
                  height={logo.height}
                  className="h-14 w-14"
                  style={{ filter: "brightness(65%)" }}
                />
                <h3>Ayden's Blog</h3>
              </span>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-md bg-white px-4 py-2 backdrop-blur-xl">
            {pathname != "/blog" && (
              <Link
                href={"/blog"}
                className="animate-in fade-in md:slide-in-from-right-10 duration-300"
              >
                <div className="py-1 pr-2 text-xl text-black">
                  <BiArrowBack
                    size={26}
                    className="text-black transition-colors duration-300 hover:text-accent2"
                  />
                </div>
              </Link>
            )}

            <div className="hidden shrink-0 items-center gap-6 py-1 md:flex">
              <Links setMenuOpen={setMenuOpen} />
            </div>
            <div className="flex md:hidden">
              <button className="header-link" onClick={() => setMenuOpen(true)}>
                <RxHamburgerMenu
                  size={30}
                  className="transition-colors hover:text-accent"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Modal isOpen={menuOpen} setIsOpen={setMenuOpen} title="Navigate">
        <div className="mx-auto flex w-64 flex-col gap-4 bg-light-gray backdrop-blur-md">
          <Links setMenuOpen={setMenuOpen} isMobile />
        </div>
      </Modal>
    </Mounted>
  );
}

function Links({
  setMenuOpen,
  isMobile,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
}) {
  return (
    <>
      {isMobile && (
        <HeaderLink text="Home" link="/blog" setMenuOpen={setMenuOpen} />
      )}
      <HeaderLink text="Blog Home" link="/blog" setMenuOpen={setMenuOpen} />

      <HeaderLink
        text="My Website"
        link={"/"}
        external
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}

function HeaderLink({
  text,
  link,
  setMenuOpen,
  external,
  isNew,
}: {
  text: string;
  link: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  external?: boolean;
  isNew?: boolean;
}) {
  return (
    <Link
      href={link}
      target={external ? "_blank" : ""}
      passHref
      rel={external ? "noreferrer noopener" : ""}
    >
      <div
        className="relative flex w-full cursor-pointer gap-2 rounded-full px-2 text-xl text-black transition-colors hover:text-accent2"
        onClick={() => setMenuOpen(false)}
      >
        <p className="text-xl">{text}</p>
        {isNew && (
          <p className="text-gray-500 absolute -right-5 -top-3 rounded-full border border-blue-100 bg-blue-300 px-2 text-xs font-bold">
            New
          </p>
        )}
      </div>
    </Link>
  );
}
