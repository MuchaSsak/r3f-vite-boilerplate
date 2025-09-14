import React from "react";

import DebugUI from "@/components/layout/DebugUI";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <DebugUI />

      {children}
    </>
  );
}

export default Layout;
