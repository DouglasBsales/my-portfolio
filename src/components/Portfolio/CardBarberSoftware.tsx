import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScreenShare } from "lucide-react";
import Link from "next/link";
import { LineCenter } from "./LineCenter";
import Image from "next/image";

export const CardBarberSoftware = () => {
  return (
    <div className="w-full flex flex-wrap-reverse justify-between lg:pt-0 xl:flex-row xl:pt-0 xl:flex-nowrap">
      <div className="w-full h-[670px] xl:w-[50%]">
        <div className="flex justify-center gap-3 pt-5 xl:pt-0">
          <div className="flex flex-col lg:flex-row">
            <Image
              src="/BARBER-SOFTWARE-1.png"
              alt="mockup-iphone"
              width={326}
              height={561}
            />

            <Image
              src="/BARBER-SOFTWARE-2.png"
              alt="mockup-iphone"
              width={310}
              height={561}
              className="pt-[87px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <LineCenter />
      </div>
      <div className="w-full flex justify-center  items-center lg:pt-[100px] xl:w-[50%] xl:pt-0 xl:justify-end xl:relative xl:bottom-[80px]">
        <div className="w-full sm:w-[473px]">
          <p className="text-5xl text-blackPrimary font-semibold">
            Barber-software
          </p>
          <p className="pt-[33px] text-xl text-blackPrimary">
            O barber software surgiu para ajudar barbeiros que trabalham de
            forma comissionada e necessitam da realização da sua listagem de
            serviços realizados no dia em blocos de notas e outras ferramentas
            atrasando a contabilidade e controle.
          </p>
          <div className="flex gap-5 pt-[41px]">
            <Link
              href="https://github.com/DouglasBsales/barber-software"
              target="_blank"
              className="w-[269px] py-3 flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md
              hover:text-[#fff] hover:bg-blackPrimary
              "
            >
              <p className="text-xl sm:text-2xl">Repositório</p>
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </Link>
            <Link
              href="https://barber-software.vercel.app/Home"
              target="_blank"
              className="w-[269px] flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md hover:text-[#fff] hover:bg-blackPrimary"
            >
              <p className="text-xl sm:text-2xl">Acesse</p>
              <ScreenShare size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
