"use client";
import { type Dispatch, type SetStateAction, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "../ui/modal";
import Mounted from "../mounted";
import logo from "~/assets/logo.png";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return pathname.includes("/admin") || pathname.includes("/blog") ? null : (
    <Mounted>
      <header className="fixed left-0 right-0 top-0 z-10 flex w-full animate-fade px-4 py-1 pt-4 text-center lg:px-8">
        <div className="relative w-full">
          <Logo />

          <div className="absolute left-0 right-0 top-2 flex h-16 justify-end md:justify-center">
            <div className="flex w-fit items-center rounded-[24px] bg-white px-4 py-2 shadow-lg">
              {pathname != "/" && (
                <Link
                  href={"/"}
                  className="animate-in fade-in md:slide-in-from-right-10 duration-300"
                >
                  {/* <div className="py-1 pr-2 text-xl text-black">
                    <BiArrowBack
                      size={26}
                      className="text-black transition-colors duration-300 hover:text-accent2"
                    />
                  </div> */}
                </Link>
              )}

              <div className="hidden shrink-0 items-center gap-1 py-1 md:flex">
                <Links setMenuOpen={setMenuOpen} pathname={pathname} />
              </div>
              <div className="flex md:hidden">
                <button
                  className="header-link"
                  onClick={() => setMenuOpen(true)}
                >
                  <RxHamburgerMenu
                    size={30}
                    className="transition-colors hover:text-accent"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal isOpen={menuOpen} setIsOpen={setMenuOpen} title="Navigate">
        <div className="mx-auto flex w-64 flex-col gap-4 bg-light-gray">
          <Links setMenuOpen={setMenuOpen} pathname={pathname} />
        </div>
      </Modal>
    </Mounted>
  );
}

function Links({
  setMenuOpen,
  pathname,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
}) {
  return (
    <>
      <HeaderLink
        text="Home"
        link="/"
        setMenuOpen={setMenuOpen}
        pathname={pathname}
      />

      <HeaderLink
        text="Gallery"
        link="/gallery"
        setMenuOpen={setMenuOpen}
        pathname={pathname}
      />

      <HeaderLink
        text="About"
        link="/about"
        setMenuOpen={setMenuOpen}
        pathname={pathname}
      />
      <HeaderLink
        text="Projects"
        link="/archive"
        setMenuOpen={setMenuOpen}
        pathname={pathname}
        isNew
      />

      <HeaderLink
        text="Contact"
        link="/contact"
        setMenuOpen={setMenuOpen}
        pathname={pathname}
      />
      {/* <HeaderLink
        text="Blog"
        link="/blog"
        setMenuOpen={setMenuOpen}
        isNew
        pathname={pathname}
      /> */}
      <HeaderLink
        text="Resume"
        link={"/ayden-resume.pdf"}
        external
        setMenuOpen={setMenuOpen}
        pathname={pathname}
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
  pathname,
}: {
  text: string;
  link: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  external?: boolean;
  isNew?: boolean;
  pathname: string;
}) {
  return (
    <Link
      href={link}
      target={external ? "_blank" : ""}
      passHref
      rel={external ? "noreferrer noopener" : ""}
    >
      <div
        className={`relative flex w-full cursor-pointer rounded-[12px] px-3 py-2 text-xl text-black transition-colors duration-500 hover:text-accent2 ${
          pathname === link
            ? "rounded-[12px] bg-accent text-black hover:text-light-gray "
            : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <p className="text-xl">{text}</p>
        {isNew && (
          <p className="text-gray-500 absolute -right-5 -top-3 z-10 rounded-full border border-blue-100 bg-blue-300 px-2 py-0.5 text-xs font-semibold text-gray">
            New
          </p>
        )}
      </div>
    </Link>
  );
}

function Logo() {
  return (
    <a href={`https://${process.env.NEXT_PUBLIC_URL}`}>
      <span className="relative z-50 flex w-fit items-center gap-2 rounded-md px-2 py-2 text-xl text-slate-800 backdrop-blur-md transition-colors hover:text-accent2">
        <p className="text-2xl font-bold">aydens</p>
        {/* <span className="mb-0">{process.env.NEXT_PUBLIC_URL}</span> */}
        <Image
          src={logo.src}
          alt="logo"
          width={logo.width}
          height={logo.height}
          className="h-8 w-8"
        />
      </span>
    </a>
  );
}
