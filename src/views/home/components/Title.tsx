import { ReactNode } from "react";

interface TitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function Title({ title, subtitle, children }: TitleProps) {
  return (
    <div className="my-4 flex flex-col">
      <div className="inline-flex gap-2 text-neutral-800 dark:text-neutral-200">
        {children}
        <span className="font-quicksand text-xl font-bold">{title}</span>
      </div>
      <span className="font-quicksand font-medium text-neutral-600 dark:text-neutral-400">
        {subtitle}
      </span>
    </div>
  );
}
