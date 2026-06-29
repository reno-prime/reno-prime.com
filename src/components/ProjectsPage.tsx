import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Camera, Layers } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { localizePath, type Locale } from "@/lib/content";

type ImageProject = {
  title: string;
  description: string;
  image: string;
  type: string;
};

type ComparisonProject = {
  title: string;
  description: string;
  image: string;
  before: string;
  after: string;
  type: string;
  label: string;
  imageClassName?: string;
};

type Project = ImageProject | ComparisonProject;

type ProjectCategory = {
  label: string;
  title: string;
  intro: string;
  projects: Project[];
};

const projectCopy = {
  fr: {
    heroEyebrow: "Projets RenoPrime",
    heroTitle: "Travaux reels, organises par type de piece.",
    heroText:
      "Parcourez des projets de cuisine, salle de bain et renovation interieure, incluant des pieces terminees et du travail en cours.",
    ctaEyebrow: "Demarrer votre projet",
    ctaTitle: "Une piece prete pour une planification plus claire?",
    ctaText:
      "Envoyez quelques details et RenoPrime fera un suivi sur la portee, l'echeancier et les prochaines etapes.",
    getQuote: "Obtenir une soumission",
    viewServices: "Voir les services",
    categories: [
      {
        label: "Cuisine",
        title: "Renovations de cuisine",
        intro: "Mises a jour pratiques avec dispositions plus propres, finis rafraichis et surfaces durables.",
        projects: [
          ["Rafraichissement de cuisine", "Transformation avant/apres montrant des armoires mises a jour, un nouveau plancher et une finition plus moderne.", "Avant / Apres"],
        ],
      },
      {
        label: "Salle de bain",
        title: "Renovations de salle de bain",
        intro: "Mises a jour axees sur la ceramique, la preparation des surfaces, les lignes propres et la coordination de finition.",
        projects: [
          ["Progression de salle de bain", "Transformation montrant la preparation, la structure et les etapes avant l'installation propre de la douche et de la ceramique.", "Avant / Apres"],
        ],
      },
      {
        label: "Plafonds",
        title: "Reparations de plafond",
        intro: "Travaux de plafond montrant des surfaces abimees restaurees avec preparation, gypse, joints et tirage.",
        projects: [
          ["Reparation de plafond et joints", "Plafond abime repare et amene a une etape propre de preparation avec gypse, joints et tirage.", "Avant / Apres"],
        ],
      },
      {
        label: "Interieur",
        title: "Renovations interieures",
        intro: "Ameliorations interieures incluant plancher, peinture, gypse, moulures et preparation.",
        projects: [
          ["Renovation de piece interieure", "Espace transforme d'un chantier actif en piece plus propre avec plancher fini et surfaces plus lumineuses.", "Avant / Apres"],
          ["Details de finition interieure", "Vue additionnelle d'un espace termine montrant la continuite du plancher, les murs peints et une circulation pratique.", "Travail termine"],
          ["Aire de vie interieure", "Autre vue terminee montrant le plancher renove, les murs peints et une disposition propre.", "Travail termine"],
        ],
      },
      {
        label: "Gypse & Joints",
        title: "Gypse et tirage de joints",
        intro: "Travaux de gypse et tirage qui preparent les murs et plafonds pour une surface finale propre.",
        projects: [
          ["Gypse et joints en progression", "Travaux en cours montrant la preparation de gypse, le plafond, les joints et le tirage avant la peinture.", "En cours"],
          ["Tirage de joints en piece", "Joints et tirage en cours sur les murs et plafonds, montrant la preparation derriere une finition lisse.", "En cours"],
          ["Preparation de piece en gypse", "Preparation de murs et plafond avant sablage, apprêt et finition finale.", "En cours"],
        ],
      },
    ],
  },
  en: {
    heroEyebrow: "RenoPrime Projects",
    heroTitle: "Real renovation work, organized by room.",
    heroText:
      "Browse kitchen, bathroom, and interior renovation work from RenoPrime, including finished rooms and in-progress craftsmanship.",
    ctaEyebrow: "Start Your Project",
    ctaTitle: "Have a room ready for a cleaner renovation plan?",
    ctaText:
      "Send a few details and RenoPrime will follow up about scope, timing, and next steps.",
    getQuote: "Get a Free Quote",
    viewServices: "View Services",
    categories: [
      {
        label: "Kitchen",
        title: "Kitchen Renovations",
        intro: "Practical kitchen updates with cleaner layouts, refreshed finishes, and durable everyday surfaces.",
        projects: [
          ["Kitchen Refresh", "A real before-and-after kitchen transformation showing updated cabinetry, flooring, and a cleaner modern finish.", "Before / After"],
        ],
      },
      {
        label: "Bathroom",
        title: "Bathroom Renovations",
        intro: "Bathroom and powder-room updates focused on tile, surface prep, clean lines, and finish coordination.",
        projects: [
          ["Bathroom Renovation Progress", "A bathroom transformation showing the rough framing and mechanical preparation before clean tile and shower installation.", "Before / After"],
        ],
      },
      {
        label: "Ceiling Repairs",
        title: "Ceiling Repairs",
        intro: "Ceiling repair work showing damaged surfaces restored through preparation, drywall, taping, and mudding.",
        projects: [
          ["Ceiling Repair & Taping", "A damaged ceiling repaired and brought into a clean preparation stage with drywall, taping, and mudding work.", "Before / After"],
        ],
      },
      {
        label: "Interior",
        title: "Interior Renovations",
        intro: "Interior room improvements including flooring, painting, drywall, trim, and preparation work.",
        projects: [
          ["Interior Room Renovation", "An interior space transformed from active construction into a cleaner room with finished flooring and brighter surfaces.", "Before / After"],
          ["Interior Finish Details", "Additional view of the completed living space showing flooring continuity, painted walls, and usable room flow.", "Finished Work"],
          ["Interior Living Area", "Another finished interior view showing the renovated flooring, painted walls, and clean usable layout.", "Finished Work"],
        ],
      },
      {
        label: "Drywall & Taping",
        title: "Drywall & Taping",
        intro: "Drywall, taping, and mudding work that prepares rooms and ceilings for a clean finished surface.",
        projects: [
          ["Drywall & Taping Progress", "Renovation progress work showing drywall preparation, ceiling work, taping, and mudding before finish paint.", "In Progress"],
          ["Room Taping Progress", "Taping and mudding in progress on walls and ceiling, showing the preparation work behind a smooth finish.", "In Progress"],
          ["Drywall Room Preparation", "Drywall and ceiling preparation in a residential room before sanding, priming, and final finishing.", "In Progress"],
        ],
      },
    ],
  },
};

