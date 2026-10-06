import { useState, MouseEvent } from "react";
import {
  Target,
  Landmark,
  FileSignature,
  Gavel,
  HeartPulse,
  Building,
  Briefcase,
  HandHeart,
  ArrowRight,
  ExternalLink,
  MousePointerClick,
  LucideIcon,
} from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";
import { CnilSource } from "../../templates/CnilSources";

interface LegalBasis {
  icon: LucideIcon;
  name: string;
  text: string;
  example: string;
  keyPoint: string;
  source: CnilSource;
}

// Exemples tirés des fiches CNIL consacrées à chaque base légale
const legalBases: LegalBasis[] = [
  {
    icon: HandHeart,
    name: "Consentement",
    text: "Libre, spécifique, éclairé, univoque, et retirable",
    example:
      "Un organisateur d'évènements culturels collecte l'adresse électronique des spectateurs « pour leur adresser des courriels concernant des prochaines représentations ».",
    keyPoint:
      "Adapté aux traitements potentiellement intrusifs (profilage, géolocalisation). La personne doit pouvoir refuser ou retirer son consentement sans conséquence.",
    source: CNIL.baseConsentement,
  },
  {
    icon: FileSignature,
    name: "Contrat",
    text: "Nécessaire à l'exécution d'un contrat avec la personne",
    example:
      "« Une personne procède à des achats en ligne et souhaite payer par carte bancaire et se faire livrer les produits à son domicile » : ses coordonnées bancaires et son adresse sont nécessaires.",
    keyPoint:
      "Seules les données nécessaires à l'exécution du contrat sont couvertes. Fonctionne aussi avant la signature : fournir son code postal pour savoir si l'on est livrable.",
    source: CNIL.baseContrat,
  },
  {
    icon: Gavel,
    name: "Obligation légale",
    text: "Un texte impose le traitement",
    example:
      "Un organisme public met en place un dispositif de recueil des signalements de ses agents, imposé par la loi « Sapin II » du 9 décembre 2016.",
    keyPoint:
      "Le texte doit imposer le traitement à l'organisme. Autre exemple : transmettre des données à l'administration fiscale qui exerce son « droit de communication ».",
    source: CNIL.baseObligationLegale,
  },
  {
    icon: Building,
    name: "Mission d'intérêt public",
    text: "Base privilégiée des administrations pour leurs missions",
    example:
      "La CNIL traite les plaintes qu'elle reçoit sur cette base : ce traitement est « nécessaire à l'exercice des missions d'intérêt public » que la loi lui confie.",
    keyPoint:
      "Concerne les traitements tournés vers les usagers. La plupart des traitements RH ou « support » d'une administration ne relèvent pas de cette base.",
    source: CNIL.baseMissionInteretPublic,
  },
  {
    icon: Briefcase,
    name: "Intérêt légitime",
    text: "Non mobilisable par les autorités publiques pour leurs missions",
    example:
      "Un traitement « visant à garantir la sécurité du réseau et des informations », ou « mis en œuvre à des fins de prévention de la fraude ».",
    keyPoint:
      "Suppose une mise en balance avec les droits des personnes. Une administration peut l'utiliser pour ses activités internes sans lien avec ses missions : la CNIL le retient pour son intranet ou le contrôle d'accès à ses locaux.",
    source: CNIL.baseInteretLegitime,
  },
  {
    icon: HeartPulse,
    name: "Intérêts vitaux",
    text: "Sauvegarde de la vie d'une personne",
    example:
      "Un traitement « nécessaire pour suivre la propagation d'épidémies ou dans les cas d'urgence humanitaire ».",
    keyPoint:
      "Base exceptionnelle : la CNIL n'en retient aucune pour ses propres traitements.",
    source: CNIL.devBasesLegales,
  },
];

const examples = [
  { finalite: "Instruire une demande d'aide", base: "Mission d'intérêt public" },
  { finalite: "Envoyer une lettre d'information", base: "Consentement" },
];

const Slide03FinaliteBaseLegale = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedBasis = selected !== null ? legalBases[selected] : null;

  // Empêche le clic d'avancer d'une slide en mode plein écran
  const toggle = (index: number) => (e: MouseEvent) => {
    e.stopPropagation();
    setSelected((current) => (current === index ? null : index));
  };

  return (
    <SlideLayout
      title="Finalité et base légale"
      subtitle="Avant toute collecte : pourquoi, et sur quel fondement ?"
      icon={Target}
      sources={[CNIL.liceite, CNIL.choisirBaseLegale, CNIL.traitement, CNIL.rgpdChapitre2]}
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
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-base font-bold text-foreground">
            Une seule base, à choisir parmi les 6 de l'article 6 du RGPD
          </h3>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <MousePointerClick className="h-4 w-4" />
            Cliquez sur une base pour voir un exemple
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {legalBases.map((b, index) => {
            const Icon = b.icon;
            const isSelected = selected === index;
            return (
              <button
                key={b.name}
                type="button"
                onClick={toggle(index)}
                aria-expanded={isSelected}
                className={`text-left rounded-lg p-2.5 flex gap-2 border-2 transition-colors ${
                  isSelected
                    ? "bg-primary/20 border-primary"
                    : "bg-background/50 border-transparent hover:border-primary/40"
                }`}
              >
                <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground">{b.name}</div>
                  <div className="text-xs text-muted-foreground">{b.text}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedBasis ? (
        <div key={selectedBasis.name} className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-4 border-2 border-primary/40 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <selectedBasis.icon className="h-5 w-5 text-primary" />
            <div className="text-sm font-bold text-foreground">
              Exemple concret : {selectedBasis.name}
            </div>
          </div>
          <p className="text-sm text-foreground mb-2">{selectedBasis.example}</p>
          <p className="text-xs text-foreground/80 mb-2">
            <strong>À retenir :</strong> {selectedBasis.keyPoint}
          </p>
          <a
            href={selectedBasis.source.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            {selectedBasis.source.label}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      ) : (
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
      )}
    </SlideLayout>
  );
};

export default Slide03FinaliteBaseLegale;
