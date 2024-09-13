"use client";
import useOnScreen from "~/hooks/useOnScreen";
import { type ReactNode, useRef } from "react";

export default function HighlightText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, -100);

  return (
    <span className={className || ""}>
      <span
        ref={ref}
        className={`text-highlight ${onScreen && "text-highlight-active"}`}
      >
        {" "}
        <b>{children}</b>
      </span>{" "}
    </span>
  );
}
