"use client";
import AOS from "aos";

import { useEffect } from "react";
import Lenis from "lenis";
export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      // once: true,
      // disable: 'phone',
      duration: 400,
      easing: "ease-out-sine",
    });
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return children;
}
