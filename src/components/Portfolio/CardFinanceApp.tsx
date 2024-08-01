import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScreenShare } from "lucide-react";
import Link from "next/link";
import { LineCenter } from "./LineCenter";
import Image from "next/image";

export const CardFincanceApp = () => {
  return (
    <div className="w-full flex justify-between pt-[72px]">
      <div className="w-[50%] h-[670px] flex items-center">
        <div className="w-[473px]">
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
              className="w-[269px] h-[60px] flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md
              hover:text-[#fff] hover:bg-blackPrimary
              "
            >
              <p className="text-2xl">Repositório</p>
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </Link>
            <Link
              href="https://finance-app-nu-self.vercel.app/Login"
              target="_blank"
              className="w-[269px] h-[60px] flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md hover:text-[#fff] hover:bg-blackPrimary"
            >
              <p className="text-2xl">Acesse</p>
              <ScreenShare size={22} />
            </Link>
          </div>
        </div>
      </div>
      <LineCenter />
      <div className="w-[50%] h-[670px]">
        <div className="flex justify-center gap-3">
          <div>
            <Image
              src="/FINANCE-APP IMG MOCKUP.png"
              alt="mockup-iphone"
              width={326}
              height={561}
            />
          </div>
          <div className="pt-[87px]">
            <Image
              src="/FINANCE-APP-IMG-MOCKUP.png"
              alt="mockup-iphone"
              width={310}
              height={561}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
