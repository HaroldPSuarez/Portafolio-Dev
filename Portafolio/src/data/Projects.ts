export type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Riesgo Crediticio",
    description: "Aplicación frontend para análisis de riesgo crediticio.",
    technologies: ["React", "SpringBoot", "HTML", "CSS", "JSX", "SQL"],
    demoLink: "Link Proximamente",
    codeLink: "https://github.com/HaroldPSuarez/Riesgo_crediticio.git",
    image: "/public/1.jpg",
  },
  {
    id: 2,
    name: "Tienda Carros",
    description:
      "Tienda donde te permite ver cotizar y comprar autos clasicos.",
    technologies: ["Angular", "JSX", "CSS", "HTML", "SQL"],
    demoLink: "lINK Proximamente",
    codeLink: "https://github.com/HaroldPSuarez/AngularPage.git",
    image: "/public/2.png",
  },
  {
    id: 3,
    name: "Portafolio Web",
    description:
      "Portafolio donde se exibe el proceso personal en el area de desarrollo web.",
    technologies: ["React", "TS", "CSS", "HTML"],
    demoLink: "https://portafolio-dev-red.vercel.app/",
    codeLink: "https://github.com/HaroldPSuarez/Portafolio-Dev.git",
    image: "/public/3.png",
  },
];
