"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingDock } from "@/components/ui/floating-dock";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: <img className="" />,
      href: "#",
    },
  ];
  return (
    <div className="max-w-7xl w-full">
  
      <Hero />
       <FloatingNav navItems={navItems} /> 
      <Grid />
      <RecentProjects />
      {/* <Clients /> */}
      {/* <Experience /> */}
      <Approach />
      <Footer />
    </div>
  );
};

export default Home;
