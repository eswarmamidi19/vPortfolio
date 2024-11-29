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
    <div
      className=" pb-40 md:pb-20 pt-10  md:pt-36 px-4 md:px-10 w-screen pointer-events-none flex flex-col    
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%]"
    >
      <div
        className={cn(
          "text-[20px] md:text-[58px]  flex justify-between ",
          clashDisplay.className
        )}
      >
        <h2>InsightBlend-Analytics</h2>
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
        <img src="insight_cover2.png" fetchPriority="high" className=" rounded-lg md:rounded-3xl"/>
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
           Insight Blend Analytics transforms education by offering cutting-edge training in Microsoft certifications and Power BI tools, enabling learners to excel in the data-driven world.
            </div> 
            <div className="text-gray-500">
               Insight Blend Analytics is a cutting-edge educational platform redefining modern learning. Specializing in Microsoft certifications and Power BI tools, the company bridges the gap between theoretical knowledge and industry demands.
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
            <p>InsightBlend Analytics ltd</p>
          </div>
          <div className="flex items-center justify-between h-[70px]  border-b-2 md:py-14">
            <p>Services</p>
            <p>Website Redesign</p>
          </div>
          <div className="flex items-center justify-between h-[70px]  border-b-2 md:py-14">
            <p>Year</p>
            <p>2024</p>
          </div>
          <div className="flex items-center justify-between h-[70px]  md:py-14">
            <p>Site</p>
            <p className=" underline underline-offset-2">https://insightblend.com</p>
          </div>
        </div>
      </div>
      {/* Image pair */}
        
        <div className="w-full flex flex-col md:flex-row gap-10">
            <div className="rounded-3xl">
            <img src="insight_cover3.png" className="rounded-3xl" />
        </div>

        <div className="rounded-3xl">
            <img src="insight_cover4.png "className="rounded-3xl"/>
        </div>
     
      </div>
        
         <div
        className={cn(
          "mt-10 md:mt-8 rounded-3xl flex justify-center items-center",
          clashDisplay.className
        )}
      >
         <img src="ins_gif2.gif"  className="md:hidden rounded-3xl"/>
         <img src="ins_gif4.gif"  className=" hidden md:block md:h-[500px] rounded-3xl"/>
      </div>
      
      <Footer />
    </div>
  );
}
