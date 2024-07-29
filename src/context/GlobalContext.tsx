"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null)

type GlobalContextProviderProp = {
    children: React.ReactNode
}

export default function GlobalContextProvider({ children }: GlobalContextProviderProp): React.ReactElement {


    const [stateMenu, setStateMenu] = useState<string>("Home")


    return (
        <GlobalContext.Provider value={{stateMenu}}>
            {children}
        </GlobalContext.Provider>
    );
}
