"use client";

import TypingAnimation from "@/components/Elements/TypingAnimation";
import Image from "next/image";
import { useEffect } from "react";

export default function Introduction({ sectionRef }: { sectionRef: any }) {
  const phrases = [
    "Hello, I'm ",
    "Teguh Ersyarudin",
    "Fullstack Developer",
    "Web Developer",
  ];
  const nonDeletableIndices = [0];

  // useEffect(() => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [sectionRef]);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen w-full pb-20">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="h-40 w-40">
          <Image
            src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="teguh"
            width={200}
            height={200}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <TypingAnimation
          phrases={phrases}
          typingSpeed={100}
          deletingSpeed={50}
          delayAfterTyping={3000}
          delayAfterDeleting={3000}
          nonDeletableIndices={nonDeletableIndices}
          className="pt-10 font-poppins text-lg font-bold text-black dark:text-white md:text-3xl"
        />
        <div className="flex h-fit md:mb-4">
          <ul className="font-comfortaa flex list-inside list-disc gap-2 md:gap-4">
            {/* betikan dot/bulatan  */}
            <li className="font-poppins text-sm font-medium text-neutral-600 dark:text-neutral-400">
              IT student
            </li>
            <li className="font-poppins text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Based in Indonesia
            </li>
          </ul>
        </div>
      </div>
      {/*<div className="mb-4 mt-8 flex h-fit">
        <span className="font-quicksand font-medium leading-8 text-neutral-800 dark:text-neutral-200">
          An experienced web development junior with fullstack skills. I am
          quite proficient in using Laravel and Nextjs technology. I have
          knowledge in PHP and Typescript to develop web application
          functionality. Im excited to contribute to the team to build
          efficient, responsive, and visually appealing web applications.
        </span>
      </div>*/}
    </section>
  );
}
