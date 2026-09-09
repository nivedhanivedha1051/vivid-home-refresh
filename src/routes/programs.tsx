import { createFileRoute } from "@tanstack/react-router";
import { DetailPage } from "@/components/detail-page";
import { ProgramsGrid } from "@/components/programs-grid";
import { programsPageData } from "@/lib/programs";

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
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <ProgramsGrid>
      <DetailPage {...programsPageData} />
    </ProgramsGrid>
  );
}
