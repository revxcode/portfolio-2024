"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function MainLayout({ children }: { children: ReactNode; }) {
  return (
    <main className="flex bg-zinc-100 dark:bg-zinc-950">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,red,transparent,transparent)] z-0 ",
        )}
      />
      <Sidebar />
      <div className="h-screen w-full px-0 md:px-32">
        <div className="hidden-scrollbar flex h-full flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
