import { FaArrowTurnDown } from "react-icons/fa6";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
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
          openSans.className
        )}
      >
        <h2>InsightBlend-Analytics</h2>
        <h2>2024</h2>
      </div>

      <div
        className={cn(
          "mt-20 md:mt-[250px] text-[11px] md:text-[30px] flex justify-between items-center",
          openSans.className
        )}
      >
        <h4>E-commerce powered by AI selling user</h4>
        <div className="flex justify-center items-center gap-2">
          Discover <FaArrowTurnDown />
        </div>
      </div>

      {/* Main Project Image */}
      <div className=" mt-10 md:mt-20 w-full bg-green-700  h-[200px] md:h-[500px]  rounded-3xl"></div>
      {/* Project details */}
      <div className=" mt-10 md:mt-20 w-full  rounded-3xl"></div>
    </div>
  );
}
