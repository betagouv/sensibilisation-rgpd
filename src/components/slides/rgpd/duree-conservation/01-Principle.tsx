import { Hourglass, Database, Archive, Landmark, ArrowRight, Trash2 } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const phases = [
  {
    icon: Database,
    color: "text-blue-500",
    bg: "from-blue-500/20 to-blue-500/10",
    border: "border-blue-500/30",
    step: "1",
    name: "Base active",
    description: "Le temps nécessaire pour atteindre l'objectif du traitement.",
    example: "Données d'un candidat non retenu : 2 ans maximum",
  },
  {
    icon: Archive,
    color: "text-orange-500",
    bg: "from-orange-500/20 to-orange-500/10",
    border: "border-orange-500/30",
    step: "2",
    name: "Archivage intermédiaire",
    description:
      "Plus d'utilité opérationnelle, mais un intérêt administratif ou légal (contentieux, obligation légale). Données isolées, accès restreint.",
    example: "Données de facturation : 10 ans (Code de commerce)",
  },
  {
    icon: Landmark,
    color: "text-purple-500",
    bg: "from-purple-500/20 to-purple-500/10",
    border: "border-purple-500/30",
    step: "3",
    name: "Archivage définitif",
    description: "Uniquement pour les données ayant une valeur historique, conservées de façon pérenne.",
    example: "Cas exceptionnel : données à valeur historique",
  },
];

const Slide01Principle = () => {
  return (
    <SlideLayout
      title="Durée de conservation des données"
      subtitle="Les données ne sont pas conservées « au cas où »"
      icon={Hourglass}
      sources={[CNIL.dureesConservation, CNIL.guideDureesConservation]}
    >
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <p className="text-foreground/90 text-lg leading-relaxed">
          « Les données personnelles <strong>ne peuvent pas être conservées indéfiniment</strong> :
          une durée de conservation doit être déterminée par le responsable de traitement{" "}
          <strong>en fonction de l'objectif</strong> ayant conduit à la collecte. »
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-2">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <div key={phase.name} className="flex flex-col md:flex-row items-center gap-2 flex-1">
              <div className={`bg-gradient-to-br ${phase.bg} rounded-xl p-4 border ${phase.border} flex flex-col h-full w-full`}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`h-6 w-6 ${phase.color}`} />
                  <h3 className="text-lg font-bold text-foreground">
                    {phase.step}. {phase.name}
                  </h3>
                </div>
                <p className="text-sm text-foreground/90 mb-3">{phase.description}</p>
                <div className="bg-background/50 rounded-md p-2 mt-auto">
                  <div className="text-[11px] text-muted-foreground mb-0.5">Exemple</div>
                  <div className="text-xs text-foreground">{phase.example}</div>
                </div>
              </div>
              {index < phases.length - 1 && (
                <ArrowRight className="h-6 w-6 text-muted-foreground shrink-0 rotate-90 md:rotate-0" />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 bg-destructive/10 border border-destructive/30 rounded-xl p-4">
        <Trash2 className="h-6 w-6 text-destructive shrink-0" />
        <p className="text-sm text-foreground/90">
          À l'issue de ces phases : <strong>suppression</strong> ou <strong>anonymisation</strong>. Si
          aucun texte n'impose de durée, c'est au responsable de traitement de la fixer et de la
          justifier.
        </p>
      </div>
    </SlideLayout>
  );
};

export default Slide01Principle;
