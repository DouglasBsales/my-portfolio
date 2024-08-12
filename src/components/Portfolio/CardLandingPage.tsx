import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScreenShare } from "lucide-react";
import Link from "next/link";
import { LineCenter } from "./LineCenter";
import Image from "next/image";

export const CardLandingPage = () => {
  return (
    <div className="w-full flex flex-col pt-[700px] justify-between lg:pt-[72px] xl:flex-row xl:pt-0">
      <div className="w-full xl:h-[670px] flex justify-center items-center xl:w-[50%] xl:justify-start">
        <div className="w-full sm:w-[473px]">
          <div>
            <p className="text-5xl text-blackPrimary font-semibold">
              Landing page
            </p>
            <p className="text-4xl text-blackPrimary font-semibold">
              Ballecoffe
            </p>
          </div>
          <p className="pt-[33px] text-xl text-blackPrimary">
            BalleCoffe é uma landing page criada para uma cafeteria boutique.
            Com um design moderno, destaca os produtos artesanais, como cafés
            especiais. A página possui modo noturno e modo diurno e depoimentos
            de clientes.
          </p>
          <div className="flex gap-5 pt-[41px]">
            <Link
              href="'"
              target="_blank"
              className="w-[269px] py-3 px-3 flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md
              hover:text-[#fff] hover:bg-blackPrimary
              "
            >
              <p className="text-xl sm:text-2xl">Repositório</p>
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </Link>
            <Link
              href="https://douglasbsales.github.io/Ballecofe/index.html"
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
        <div className="flex justify-center gap-3">
          <div className="w-full h-[627px] flex flex-col justify-center items-center gap-8">
            <div className="pl-0 xl:pl-[61px]">
              <Image
                src="/BALLECOFFE-1.png"
                alt="mockup-iphone"
                width={427}
                height={247}
              />

              <Image
                src="/BALLECOFFE-2.png"
                alt="mockup-iphone"
                width={600}
                height={247}
                className="w-[427px] h-[247px] pl-0 pt-3 xl:pl-[181px] xl:pt-0 xl:w-[600px] xl:h-[247px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
