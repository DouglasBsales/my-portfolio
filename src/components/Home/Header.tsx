import { GlobalContext } from "@/context/GlobalContext";
import { Mail } from "lucide-react";
import { useContext } from "react";

export const Header = () => {
  const { stateMenu } = useContext(GlobalContext);

  return (
    <div className="w-full h-[123px] flex items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4 px-">
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
          <p className="text-blackPrimary font-regular text-[40px]">
            Douglas Sales
          </p>
        </div>
        <div className="flex h-full pt-5 items-center gap-[28px]">
          <p className={`cursor-pointer hover:text-blackPrimary ${stateMenu === "Home" ? "text-blackPrimary border-b border-blackPrimary pb-4 " : "text-blackSecondary pb-4"}`}>Home</p>
          <p className={`cursor-pointer hover:text-blackPrimary ${stateMenu === "Sobre mim" ? "text-blackprimary border-b border-blackPrimary pb-4 " : "text-blackSecondary pb-4 "}`}>Sobre mim</p>
          <p className={`cursor-pointer hover:text-blackPrimary ${stateMenu === "Portfolio" ? "text-blackprimary border-b border-blackPrimary pb-4 " : "text-blackSecondary pb-4"}`}>Portfólio</p>
          <p className={`cursor-pointer hover:text-blackPrimary ${stateMenu === "Serviços" ? "text-blackprimary border-b border-blackPrimary pb-4 " : "text-blackSecondary pb-4"}`}>Serviços</p>
          <button className="w-[200px] flex items-center justify-center gap-[10px] text-blackSecondary border-2 border-blackSecondary rounded-md mb-4 hover:bg-blackPrimary
           hover:border-blackPrimary hover:text-[#fff]">
            <p className="py-[10px]">Entre em contato</p>
            <Mail/>
          </button>
        </div>
      </div>
    </div>
  );
};
