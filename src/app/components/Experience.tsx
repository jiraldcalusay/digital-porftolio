import { awsProjects, gsoProjects, qroadProjects } from "../lib/projects";
import FadeIn from "./FadeIn";
import TechStack from "./TechStack";

const jobs = [
    {
        job: "Lead Web Developer",
        company: "Qroad Ph",
        date: "Jun 2026 — Aug 2026",
        entries: qroadProjects,
    },
    {
        job: "Frontend / React Developer",
        company: "Advanced World Solutions, Inc.",
        date: "Oct 2023 — Mar 2026",
        entries: awsProjects,
    },
    {
        job: "Fullstack Developer",
        company: "General Services Office Iloilo",
        date: "Feb 2023 — May 2023",
        entries: gsoProjects,
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="flex flex-col items-center px-4 py-14 border-t sm:px-8 bg-white dark:bg-primary1-dark dark:border-zinc-700"
        >
            <div className="w-full max-w-6xl">
                {/* Section header */}
                <FadeIn className="flex flex-col gap-1 pb-6 mb-4 border-b sm:flex-row sm:items-end sm:justify-between dark:border-zinc-700">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Experience
                    </h2>
                    <span className="text-sm text-secondary-text dark:text-secondary-text-dark">
                        My professional history
                    </span>
                </FadeIn>

                {jobs.map((job, i) => (
                    <FadeIn
                        key={i}
                        delay={0.1}
                        className="grid gap-x-10 gap-y-6 py-10 border-b md:grid-cols-[220px_1fr] dark:border-zinc-700 last:border-b-0"
                    >
                        {/* Left: role meta */}
                        <div className="md:sticky md:top-24 h-fit">
                            <p className="font-mono text-xs tracking-wide uppercase text-accent">
                                {job.date}
                            </p>
                            <h3 className="mt-2 text-lg font-semibold">
                                {job.job}
                            </h3>
                            <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
                                {job.company}
                            </p>
                        </div>

                        {/* Right: project entries */}
                        <div className="space-y-9">
                            {job.entries.map((entry, j) => (
                                <div key={j}>
                                    <h4 className="font-semibold">
                                        {entry.project}
                                    </h4>
                                    <ul className="mt-1.5 space-y-1 pl-4 text-sm list-disc marker:text-secondary-text dark:marker:text-secondary-text-dark text-secondary-text dark:text-secondary-text-dark">
                                        {entry.tasks?.map((task, k) => (
                                            <li key={k}>{task}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <TechStack techs={entry.techs} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Experience;
