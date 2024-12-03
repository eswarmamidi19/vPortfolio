"use client";

import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};
export default function ProjectLayouts({ children }: LayoutProps) {
  
  return (
    <div
      className=" pb-40 md:pb-20 pt-10  md:pt-36 px-4 md:px-10 w-screen  flex flex-col    
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%]"
    >
      {children}
        <Footer />
    </div>
  );
}