const projectImages = [
  [
    {
      image: "/images/featured-kitchen-after.jpg",
      before: "/images/featured-kitchen-before.jpg",
      after: "/images/featured-kitchen-after.jpg",
      label: "kitchen renovation",
    },
  ],
  [
    {
      image: "/images/project-bathroom-after.jpg",
      before: "/images/project-bathroom-before.jpg",
      after: "/images/project-bathroom-after.jpg",
      label: "bathroom renovation",
    },
  ],
  [
    {
      image: "/images/project-ceiling-after.jpg",
      before: "/images/project-ceiling-before.jpg",
      after: "/images/project-ceiling-after.jpg",
      label: "ceiling repair",
      imageClassName: "object-contain",
    },
  ],
  [
    {
      image: "/images/project-interior-after.jpg",
      before: "/images/project-interior-before.jpg",
      after: "/images/project-interior-after.jpg",
      label: "interior renovation",
    },
    { image: "/images/project-interior-living-2.jpg" },
    { image: "/images/project-interior-living-1.jpg" },
  ],
  [
    { image: "/images/hero-renoprime-drywall-scaffold.jpg" },
    { image: "/images/hero-renoprime-taping-room.jpg" },
    { image: "/images/hero-renoprime-drywall-room.jpg" },
  ],
];

function getProjectCategories(locale: Locale): ProjectCategory[] {
  return projectCopy[locale].categories.map((category, categoryIndex) => ({
    label: category.label,
    title: category.title,
    intro: category.intro,
    projects: category.projects.map(([title, description, type], projectIndex) => ({
      title,
      description,
      type,
      ...projectImages[categoryIndex][projectIndex],
    })),
  }));
}

