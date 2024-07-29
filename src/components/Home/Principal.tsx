import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Principal = () => {
  return (
    <div className="w-full flex justify-between pt-[159px]">
      <div className="w-[50%]">
        <p className="font-light text-blackPrimary text-[40px]">
          Desenvolvedor
        </p>
        <div className="relative bottom-8">
          <p className="font-semibold text-blackPrimary text-[120px]">
            Front-end
          </p>
          <p className="font-semibold text-blackPrimary text-[110px] relative bottom-16">
            & Mobile
          </p>
        </div>
        <div className="relative bottom-10">
          <div className="flex gap-5">
            <button className="w-[269px] h-[60px] flex gap-[14px] justify-center items-center text-blackPrimary border border-blackSecondary rounded-md hover:bg-blackPrimary
           hover:border-blackPrimary hover:text-[#fff]">
              <p className="text-2xl font-regular">
                Sobre mim
              </p>
              <FontAwesomeIcon
                icon={faAddressBook}
                className="size-[28px]"
              />
            </button>
            <button className="w-[269px] h-[60px] flex gap-[14px] justify-center items-center text-blackPrimary border  border-blackSecondary rounded-md hover:bg-blackPrimary
           hover:border-blackPrimary hover:text-[#fff]">
              <p className="text-2xl font-regular">
                Portfólio
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-folder-open-dot"
              >
                <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                <circle cx="14" cy="15" r="1" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-5">
        <Link href="https://www.linkedin.com/in/douglas-sales-901898262/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="w-[50px] h-[50px] text-blackPrimary hover:text-[#0A66C2]" />
        </Link>
        <Link href="https://github.com/douglasbsales" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} className="w-[50px] h-[50px] text-blackPrimary hover:text-[#000]" />
        </Link>
        </div>
      </div>
      <div className="w-[50%] flex justify-end relative bottom-4">
        <Image
          src="/teste3.png"
          alt="img programador"
          width={494}
          height={494}
        />
      </div>
    </div>
  );
};
