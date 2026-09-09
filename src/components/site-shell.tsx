import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CursorGrid } from "@/components/cursor-grid";

const links = [
  ["Home", "/"], ["Services", "/services"], ["Products", "/products"],
  ["Projects", "/projects"], ["Why Us", "/why-us"], ["About", "/about"], ["Blogs", "/blogs"],
] as const;


export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-border bg-background/80 backdrop-blur-xl">
      <CursorGrid />
      <nav className="relative z-10 mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="font-display flex items-center gap-2 text-xl font-bold"><span className="logo-mark" />tevexxo</Link>
        <div className="hidden items-center gap-5 lg:flex">{links.map(([label,to]) => <Link key={to} to={to} activeOptions={{exact: to === "/"}} className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{className:"text-accent"}}>{label}</Link>)}</div>
        <Button asChild className="hidden lg:inline-flex"><Link to="/contact">Contact us</Link></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Open menu">{open ? <X/> : <Menu/>}</Button>
      </nav>
      {open && <div className="relative z-10 border-t border-border bg-background px-5 py-5 lg:hidden"><div className="grid gap-1">{links.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground">{label}</Link>)}<Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-3 py-3 text-center font-semibold text-primary-foreground">Contact us</Link></div></div>}
    </header>
    {children}
    <footer className="border-t border-border py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 text-sm text-muted-foreground sm:flex-row lg:px-8"><div><div className="font-display mb-2 text-lg font-bold text-foreground">tevexxo</div><p>Build. Learn. Scale.</p></div><div className="flex flex-wrap gap-x-6 gap-y-2">{links.slice(0,5).map(([label,to]) => <Link key={to} to={to} className="hover:text-foreground">{label}</Link>)}</div><p>© 2026 Tevexxo</p></div></footer>
  </div>;
}