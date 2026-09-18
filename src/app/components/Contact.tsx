"use client";

import FadeIn from "./FadeIn";
import SendMessageForm from "./SendMessageForm";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center px-4 py-16 border-t sm:px-8 bg-white dark:bg-primary1-dark dark:border-zinc-700"
        >
            <div className="grid w-full max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
                {/* Left: get in touch */}
                <FadeIn>
                    <p className="mb-6 font-mono text-xs tracking-widest uppercase text-secondary-text dark:text-secondary-text-dark">
                        Get in touch
                    </p>

                    <a
                        href="mailto:jiraldcalusay@gmail.com"
                        className="block text-2xl font-semibold tracking-tight wrap-break-word transition-colors sm:text-4xl hover:text-accent"
                    >
                        jiraldcalusay@gmail.com
                    </a>

                    <div className="flex gap-12 mt-10">
                        <div>
                            <p className="mb-1 font-mono text-xs tracking-wide uppercase text-secondary-text dark:text-secondary-text-dark">
                                Phone
                            </p>
                            <p className="text-sm sm:text-base">0961 407 3159</p>
                        </div>
                        <div>
                            <p className="mb-1 font-mono text-xs tracking-wide uppercase text-secondary-text dark:text-secondary-text-dark">
                                Location
                            </p>
                            <p className="text-sm sm:text-base">
                                Makati, Metro Manila, PH
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Right: message form */}
                <FadeIn delay={0.1}>
                    <SendMessageForm />
                </FadeIn>
            </div>
        </section>
    );
};

export default Contact;
