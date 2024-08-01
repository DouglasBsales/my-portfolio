import Link from "next/link";

export const EnvieUmaMensagem = () => {
  return (
    <div className="pt-7 pb-[130px]">
      <div>
        <p className="text-[32px] text-blackPrimary font-semibold">Ficou interessado ou resta alguma dúvida?  </p>
        <p className="text-2xl text-blackPrimary">Me envie uma mensagem agora mesmo!</p>
        <div className="pt-8">
            <Link href="https://wa.me/5581983312158?text=" target="_blank" className="w-[513px] h-[97px] flex justify-center items-center bg-[#202020] rounded-[50px]">
                <p className="text-[32px] text-[#fff] font-semibold">Envie uma mensagem</p>
            </Link>
        </div>
      </div>
    </div>
  );
};
