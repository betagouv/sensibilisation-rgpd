import { Wrench, HelpCircle, CalendarClock, Lock, FileCheck, Timer } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const practices = [
  {
    icon: CalendarClock,
    title: "Une durée par catégorie de données",
    text: "Fixer et documenter une durée pour chaque catégorie, en vérifiant d'abord les obligations légales du secteur.",
  },
  {
    icon: Timer,
    title: "Purge automatique",
    text: "Mettre en place des mécanismes de suppression automatique à l'expiration des durées.",
  },
  {
    icon: Lock,
    title: "Archives isolées",
    text: "En archivage intermédiaire, isoler les données et limiter les habilitations aux seules personnes autorisées.",
  },
  {
    icon: FileCheck,
    title: "Tracer les suppressions",
    text: "Journaliser les opérations de suppression pour pouvoir en apporter la preuve.",
  },
];

const Slide02InPractice = () => {
  return (
    <SlideLayout
      title="Durée de conservation : en pratique"
      subtitle="Ce que recommande le guide RGPD du développeur de la CNIL"
      icon={Wrench}
      sources={[CNIL.devDureeConservation, CNIL.devMinimiser, CNIL.dureesConservation]}
    >
      <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30 flex items-center gap-4">
        <HelpCircle className="h-10 w-10 text-accent shrink-0" />
        <div>
          <div className="text-sm text-muted-foreground">La question à se poser</div>
          <p className="text-xl font-semibold text-foreground">
            « Jusqu'à quand ai-je <em>vraiment</em> besoin des données pour atteindre l'objectif fixé ? »
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {practices.map((p, index) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="bg-background/50 rounded-lg p-4 border-2 border-accent/20 hover:border-accent/50 transition-colors flex gap-3"
            >
              <div className="text-2xl font-bold text-accent w-6">{index + 1}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="h-5 w-5 text-accent" />
                  <div className="text-lg font-bold text-foreground">{p.title}</div>
                </div>
                <div className="text-sm text-muted-foreground">{p.text}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-sm text-foreground/90">
        📚 La CNIL publie des <strong>référentiels de durées de conservation</strong> (santé, social,
        recherche, ressources humaines…). Les appliquer et le documenter vaut{" "}
        <em>« présomption de conformité »</em>.
      </div>
    </SlideLayout>
  );
};

export default Slide02InPractice;
