"use client";

import Footer from "@/components/Footer";
// import { navItems } from "@/data";

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
type LayoutProps = {
  children: React.ReactNode;
};
export default function ProjectLayouts({ children }: LayoutProps) {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "#projects" },
    { name: "Approach", link: "#approach" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div
        className=" pb-40 md:pb-0 pt-10  md:pt-36 px-4 md:px-5 w-screen  flex flex-col    
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%]"
      >
        {children}

        <Footer />
      </div>
    </>
  );
}
