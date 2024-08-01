import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScreenShare } from "lucide-react";
import Link from "next/link";
import { LineCenter } from "./LineCenter";
import Image from "next/image";

export const CardBarberSoftware = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[50%] h-[670px]">
        <div className="flex justify-center gap-3">
          <div>
            <Image
              src="/BARBER-SOFTWARE-1.png"
              alt="mockup-iphone"
              width={326}
              height={561}
            />
          </div>
          <div className="pt-[87px]">
            <Image
              src="/BARBER-SOFTWARE-2.png"
              alt="mockup-iphone"
              width={310}
              height={561}
            />
          </div>
        </div>
      </div>
      <LineCenter />
      <div className="w-[50%] h-[670px] flex justify-center items-center">
        <div className="w-[473px]">
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
              className="w-[269px] h-[60px] flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md
              hover:text-[#fff] hover:bg-blackPrimary
              "
            >
              <p className="text-2xl">Repositório</p>
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </Link>
            <Link
              href="https://barber-software.vercel.app/Home"
              target="_blank"
              className="w-[269px] h-[60px] flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md hover:text-[#fff] hover:bg-blackPrimary"
            >
              <p className="text-2xl">Acesse</p>
              <ScreenShare size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
