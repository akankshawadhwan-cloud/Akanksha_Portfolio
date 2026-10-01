"use client";

import FadeIn from "./FadeIn";

const stats = [
  { value: "4+", label: "Years of\nCustomer Experience" },
  { value: "3", label: "Marketing\nProjects" },
  { value: "2026", label: "Social Media & Video\nIntern · RetroSynth Records" },
  { value: "2026", label: "BBA Marketing\nGeorgia State University" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-sm tracking-[0.2em] uppercase text-[#c97b6b] mb-3"
          >
            About Me
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-6">
          {/* Left: story */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl md:text-5xl font-semibold text-[#2c3e50] leading-tight mb-8"
              >
                Finding the story
                <br />
                in the{" "}
                <span className="italic text-[#c97b6b]">numbers.</span>
              </h2>
            </FadeIn>

                      <FadeIn delay={0.2}>
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-[#7a7a7a] leading-relaxed mb-5 font-light text-base"
            >
              Hi, I&apos;m Akanksha! I&apos;m a Marketing graduate from Georgia State
              University with experience in digital marketing, social media, content
              creation, and marketing analytics.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-[#7a7a7a] leading-relaxed mb-5 font-light text-base"
            >
              I enjoy both the creative and technical sides of marketing, whether
              I&apos;m building and scheduling social content, analyzing performance,
              researching audiences, working with data, or finding ways to make a
              campaign more effective. Through my coursework and hands-on experience,
              I&apos;ve worked with tools like Canva, CapCut, Excel, SEMrush, and social
              media management platforms while developing skills in content strategy,
              marketing research, campaign planning, and analytics.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-[#7a7a7a] leading-relaxed mb-5 font-light text-base"
            >
              I&apos;m currently looking for opportunities in marketing coordination,
              digital marketing, social media, content, and related roles where I can
              continue building my skills and contribute to a team.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-[#7a7a7a] leading-relaxed font-light text-base"
            >
              Outside of marketing, I&apos;m a huge music fan and concert-goer, a
              self-taught guitarist, and someone who&apos;s probably always discovering
              a new artist or finding something creative to work on.
            </p>
          </FadeIn>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={0.1 * (i + 1)} direction="left">
                <div
                  className="rounded-2xl p-6 flex flex-col justify-between h-36 border"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#f0e8e4" : "#faf8f5",
                    borderColor: "#e8c4b8",
                  }}
                >
                  <span
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-3xl font-semibold text-[#c97b6b]"
                  >
                    {s.value}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    className="text-xs text-[#7a7a7a] leading-snug uppercase tracking-wide whitespace-pre-line"
                  >
                    {s.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
