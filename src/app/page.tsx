"use client";

import { Header } from "@/components//Home/Header";
import { Principal } from "@/components/Home/Principal";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full flex justify-center fixed top-0 z-20 shadow-md bg-white">
        <div className="max-w-[1440px] w-full z-20">
          <Header />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="max-w-[1440px] w-full  flex flex-col pt-[100px] ">
            <Principal/>
        </div>
      </div>
    </div>
  );
}
