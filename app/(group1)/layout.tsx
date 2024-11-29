"use client";

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
