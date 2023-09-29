"use client";
import AOS from "aos";

import { useEffect } from "react";

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
  }, []);
  return children;
}
