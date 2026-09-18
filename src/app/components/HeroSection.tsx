"use client";
import { linkedInLink, resumeLink } from "../lib/links";
import Button from "./Button";
import FadeIn from "./FadeIn";

const HeroSection = ({ buttonsRef }: any) => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center px-4 overflow-hidden text-center bg-white dark:bg-primary1-dark min-h-fit h-[calc(100vh-64px)] max-h-225 py-16"
    >
      {/* Animated gradient background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl">
        <FadeIn onMount delay={0}>
          <p className="mb-6 font-mono text-xs font-medium tracking-widest uppercase text-accent sm:text-sm">
            Lead Web Developer
          </p>
        </FadeIn>

        <FadeIn onMount delay={0.1}>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building intelligent,
            <br className="hidden sm:block" /> reliable web products.
          </h1>
        </FadeIn>

        <FadeIn onMount delay={0.2}>
          <p className="max-w-xl mt-6 text-base leading-relaxed sm:text-lg text-secondary-text dark:text-secondary-text-dark">
            Lead web developer based in Metro Manila, building web and mobile
            products end to end — from AI-powered apps to enterprise systems,
            currently leading development at Qroad Ph.
          </p>
        </FadeIn>

        <FadeIn onMount delay={0.3}>
          <div ref={buttonsRef} className="flex justify-center gap-3 mt-8">
            <Button link={resumeLink} text="View resume" isPrimary />
            <Button link={linkedInLink} text="LinkedIn" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
