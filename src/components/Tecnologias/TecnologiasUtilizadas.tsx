import Image from "next/image";

export const TecnologiasUtilizadas = () => {
  return (
    <div className="w-full pt-[50px]">
      <div className=" w-full h-[482px] flex justify-center bg-[#67B1B826] ">
        <div className="max-w-[1440px] w-full flex justify-between">
          <div className="w-[50%]">
            <div className="pt-[76px]">
              <p className="text-[70px] font-semibold text-blackPrimary">
                Tecnologias
              </p>
              <p className="text-[70px] font-semibold text-blackPrimary relative bottom-[40px]">
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
          <div className="w-[50%] flex justify-end items-center">
            <div className="w-[567px] h-[387px] flex gap-[47px]">
              <div className="flex flex-col gap-[40px]">
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
              <div className="flex flex-col justify-center gap-[54px]">
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/androidStudio.png" alt="" width={71} height={71} className="py-[5px] px-[5px] bg-[#67B1B826] rounded-full"/>
                </div>
                <div className="w-[105px] h-[102px] flex justify-center items-center bg-[#fff] rounded-md shadow-md drop-shadow-xl">
                  <Image src="/NEXT.png" alt="" width={73} height={73} />
                </div>
              </div>
              <div className="flex flex-col gap-[40px]">
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
              <div className="flex flex-col justify-center gap-[54px]">
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
