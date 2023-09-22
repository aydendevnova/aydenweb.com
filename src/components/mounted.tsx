import React, { useState, useEffect, ReactNode } from "react";

function Mounted({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return !mounted ? null : <>{children}</>;
}

export default Mounted;
