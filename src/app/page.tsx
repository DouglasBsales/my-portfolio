"use client";

import { Header } from "@/components//Home/Header";
import { EnvieUmaMensagem } from "@/components/EnvieUmaMensagem/EnvieUmaMensagem";
import { Principal } from "@/components/Home/Principal";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Servicos } from "@/components/Serviços/Servicos";
import { SobreMim } from "@/components/SobreMim/SobreMin";
import { TecnologiasUtilizadas } from "@/components/Tecnologias/TecnologiasUtilizadas";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full flex justify-center fixed top-0 z-20 shadow-md bg-white">
        <div className="max-w-[1440px] w-full z-20">
          <Header />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="max-w-[1440px] w-full  flex flex-col pt-[100px]">
          <Principal />
          <SobreMim />
        </div>
        <TecnologiasUtilizadas />
        <div className="max-w-[1440px] w-full  flex flex-col pt-[100px]">
          <Portfolio />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[37px] h-[37px] flex justify-center items-center border-4 border-blackPrimary rounded-full ">
            <div className="w-[5px] h-[5px] bg-blackPrimary rounded-full"></div>
          </div>
        </div>
        <Servicos />
        <div className="max-w-[1440px] w-full flex flex-col">
        <EnvieUmaMensagem />
      </div>
      </div>
    </div>
  );
}
