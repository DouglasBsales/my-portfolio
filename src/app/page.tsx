"use client";

import { Header } from "@/components//Home/Header";
import { EnvieUmaMensagem } from "@/components/EnvieUmaMensagem/EnvieUmaMensagem";
import { MenuMobile } from "@/components/Home/MenuMobile";
import { Principal } from "@/components/Home/Principal";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Servicos } from "@/components/Serviços/Servicos";
import { SobreMim } from "@/components/SobreMim/SobreMin";
import { TecnologiasUtilizadas } from "@/components/Tecnologias/TecnologiasUtilizadas";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export default function Home() {
  const { showMenuMobile } = useContext(GlobalContext);

  return (
    <div className="w-full h-screen ">
      <div className="w-full flex justify-center fixed top-0 z-20 shadow-md bg-white">
        <div className="max-w-[1440px] w-full z-20 px-5">
          <Header />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="max-w-[1440px] w-full  flex flex-col pt-[100px] px-5">
          <Principal />
          <SobreMim />
        </div>
        <TecnologiasUtilizadas />
        <div
          className="max-w-[1440px] w-full flex flex-col pt-[130px] px-5"
          id="portfolio"
        >
          <Portfolio />
        </div>
        <div className="hidden xl:flex flex-col items-center px-5">
          <div className="w-[37px] h-[37px] flex justify-center items-center border-4 border-blackPrimary rounded-full ">
            <div className="w-[5px] h-[5px] bg-blackPrimary rounded-full"></div>
          </div>
        </div>
        <Servicos />
        <div className="max-w-[1440px] w-full flex flex-col px-5">
          <EnvieUmaMensagem />
        </div>
      </div>
      <MenuMobile />
    </div>
  );
}
