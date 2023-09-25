import React, { useState, useEffect } from "react";
import { type ReactNode } from "react";

function Mounted({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return !mounted ? null : <>{children}</>;
}

export default Mounted;