type PageProps = {
  locale?: Locale;
};

export function ProjectsPage({ locale = "fr" }: PageProps) {
  const categories = getProjectCategories(locale);

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <SiteHeader locale={locale} />
      <ProjectsHero locale={locale} categories={categories} />
      <CategoryNav categories={categories} />
      {categories.map((category) => (
        <ProjectCategory key={category.label} category={category} />
      ))}
      <ProjectsCta locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}

function ProjectsHero({ locale, categories }: { locale: Locale; categories: ProjectCategory[] }) {
  const copy = projectCopy[locale];

  return (
    <section className="relative min-h-[650px] overflow-hidden bg-black text-white">
      <Image
        src="/images/project-interior-living-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-68"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.68)_48%,rgba(0,0,0,0.34)),linear-gradient(0deg,rgba(0,0,0,0.72),rgba(0,0,0,0.12)_56%)]" />

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <div className="reveal mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-[#f4c430]" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#f4c430]">
              {copy.heroEyebrow}
            </span>
          </div>
          <h1 className="reveal-delay font-display max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-[5.2rem]">
            {copy.heroTitle}
          </h1>
          <p className="reveal-delay-long mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {copy.heroText}
          </p>

          <div className="reveal-delay-long mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.label}
                href={`#${slugify(category.label)}`}
                className="flex min-h-14 items-center gap-3 border border-white/14 bg-white/[0.07] px-4 backdrop-blur transition hover:border-[#f4c430] hover:bg-white hover:text-black"
              >
                <BadgeCheck className="text-[#f4c430]" size={19} aria-hidden="true" />
                <span className="text-sm font-black">{category.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryNav({ categories }: { categories: ProjectCategory[] }) {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-5 sm:px-8 lg:px-10">
        {categories.map((category) => (
          <a
            key={category.label}
            href={`#${slugify(category.label)}`}
            className="border border-black/10 px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:border-[#f4c430] hover:bg-[#f4c430]"
          >
            {category.label}
          </a>
        ))}
      </div>
    </section>
  );
}

type ProjectCategoryProps = {
  category: ProjectCategory;
};

function ProjectCategory({ category }: ProjectCategoryProps) {
  return (
    <section id={slugify(category.label)} className="scroll-mt-10 py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b98a12]">
              {category.label}
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl">
              {category.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5f5a52]">{category.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {category.projects.map((project) => (
            <article key={project.title} className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
              {isComparisonProject(project) ? (
                <BeforeAfterSlider
                  beforeSrc={project.before}
                  afterSrc={project.after}
                  beforeAlt={`${project.title} before RenoPrime renovation`}
                  afterAlt={`${project.title} after RenoPrime renovation`}
                  label={project.label}
                  imageClassName={project.imageClassName}
                />
              ) : (
                <div className="relative aspect-[4/3] bg-black">
                  <Image
                    src={project.image}
                    alt={`${project.title} by RenoPrime`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />
                </div>
              )}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-[#b98a12]">
                  <Camera size={16} aria-hidden="true" />
                  {project.type}
                </div>
                <h3 className="mt-4 text-2xl font-black text-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-[#676259]">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function isComparisonProject(project: Project): project is ComparisonProject {
  return "before" in project && "after" in project;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function ProjectsCta({ locale }: { locale: Locale }) {
  const copy = projectCopy[locale];

  return (
    <section className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4c430]">
            {copy.ctaEyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {copy.ctaTitle}
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/66">
            {copy.ctaText}
          </p>
        </div>
        <div className="grid gap-3">
          <Link
            href={localizePath("/quote", locale)}
            className="inline-flex h-14 items-center justify-center gap-3 bg-[#f4c430] px-7 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {copy.getQuote}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href={localizePath("/services", locale)}
            className="inline-flex h-14 items-center justify-center gap-3 border border-white/18 bg-white/[0.06] px-7 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
          >
            {copy.viewServices}
            <Layers size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
