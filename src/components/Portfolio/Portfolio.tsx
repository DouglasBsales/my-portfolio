import { CardBarberSoftware } from "./CardBarberSoftware";
import { CardDeliveryApp } from "./CardDeliveryApp";
import { CardFincanceApp } from "./CardFinanceApp";
import { CardLandingPage } from "./CardLandingPage";

export const Portfolio = () => {
  return (
    <div className="w-full">
      <p className="text-[70px] text-blackPrimary font-semibold">Portfólio</p>
      <p className="text-blackPrimary ">Projetos e trabalhos realizados </p>
      <div className="flex flex-col justify-center">
        <CardFincanceApp />
        <CardDeliveryApp />
        <CardLandingPage />
        <CardBarberSoftware />
      </div>
    </div>
  );
};
