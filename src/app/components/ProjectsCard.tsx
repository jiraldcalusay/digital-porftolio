"use client";
import Image from "next/image";
import { memo } from "react";
import { FiArrowUpRight, FiImage } from "react-icons/fi";
import { Project } from "../Types/index";
import TechStack from "./TechStack";

const ProjectsCard = memo(
  ({
    imgSrc,
    name,
    description,
    category,
    year,
    link,
    sourceCode,
    figmaLink,
    techs,
  }: Project) => {
    const secondaryBtn =
      "flex items-center justify-center px-5 text-sm font-medium transition-colors bg-transparent border rounded-full h-11 border-primary5 dark:border-zinc-600 hover:bg-primary-hovered dark:hover:bg-primary-hovered-dark";

    return (
      <article className="grid w-full h-full overflow-hidden bg-white border rounded-2xl border-border-warm dark:bg-primary1-dark dark:border-zinc-700 lg:grid-cols-[1.8fr_1fr]">
        {/* Screenshot, full-bleed. Every project shot is exactly 16:9 and the
            column ratio is tuned so the cell's own 16:9 height is what sets the
            card height — the image fills edge to edge without being cropped. */}
        <div className="relative w-full aspect-video bg-primary2 dark:bg-primary1-dark">
          {imgSrc ? (
            <Image
              src={`/img/${imgSrc}`}
              alt={name}
              className="object-cover object-center"
              quality={75}
              fill
              placeholder="blur"
              blurDataURL="/img/blur-placeholder.png"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-b from-primary3 to-primary5 text-primary6 dark:from-primary3-dark dark:to-primary1-dark dark:text-zinc-500">
              <FiImage size={40} />
              <p className="text-sm font-medium">Coming soon</p>
            </div>
          )}
        </div>

        {/* Detail rail: sits beside the image from lg up, below it before that */}
        <div className="flex flex-col justify-center gap-5 p-6 border-t border-border-warm dark:border-zinc-700 lg:border-t-0 lg:border-l lg:p-7">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {category && (
                <span className="text-xs font-semibold tracking-widest uppercase text-accent dark:text-accent-dark">
                  {category}
                </span>
              )}
              {year && (
                <span className="text-xs font-medium tracking-wide text-primary-text/65 dark:text-primary-text-dark/60">
                  {year}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight lg:text-3xl">
              {name}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-primary-text/70 dark:text-primary-text-dark/70 line-clamp-5">
              {description}
            </p>
          </div>

          <TechStack techs={techs} />

          {(link || sourceCode || figmaLink) && (
            <div className="flex flex-wrap gap-2">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-5 h-11 text-sm font-medium text-primary1 dark:text-black transition-colors bg-primary-text dark:bg-white rounded-full hover:bg-primary-text/85 dark:hover:bg-white/85"
                >
                  Live Demo
                  <FiArrowUpRight size={16} />
                </a>
              )}
              {sourceCode && (
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryBtn}
                >
                  Source Code
                </a>
              )}
              {figmaLink && (
                <a
                  href={figmaLink}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryBtn}
                >
                  Open in Figma
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    );
  },
);

ProjectsCard.displayName = "ProjectsCard";

export default ProjectsCard;
