import { MenuDesktop } from "./MenuDesktop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export const Header = () => {

  const { setShowMenuMobile } = useContext(GlobalContext)

  return (
    <div className="w-full h-[123px] flex items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-command size-[60px] text-blackPrimary"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <p className="text-blackPrimary font-regular text-xl md: text-[40px]">
            Douglas Sales
          </p>
        </div>
        <MenuDesktop />
        <div className="block lg:hidden">
          <button onClick={()=> setShowMenuMobile(true)}>
            <FontAwesomeIcon icon={faBars} className="size-8 text-blackPrimary" />
          </button>
        </div>
      </div>
    </div>
  );
};
