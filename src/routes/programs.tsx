import { createFileRoute } from "@tanstack/react-router";
import { DetailPage } from "@/components/detail-page";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Tevexxo Learning Tracks" },
      { name: "description", content: "Structured Tevexxo programs in engineering, design, data and cloud with mentorship and real projects." },
      { property: "og:title", content: "Programs — Tevexxo Learning Tracks" },
      { property: "og:description", content: "Structured tracks with mentorship, real projects and career support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <DetailPage
      eyebrow="Programs"
      title="Structured tracks that take you from basics to shipping."
      intro="Every program mixes guided lessons, mentor reviews and production-style projects so progress is visible week by week."
      items={[
        { title: "Engineering Track", text: "Frontend, backend and deployment fundamentals through one product built end to end." },
        { title: "Design Track", text: "Research, interface systems and prototyping with weekly critique sessions." },
        { title: "Data & AI Track", text: "Python, analysis and applied machine learning on real, messy datasets." },
        { title: "Cloud & DevOps Track", text: "Containers, pipelines and reliability practices used by delivery teams." },
        { title: "Mentorship & Reviews", text: "One-to-one feedback on code, design and communication at each milestone." },
        { title: "Career Support", text: "Portfolio shaping, interview practice and referrals to hiring partners." },
      ]}
    />
  ),
});
