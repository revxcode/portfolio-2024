import Image from "next/image";

export default function SideHeader() {
  const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;

  return (
    <div className="mt-2 flex h-14 cursor-default items-center justify-center">
      <Image
        src={baseUrl + "/images/RevCodes.png"}
        alt="TailwindCSS"
        width={100}
        height={100}
        priority
        className="h-6 w-6"
      />
      <div className="hidden flex-col justify-center pt-1 md:flex">
        <span className="ml-2 h-5 text-nowrap font-poppins text-lg font-bold text-black dark:text-white">
          RevCodes.
        </span>
        <span className="ml-2 h-5 text-nowrap font-mono text-[10px] font-bold text-neutral-400">
          Web Development
        </span>
      </div>
    </div>
  );
}
