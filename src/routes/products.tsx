import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/catalog-page";
import { products } from "@/lib/catalog";

export const Route=createFileRoute("/products")({head:()=>({meta:[{title:"Digital Products — Tevexxo"},{name:"description",content:"Explore focused software products created by Tevexxo."},{property:"og:title",content:"Digital Products — Tevexxo"},{property:"og:description",content:"Focused software products for modern teams."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=> <CatalogPage eyebrow="Products" title="Purpose-built tools. No unnecessary complexity." intro="Products shaped by recurring operational challenges we have seen across real teams." items={products}/>});