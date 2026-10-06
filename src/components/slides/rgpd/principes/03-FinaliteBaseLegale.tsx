import { Target, Landmark, FileSignature, Gavel, HeartPulse, Building, Briefcase, HandHeart, ArrowRight } from "lucide-react";
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

const examples = [
  { finalite: "Instruire une demande d'aide", base: "Mission d'intérêt public" },
  { finalite: "Envoyer une lettre d'information", base: "Consentement" },
];

const Slide03FinaliteBaseLegale = () => {
  return (
    <SlideLayout
      title="Finalité et base légale"
      subtitle="Avant toute collecte : pourquoi, et sur quel fondement ?"
      icon={Target}
      sources={[CNIL.liceite, CNIL.basesLegales, CNIL.traitement, CNIL.rgpdChapitre2]}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-4 border border-accent/30">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-bold text-foreground">1. Définir la finalité</h3>
          </div>
          <p className="text-sm text-foreground/90">
            Un <strong>objectif précis, défini avant la collecte</strong>. Pas de réutilisation pour un
            objectif incompatible. C'est la finalité qui permet de juger ce qui est « nécessaire » et
            « combien de temps ».
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-4 border-2 border-primary/40">
          <div className="flex items-center gap-2 mb-2">
            <Landmark className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-bold text-foreground">2. Choisir UNE base légale par finalité</h3>
          </div>
          <p className="text-sm text-foreground/90">
            « Il n'est pas possible de “cumuler” des bases légales pour une même finalité :{" "}
            <strong>il faut en choisir une seule</strong>. » Ce choix se fait « avant tout début de
            mise en œuvre du traitement », il est indiqué aux personnes et il détermine leurs droits.
          </p>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
        <h3 className="text-base font-bold text-foreground mb-3">
          Une seule base, à choisir parmi les 6 de l'article 6 du RGPD
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {legalBases.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.name} className="bg-background/50 rounded-lg p-2.5 flex gap-2">
                <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground">{b.name}</div>
                  <div className="text-xs text-muted-foreground">{b.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-muted/50 rounded-xl p-4">
        <div className="text-sm font-bold text-foreground mb-2">
          🧩 Exemple illustratif : un même service, deux finalités, deux bases légales
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          {examples.map((e) => (
            <div key={e.finalite} className="bg-background/50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
              <span className="text-foreground">{e.finalite}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="font-semibold text-primary">{e.base}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Si les conditions de la base envisagée ne sont pas remplies, il faut « soit modifier les
          paramètres » du traitement, « soit rechercher une autre base légale ».
        </p>
      </div>
    </SlideLayout>
  );
};

export default Slide03FinaliteBaseLegale;
