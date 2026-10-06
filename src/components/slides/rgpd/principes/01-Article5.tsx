import { Scale, Eye, Target, Minimize2, CheckCheck, Hourglass, Lock, ClipboardCheck } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const principles = [
  {
    icon: Eye,
    name: "Licéité, loyauté, transparence",
    text: "Une base légale, et des personnes clairement informées de l'utilisation de leurs données.",
  },
  {
    icon: Target,
    name: "Limitation des finalités",
    text: "Des objectifs déterminés, explicites et légitimes, pas de réutilisation incompatible.",
  },
  {
    icon: Minimize2,
    name: "Minimisation",
    text: "Des données adéquates, pertinentes et limitées à ce qui est nécessaire.",
  },
  {
    icon: CheckCheck,
    name: "Exactitude",
    text: "Des données exactes et tenues à jour ; les inexactes sont effacées ou rectifiées.",
  },
  {
    icon: Hourglass,
    name: "Limitation de la conservation",
    text: "Pas plus longtemps que nécessaire au regard des finalités.",
  },
  {
    icon: Lock,
    name: "Intégrité et confidentialité",
    text: "Une sécurité appropriée contre les accès non autorisés, la perte ou la destruction.",
  },
];

const Slide01Article5 = () => {
  return (
    <SlideLayout
      title="Les grands principes de la protection des données"
      subtitle="Article 5 du RGPD : le socle de toute conformité"
      icon={Scale}
      sources={[CNIL.rgpdChapitre2, CNIL.sixPrincipes]}
    >
      <div className="grid md:grid-cols-3 gap-3">
        {principles.map((p, index) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className="bg-background/50 rounded-lg p-4 border-2 border-accent/20 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent font-bold">{index + 1}.</span>
                <Icon className="h-5 w-5 text-accent" />
                <div className="font-bold text-foreground leading-tight">{p.name}</div>
              </div>
              <div className="text-sm text-muted-foreground">{p.text}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-5 border-2 border-primary/30 flex items-center gap-4">
        <ClipboardCheck className="h-10 w-10 text-primary shrink-0" />
        <div>
          <div className="text-lg font-bold text-foreground">+ Responsabilité (« accountability »)</div>
          <p className="text-sm text-foreground/90">
            Le responsable de traitement doit respecter ces principes <strong>et être en mesure de le
            démontrer</strong> : registre, documentation, analyses d'impact… Et comme le rappelle la
            CNIL, « la conformité n'est pas gravée dans le marbre et figée ».
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide01Article5;
