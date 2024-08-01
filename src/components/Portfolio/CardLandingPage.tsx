import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScreenShare } from "lucide-react";
import Link from "next/link";
import { LineCenter } from "./LineCenter";
import Image from "next/image";

export const CardLandingPage = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[50%] h-[670px] flex items-center">
        <div className="w-[473px]">
          <div>
              <p className="text-5xl text-blackPrimary font-semibold">
              Landing page
              </p>
              <p className="text-4xl text-blackPrimary font-semibold">Ballecoffe</p>
          </div>
          <p className="pt-[33px] text-xl text-blackPrimary">
          BalleCoffe é uma landing page criada para uma cafeteria boutique. Com um design moderno, destaca os produtos artesanais, como cafés especiais. A página possui modo noturno e modo diurno e depoimentos de clientes.
          </p>
          <div className="flex gap-5 pt-[41px]">
            <Link
              href="'"
              target="_blank"
              className="w-[269px] h-[60px] flex items-center justify-center gap-[10px] text-blackPrimary bg-transparent border border-blackPrimary rounded-md
              hover:text-[#fff] hover:bg-blackPrimary
              "
            >
              <p className="text-2xl">Repositório</p>
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </Link>
            <Link
              href="https://douglasbsales.github.io/Ballecofe/index.html"
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
        <div className="pt-[87px]">
            <div className="w-full h-[627px] flex flex-col justify-center gap-8">
              <div className="pl-[61px]">
                <Image
                  src="/BALLECOFFE-1.png"
                  alt="mockup-iphone"
                  width={427}
                  height={247}
                />
              </div>
              <div className="pl-[181px]">
                <Image
                  src="/BALLECOFFE-2.png"
                  alt="mockup-iphone"
                  width={427}
                  height={237}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
