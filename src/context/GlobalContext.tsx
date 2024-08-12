"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null);

type GlobalContextProviderProp = {
  children: React.ReactNode;
};

export default function GlobalContextProvider({
  children,
}: GlobalContextProviderProp): React.ReactElement {
  const [stateMenu, setStateMenu] = useState<string>("Home");
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{ stateMenu, showMenuMobile, setStateMenu, setShowMenuMobile }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
