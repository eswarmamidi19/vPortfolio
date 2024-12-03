import { FaArrowTurnDown } from "react-icons/fa6";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Image from "next/image";
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const clashDisplay = localFont({
  src: "../../../public/fonts/ClashDisplay.ttf",
});

export default function Page() {
  return (
    <div>
      <div
        className={cn(
          "text-[20px] md:text-[58px]  flex justify-between ",
          clashDisplay.className
        )}
      >
        <h2>Minima UI</h2>
        <h2>2024</h2>
      </div>

      <div
        className={cn(
          "mt-20 md:mt-[250px] text-[11px] md:text-[30px] flex justify-between items-center",
          clashDisplay.className
        )}
      >
        <h4 className="invisible">E-commerce powered by AI selling user</h4>
        <div className="flex justify-center items-center gap-2">
          Discover <FaArrowTurnDown />
        </div>
      </div>

      {/* Main Project Image */}
      <div
        className={cn(
          "mt-10 md:mt-20 w-full rounded-lg md:rounded-3xl",
          clashDisplay.className
        )}
      >
        <img src="design_system_cover.jpg" fetchPriority="high" className=" rounded-lg md:rounded-3xl"/>
      </div>
      {/* Project details */}
      <div
        className={cn(
          "mt-10 md:mt-20 w-full flex flex-col gap-5 md:flex-row md:items-center md:gap-0 ",
          clashDisplay.className
        )}
      >
        {/* details */}
        <div className="flex flex-col w-full md:w-1/3 gap-3 ">
          <h2 className="text-[30px] lg:text-[50px] ">
            <span className="text-gray-500"> Project</span> Details
          </h2>
          <div className=" text-sm lg:text-xl flex flex-col gap-3 ">
            <div>
              Sleek, Simple, and Modern: A Design System Crafted for the Future
            </div>
            <div className="text-gray-500">
              MINIMA UI is a cutting-edge minimalist design system that seamlessly blends elegance with functionality. Designed to provide a clean, intuitive user experience, it simplifies the process of building modern, visually striking digital products. Perfect for developers and designers alike, it offers a robust toolkit to create responsive, user-friendly interfaces with a strong focus on usability, scalability, and aesthetic simpl
            </div>
          </div>
        </div>
        {/* Table */}
        <div
          className={cn(
            "w-full md:w-2/3 flex flex-col text-[15px] md:px-9",
            openSans.className
          )}
        >
          <div className="flex items-center justify-between h-[70px]  border-b-2 md:py-14">
            <p>Client </p>
            <p>Open source</p>
          </div>
          <div className="flex items-center justify-between h-[70px]  border-b-2 md:py-14">
            <p>Services</p>
            <p>Design system</p>
          </div>
          <div className="flex items-center justify-between h-[70px]  border-b-2 md:py-14">
            <p>Year</p>
            <p>2024</p>
          </div>
          <div className="flex items-center justify-between h-[70px]  md:py-14">
            <p>Site</p>
            <p className=" underline underline-offset-2">Figma Comunity</p>
          </div>
        </div>
      </div>
      {/* Image pair */}
        
        <div className="w-full flex flex-col md:flex-row gap-10">
            <div className="rounded-3xl">
            <img src="design1.jpg" className="rounded-3xl" />
        </div>

        <div className="rounded-3xl">
            <img src="design2.jpg "className="rounded-3xl"/>
        </div>
     
      </div>
    
  
    </div>
  );
}
