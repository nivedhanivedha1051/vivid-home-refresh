import serviceWeb from "@/assets/service-web.jpg.asset.json";
import serviceMobile from "@/assets/service-mobile.jpg.asset.json";
import serviceUx from "@/assets/service-ux.jpg.asset.json";
import serviceCloud from "@/assets/service-cloud.jpg.asset.json";
import courseFullstack from "@/assets/course-fullstack.jpg.asset.json";
import courseUx from "@/assets/course-ux.jpg.asset.json";
import courseAi from "@/assets/course-ai.jpg.asset.json";
import courseDevops from "@/assets/course-devops.jpg.asset.json";
import productFlowdesk from "@/assets/product-flowdesk.jpg.asset.json";
import productPulseboard from "@/assets/product-pulseboard.jpg.asset.json";
import productCartsuite from "@/assets/product-cartsuite.jpg.asset.json";
import productCustom from "@/assets/product-custom.jpg.asset.json";

export type CatalogItem = { title: string; text: string; image: string; alt: string };

export const services: CatalogItem[] = [
  { title: "Web Development", text: "High-performance websites and applications built on modern, maintainable foundations.", image: serviceWeb.url, alt: "Modern web application interfaces in a digital workspace" },
  { title: "Mobile Applications", text: "Thoughtful iOS and Android experiences from prototype through store launch.", image: serviceMobile.url, alt: "Two modern mobile application interfaces" },
  { title: "UI & UX Design", text: "Research-led product design that makes complex workflows feel direct and intuitive.", image: serviceUx.url, alt: "Product interface wireframes and design system materials" },
  { title: "Cloud, Data & AI", text: "Infrastructure, automation and applied intelligence designed around measurable value.", image: serviceCloud.url, alt: "Cloud infrastructure and artificial intelligence visualization" },
];

export const courses: CatalogItem[] = [
  { title: "Full Stack Development", text: "A 12-week foundation in modern interfaces, APIs, databases and deployment.", image: courseFullstack.url, alt: "Full stack developer working across multiple screens" },
  { title: "UI/UX Design", text: "An 8-week path through research, Figma, systems thinking and prototyping.", image: courseUx.url, alt: "Designer developing mobile interface wireframes" },
  { title: "Data Science & AI", text: "A 14-week applied program covering Python, machine learning and real datasets.", image: courseAi.url, alt: "Artificial intelligence network surrounded by data displays" },
  { title: "Cloud & DevOps", text: "A 10-week program covering cloud foundations, containers and delivery pipelines.", image: courseDevops.url, alt: "Cloud deployment pipeline in a server environment" },
];

export const products: CatalogItem[] = [
  { title: "FlowDesk", text: "A clear, lightweight project and task workspace for focused engineering teams.", image: productFlowdesk.url, alt: "FlowDesk project management workspace" },
  { title: "Pulseboard", text: "Live business dashboards that bring essential signals into one dependable view.", image: productPulseboard.url, alt: "Pulseboard analytics dashboard with live charts" },
  { title: "CartSuite", text: "A fast headless commerce foundation for brands ready to own their customer experience.", image: productCartsuite.url, alt: "CartSuite commerce storefront on desktop and mobile" },
  { title: "Custom Platforms", text: "Domain-specific systems built with the same product rigor as our own tools.", image: productCustom.url, alt: "Modular custom enterprise software platform" },
];