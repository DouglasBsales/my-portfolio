import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScreenShare } from "lucide-react";
import Link from "next/link";
import { LineCenter } from "./LineCenter";
import Image from "next/image";

export const CardFincanceApp = () => {
  return (
    <div className="w-full flex flex-col justify-between pt-[72px] xl:flex-row">
      <div className="w-full xl:h-[670px] flex justify-center items-center xl:w-[50%] xl:justify-start">
        <div className="w-full sm:w-[473px] ">
          <p className="text-5xl text-blackPrimary font-semibold">
            Finance-app
          </p>
          <p className="pt-[33px] text-xl text-blackPrimary">
            O finance-app atualmente está sendo desenvolvido para sanar a
            dificuldade que todas as pessoas tem hoje em dia que é de controlar
            suas contas e gerenciamento de planos envolvendo investimento
            relacionado a dinheiro.
          </p>
          <div className="flex gap-5 pt-[41px]">
            <Link
              href="https://github.com/DouglasBsales/finance-app"
              target="_blank"
              className="w-[269px] flex py-3 px-3 items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md
              hover:text-[#fff] hover:bg-blackPrimary
              "
            >
              <p className="text-xl sm:text-2xl">Repositório</p>
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </Link>
            <Link
              href="https://finance-app-nu-self.vercel.app/Login"
              target="_blank"
              className="w-[269px] flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md hover:text-[#fff] hover:bg-blackPrimary"
            >
              <p className="text-xl sm:text-2xl">Acesse</p>
              <ScreenShare size={22} />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <LineCenter />
      </div>
      <div className="w-full h-[670px] xl:w-[50%]">
        <div className="flex justify-center gap-3 pt-5 xl:pt-0">
          <div className="flex flex-col lg:flex-row">
            <Image
              src="/FINANCE-APP IMG MOCKUP.png"
              alt="mockup-iphone"
              width={326}
              height={561}
            />
            <Image
              src="/FINANCE-APP-IMG-MOCKUP.png"
              alt="mockup-iphone"
              width={310}
              height={561}
              className="pt-[87px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
