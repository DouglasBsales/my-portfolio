import { GlobalContext } from "@/context/GlobalContext";
import {
  faAddressCard,
  faFolderOpen,
  faHouse,
  faLaptop,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";

export const MenuMobile = () => {
  const { showMenuMobile, setShowMenuMobile } = useContext(GlobalContext);

  const [page, setPage] = useState<string>("Home");

  return (
    <div
      className={`${
        showMenuMobile ? "w-full " : "w-0"
      } h-screen fixed top-0 right-0 bg-white flex flex-col overflow-x-hidden z-30 transition-all duration-500 ease-in-out`}
    >
      <div className="h-[123px] flex items-center px-5 shadow-md">
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
        </div>
        <div>
          <button onClick={() => setShowMenuMobile(false)}>
            <FontAwesomeIcon
              icon={faXmark}
              className="size-8 text-blackPrimary"
            />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 pt-8">
        <Link
          href="#home"
          className={`flex items-center gap-5 px-5 py-3 ${
            page === "Home"
              ? "text-white bg-blackPrimary"
              : "text-blackPrimary bg-transparent"
          }`}
          onClick={() => {
            setPage("Home");
            setShowMenuMobile(false);
          }}
        >
          <FontAwesomeIcon icon={faHouse} className="size-7" />
          <p className="text-lg">Home</p>
        </Link>
        <Link
          href="#sobremim"
          className={`flex items-center gap-5 px-5 py-3 ${
            page === "Sobre mim"
              ? "text-white bg-blackPrimary"
              : "text-blackPrimary bg-transparent"
          }`}
          onClick={() => {
            setPage("Sobre mim");
            setShowMenuMobile(false);
          }}
        >
          <FontAwesomeIcon icon={faAddressCard} className="size-7" />
          <p className="text-lg">Sobre mim</p>
        </Link>
        <Link
          href="#portfolio"
          className={`flex items-center gap-5 px-5 py-3 ${
            page === "Portfolio"
              ? "text-white bg-blackPrimary"
              : "text-blackPrimary bg-transparent"
          }`}
          onClick={() => {
            setPage("Portfolio");
            setShowMenuMobile(false);
          }}
        >
          <FontAwesomeIcon icon={faFolderOpen} className="size-7" />
          <p className="text-lg">Portfólio</p>
        </Link>
        <Link
          href="#servicos"
          className={`flex items-center gap-5 px-5 py-3 ${
            page === "Servicos"
              ? "text-white bg-blackPrimary"
              : "text-blackPrimary bg-transparent"
          }`}
          onClick={() => {
            setPage("Servicos");
            setShowMenuMobile(false);
          }}
        >
          <FontAwesomeIcon icon={faLaptop} className="size-7" />
          <p className="text-lg">Serviços</p>
        </Link>
        <div className="w-full flex justify-center pt-5 px-5">
          <Link
            href="https://wa.me/5581983312158?text="
            target="_blank"
            className="w-full flex items-center justify-center gap-[10px] text-blackSecondary border-2 border-blackSecondary rounded-md  hover:bg-blackPrimary
             hover:border-blackPrimary hover:text-[#fff]"
          >
            <p className="py-3 font-medium text-lg">Entre em contato</p>
            <Mail />
          </Link>
        </div>
      </div>
    </div>
  );
};
