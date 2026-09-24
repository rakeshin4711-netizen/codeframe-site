import type { LucideIcon } from "lucide-react";
import { Globe, Bot, Target, Boxes } from "lucide-react";

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and digital experiences designed around your business.",
  },
  { number: "02", icon: Bot, title: "AI & Automation", description: "Automate repetitive workflows and build intelligent business operations with AI." },
  { number: "03", icon: Target, title: "Lead Generation", description: "Build systems that find, qualify, and organize potential customers." },
  { number: "04", icon: Boxes, title: "Custom Software", description: "Custom platforms and internal tools built around the way your business works." },
];

export type ProcessStepData = { number: string; title: string; description: string; };

export const processSteps: ProcessStepData[] = [
  { number: "01", title: "Discover", description: "Understand the business." },
  { number: "02", title: "Design", description: "Create the experience." },
  { number: "03", title: "Build", description: "Develop the system." },
  { number: "04", title: "Automate", description: "Connect workflows and AI." },
  { number: "05", title: "Launch", description: "Deploy and optimize." },
];

export type PricingTier = { name: string; price: string; description: string; features: string[]; cta: string; featured?: boolean };

export const pricingTiers = [ { name: "STARTER", price: "$120", description: "For businesses that need a professional digital presence.", features: ["Professional Website", "Responsive Design", "Basic Deployment"], cta: "Get Started →" }, { name: "GROWTH", price: "$480", description: "For businesses ready to build a stronger digital system.", features: ["Advanced Web", "Automation", "Lead Systems", "Integrations"], cta: "Get Started →", featured: true }, { name: "CUSTOM", price: "$1,200+", description: "For businesses that need custom platforms, software, automation, or complex integrations.", features: ["Custom Software", "AI Systems", "Complex Automation", "Custom Integrations"], cta: "Lat's Talk →" } ];
