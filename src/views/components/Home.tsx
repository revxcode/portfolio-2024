"use client";

import { useScrollStore } from "@/stores/useScrollStore";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Introduction from "./Introduction";

//dynamic importteds
const About = dynamic(() => import("./About"));
const Skills = dynamic(() => import("./Skill"));
const Services = dynamic(() => import("./Service"));

export default function Home() {
  const { setSectionRef } = useScrollStore();

  const defaultOptions = {
    threshold: 0.5,
  };

  const {
    ref: introInViewRef,
    entry: introEntry,
  } = useInView(defaultOptions);

  const {
    ref: aboutInViewRef,
    entry: aboutEntry,
  } = useInView(defaultOptions);

  const {
    ref: skillInViewRef,
    entry: skillEntry,
  } = useInView(defaultOptions);

  const {
    ref: serviceInViewRef,
    entry: serviceEntry,
  } = useInView(defaultOptions);

  useEffect(() => {
    setSectionRef("home", introEntry);
    setSectionRef("about", aboutEntry);
    setSectionRef("skill", skillEntry);
    setSectionRef("service", serviceEntry);
  }, [introEntry, aboutEntry, skillEntry, serviceEntry, setSectionRef]);

  return (
    <>
      <Introduction sectionRef={introInViewRef} />
      <About sectionRef={aboutInViewRef} />
      <Skills sectionRef={skillInViewRef} />
      <Services sectionRef={serviceInViewRef} />
    </>
  );
}
