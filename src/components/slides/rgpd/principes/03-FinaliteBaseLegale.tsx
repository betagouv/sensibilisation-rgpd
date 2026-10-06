import { Target, Landmark, FileSignature, Gavel, HeartPulse, Building, Briefcase, HandHeart } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const legalBases = [
  { icon: HandHeart, name: "Consentement", text: "Libre, spécifique, éclairé, univoque, et retirable" },
  { icon: FileSignature, name: "Contrat", text: "Nécessaire à l'exécution d'un contrat avec la personne" },
  { icon: Gavel, name: "Obligation légale", text: "Un texte impose le traitement" },
  { icon: Building, name: "Mission d'intérêt public", text: "Base privilégiée des administrations pour leurs missions" },
  { icon: Briefcase, name: "Intérêt légitime", text: "Non mobilisable par les autorités publiques pour leurs missions" },
  { icon: HeartPulse, name: "Intérêts vitaux", text: "Sauvegarde de la vie d'une personne" },
];

const Slide03FinaliteBaseLegale = () => {
  return (
    <SlideLayout
      title="Finalité et base légale"
      subtitle="Avant toute collecte : pourquoi, et sur quel fondement ?"
      icon={Target}
      sources={[CNIL.traitement, CNIL.basesLegales, CNIL.rgpdChapitre2]}
    >
      <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
        <div className="flex items-center gap-2 mb-2">
          <Target className="h-6 w-6 text-accent" />
          <h3 className="text-lg font-bold text-foreground">Une finalité déterminée</h3>
        </div>
        <p className="text-sm text-foreground/90">
          Tout traitement doit avoir un <strong>objectif précis, défini avant la collecte</strong>. Les
          données ne peuvent pas être réutilisées ensuite pour un objectif incompatible. C'est la
          finalité qui permet de juger ce qui est « nécessaire » (minimisation) et « combien de
          temps » (conservation).
        </p>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Landmark className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Les 6 bases légales (art. 6 RGPD)</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {legalBases.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.name} className="bg-background/50 rounded-lg p-3 flex gap-2">
                <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground">{b.name}</div>
                  <div className="text-xs text-muted-foreground">{b.text}</div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Choisir la base légale est « une étape-clé » : elle conditionne notamment les droits dont
          disposent les personnes.
        </p>
      </div>
    </SlideLayout>
  );
};

export default Slide03FinaliteBaseLegale;
