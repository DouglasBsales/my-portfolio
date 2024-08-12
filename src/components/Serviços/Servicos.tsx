export const Servicos = () => {
  return (
    <div className="w-full pt-[700px] xl:pt-[70px]" >
      <div className=" w-full xl:h-[546px] flex justify-center bg-[#67B1B826] px-5 pt-14 pb-14 xl:pb-0" id="servicos">
        <div className="max-w-[1440px] w-full flex flex-col pt-[50px]">
          <p className="text-[70px] text-blackPrimary font-semibold ">
            Serviços
          </p>
          <div className="w-full pt-[78px] flex flex-wrap gap-[60px] justify-center">
            <div className="w-[283px] h-[237px] bg-[#fff] rounded-[10px] py-5 px-5">
              <div className="w-[75px] h-[52px] flex justify-end gap-[2px] py-1 px-1 rounded-md border border-blackPrimary">
                <div className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full"></div>
                <div className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full"></div>
                <div className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full"></div>
              </div>
              <p className="pt-3 text-2xl text-blackPrimary font-semibold">
                Web designer
              </p>
              <p className="pt-3 text-blackPrimary text-sm">
                layouts personalizados segmento web. focando em design atraente
                e experiência do usuário.
              </p>
            </div>
            <div className="w-[283px] h-[237px] bg-[#fff] rounded-[10px]">
              <div className="w-[283px] h-[237px] bg-[#fff] rounded-[10px] py-5 px-5">
                <div className="w-[28px] h-[52px] flex justify-center items-end gap-[2px] py-1 px-1 rounded-md border border-blackPrimary">
                  <div className="w-[12px] h-[2px] bg-[#D9D9D9] rounded-full"></div>
                </div>
                <p className="pt-3 text-2xl text-blackPrimary font-semibold">
                  Mobile designer
                </p>
                <p className="pt-3 text-blackPrimary text-sm">
                  layouts personalizados segmento mobile. focando em design
                  atraente e experiência do usuário.
                </p>
              </div>
            </div>
            <div className="w-[283px] h-[237px] bg-[#fff] rounded-[10px]">
              <div className="w-[283px] h-[237px] bg-[#fff] rounded-[10px]">
                <div className="w-[283px] h-[237px] bg-[#fff] rounded-[10px] py-5 px-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="47"
                      height="51"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-settings text-blackPrimary"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="pt-3 text-2xl text-blackPrimary font-semibold">
                      Desenvolvimento
                    </p>
                    <p className="pt-3 text-blackPrimary text-sm">
                      Sistemas em geral, landing pages, web-apps e aplicativos.O
                      layout do desenvolvimento está incluso no serviço.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
