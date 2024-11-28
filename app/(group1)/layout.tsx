"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import { IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";

type LayoutProps = {
  children: React.ReactNode;
};
export default function ProjectLayouts({ children }: LayoutProps) {
  
  return (
    <div>
      {children}
    </div>
  );
}
