import { GlobalContext } from "@/context/GlobalContext";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export const Header = () => {
  const { stateMenu, setStateMenu } = useContext(GlobalContext);

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
        <div className=" h-full hidden lg:flex flex-col justify-end relative pl-2">
          <div className="flex h-full items-center gap-[28px]">
            <Link
              href="#home"
              className={`cursor-pointer hover:text-blackPrimary ${
                stateMenu === "Home"
                  ? "text-blackPrimary"
                  : "text-blackSecondary"
              }`}
              onClick={() => setStateMenu("Home")}
            >
              Home
            </Link>
            <Link
              href="#sobremim"
              className={`cursor-pointer hover:text-blackPrimary ${
                stateMenu === "Sobre mim"
                  ? "text-blackprimary "
                  : "text-blackSecondary"
              }`}
              onClick={() => setStateMenu("Sobre mim")}
            >
              Sobre mim
            </Link>
            <Link
              href="#portfolio"
              className={`cursor-pointer hover:text-blackPrimary ${
                stateMenu === "Portfolio"
                  ? "text-blackprimary"
                  : "text-blackSecondary"
              }`}
              onClick={() => setStateMenu("Portfolio")}
            >
              Portfólio
            </Link>
            <Link
              href="#servicos"
              className={`cursor-pointer hover:text-blackPrimary ${
                stateMenu === "Serviços"
                  ? "text-blackprimary"
                  : "text-blackSecondary"
              }`}
              onClick={() => setStateMenu("Serviços")}
            >
              Serviços
            </Link>
            <Link
              href="https://wa.me/5581983312158?text="
              target="_blank"
              className="w-[200px] flex items-center justify-center gap-[10px] text-blackSecondary border-2 border-blackSecondary rounded-md  hover:bg-blackPrimary
             hover:border-blackPrimary hover:text-[#fff]"
            >
              <p className="py-[10px]">Entre em contato</p>
              <Mail />
            </Link>
          </div>
          <div
            className={`absolute bottom-[-8px] border border-blackPrimary transition-all duration-300 ease-in-out ${
              stateMenu === "Home" && "w-[66px] left-0"
            } ${stateMenu === "Sobre mim" && " ml-[71px]  w-[98px]"}
              ${stateMenu === "Portfolio" && " ml-[186px] w-[78px]"}
              ${stateMenu === "Serviços" && "  ml-[280px] w-[80px]"}
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};
