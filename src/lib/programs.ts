export type ProgramItem = {
  title: string;
  text: string;
};

export type ProgramsPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  items: ProgramItem[];
};

export const programsPageData: ProgramsPageData = {
  eyebrow: "Programs",
  title: "Structured tracks that take you from basics to shipping.",
  intro: "Every program mixes guided lessons, mentor reviews and production-style projects so progress is visible week by week.",
  items: [
    { title: "Engineering Track", text: "Frontend, backend and deployment fundamentals through one product built end to end." },
    { title: "Design Track", text: "Research, interface systems and prototyping with weekly critique sessions." },
    { title: "Data & AI Track", text: "Python, analysis and applied machine learning on real, messy datasets." },
    { title: "Cloud & DevOps Track", text: "Containers, pipelines and reliability practices used by delivery teams." },
    { title: "Mentorship & Reviews", text: "One-to-one feedback on code, design and communication at each milestone." },
    { title: "Career Support", text: "Portfolio shaping, interview practice and referrals to hiring partners." },
  ],
};