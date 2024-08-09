import Image from "next/image";

export const TecnologiasUtilizadas = () => {
  return (
    <div className="w-full pt-[50px]">
      <div className=" w-full py-8 flex justify-center bg-[#67B1B826] px-5 ">
        <div className="max-w-[1440px] w-full flex justify-between flex-wrap xl:flex-nowrap">
          <div className="w-full">
            <div className="pt-[20px] xl:pt-[76px]">
              <p className="text-[50px] lg:text-[70px] font-semibold text-blackPrimary">
                Tecnologias
              </p>
              <p className="text-[50px] lg:text-[70px] font-semibold text-blackPrimary relative bottom-[30px] lg:bottom-[40px]">
                Utilizadas
              </p>
            </div>
            <p className=" text-blackPrimary text-xl relative bottom-5">
              Em meus projetos, utilizo as melhores tecnologias e práticas para
              garantir soluções robustas e inovadoras. Foco no desempenho,
              usabilidade e práticas ágeis, assegurando alta qualidade e
              excelente experiência do usuário.
            </p>
          </div>
          <div className="w-full flex items-center">
            <div className="w-full flex gap-[47px] flex-wrap justify-center pt-[70px] xl:justify-end xl:pt-0">
              <div className="flex justify-center flex-wrap sm:flex-col gap-[40px] ">
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/react.png" alt="" width={89} height={74} />
                </div>
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/html.png" alt="" width={73} height={73} />
                </div>
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/javaScript.png" alt="" width={84} height={84} />
                </div>
              </div>
              <div className="flex justify-center flex-wrap sm:flex-col  gap-[54px]">
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/androidStudio.png" alt="" width={71} height={71} className="py-[5px] px-[5px] bg-[#67B1B826] rounded-full"/>
                </div>
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/NEXT.png" alt="" width={73} height={73} />
                </div>
              </div>
              <div className="flex justify-center flex-wrap sm:flex-col  gap-[40px]">
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/TailwindCSS.png" alt="" width={83} height={83} />
                </div>
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/VScode.png" alt="" width={75} height={75}  className="py-[3px] px-[3px] bg-[#67B1B826] rounded-full"/>
                </div>
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/IntelliJ.png" alt="" width={72} height={72} />
                </div>
              </div>
              <div className="flex justify-center sm:flex-col  gap-[54px] ">
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/CSS.png" alt="" width={73} height={73} />
                </div>
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/TypeScript.png" alt="" width={77} height={77} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
