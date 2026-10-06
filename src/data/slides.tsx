// Sensibilisation RGPD (30 minutes) - Slideshow structure
// Toutes les slides sont sourcées : la référence est le site de la CNIL (voir cnil-sources.ts)

// Introduction
import Intro01Title from "@/components/slides/rgpd/introduction/01-Title";
import Intro02WhyRgpd from "@/components/slides/rgpd/introduction/02-WhyRgpd";

// Donnée personnelle
import Dp01Definition from "@/components/slides/rgpd/donnee-personnelle/01-Definition";
import Dp02Quiz from "@/components/slides/rgpd/donnee-personnelle/02-Quiz";
import Dp03Sensitive from "@/components/slides/rgpd/donnee-personnelle/03-SensitiveAndPseudonymisation";

// Responsable de traitement
import Rt01Definition from "@/components/slides/rgpd/responsable-traitement/01-Definition";
import Rt02Roles from "@/components/slides/rgpd/responsable-traitement/02-Roles";

// Durée de conservation
import Dc01Principle from "@/components/slides/rgpd/duree-conservation/01-Principle";
import Dc02InPractice from "@/components/slides/rgpd/duree-conservation/02-InPractice";

// Droits d'accès et de rectification
import Droits01Access from "@/components/slides/rgpd/droits/01-Access";
import Droits02Rectification from "@/components/slides/rgpd/droits/02-Rectification";
import Droits03RequestProcess from "@/components/slides/rgpd/droits/03-RequestProcess";

// Grands principes
import Principes01Article5 from "@/components/slides/rgpd/principes/01-Article5";
import Principes02Minimisation from "@/components/slides/rgpd/principes/02-Minimisation";
import Principes03FinaliteBaseLegale from "@/components/slides/rgpd/principes/03-FinaliteBaseLegale";

// Conclusion
import Conclusion01FinalQuiz from "@/components/slides/rgpd/conclusion/01-FinalQuiz";
import Conclusion02KeyTakeaways from "@/components/slides/rgpd/conclusion/02-KeyTakeaways";

export interface SlideData {
  id: string;
  component: React.ComponentType;
  title: string;
  chapterId: number;
  hideInNav?: boolean;
}

export interface ChapterData {
  id: number;
  title: string;
  description?: string;
  parentId?: number;
}

// Define your chapters/modules here
export const chapters: ChapterData[] = [
  {
    id: 1,
    title: "Introduction",
    description: "Le RGPD, de quoi parle-t-on ?",
  },
  {
    id: 2,
    title: "Donnée personnelle",
    description: "Qu'est-ce qu'une donnée personnelle ?",
  },
  {
    id: 3,
    title: "Responsable de traitement",
    description: "Qui décide du pourquoi et du comment ?",
  },
  {
    id: 4,
    title: "Durée de conservation",
    description: "Combien de temps conserver les données ?",
  },
  {
    id: 5,
    title: "Accès et rectification",
    description: "Les droits des personnes sur leurs données",
  },
  {
    id: 6,
    title: "Grands principes",
    description: "Minimisation, finalité, base légale…",
  },
  {
    id: 7,
    title: "Conclusion",
    description: "Quiz final et points clés",
  },
];

// Define your slides here
export const slides: SlideData[] = [
  // Introduction
  { id: "intro-title", component: Intro01Title, title: "Sensibilisation RGPD", chapterId: 1 },
  { id: "intro-rgpd", component: Intro02WhyRgpd, title: "Le RGPD, de quoi parle-t-on ?", chapterId: 1 },

  // Donnée personnelle
  { id: "dp-definition", component: Dp01Definition, title: "Définition", chapterId: 2 },
  { id: "dp-quiz", component: Dp02Quiz, title: "Quiz : donnée personnelle ou pas ?", chapterId: 2 },
  { id: "dp-sensibles", component: Dp03Sensitive, title: "Données sensibles & pseudonymisation", chapterId: 2 },

  // Responsable de traitement
  { id: "rt-definition", component: Rt01Definition, title: "Traitement & responsable", chapterId: 3 },
  { id: "rt-roles", component: Rt02Roles, title: "Rôles des acteurs & DPO", chapterId: 3 },

  // Durée de conservation
  { id: "dc-principe", component: Dc01Principle, title: "Principe & cycle de vie", chapterId: 4 },
  { id: "dc-pratique", component: Dc02InPractice, title: "En pratique", chapterId: 4 },

  // Droits d'accès et de rectification
  { id: "droits-acces", component: Droits01Access, title: "Le droit d'accès", chapterId: 5 },
  { id: "droits-rectification", component: Droits02Rectification, title: "Le droit de rectification", chapterId: 5 },
  { id: "droits-situation", component: Droits03RequestProcess, title: "Mise en situation", chapterId: 5 },

  // Grands principes
  { id: "principes-article5", component: Principes01Article5, title: "Les principes de l'article 5", chapterId: 6 },
  { id: "principes-minimisation", component: Principes02Minimisation, title: "Focus : la minimisation", chapterId: 6 },
  { id: "principes-finalite", component: Principes03FinaliteBaseLegale, title: "Finalité & base légale", chapterId: 6 },

  // Conclusion
  { id: "conclusion-quiz", component: Conclusion01FinalQuiz, title: "Quiz final", chapterId: 7 },
  { id: "conclusion-retenir", component: Conclusion02KeyTakeaways, title: "À retenir & ressources", chapterId: 7 },
];
