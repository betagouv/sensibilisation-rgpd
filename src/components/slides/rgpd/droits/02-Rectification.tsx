import { PenLine, Clock, Share2, Scale } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const otherRights = [
  { name: "Information", text: "Savoir qui traite ses données, pourquoi, et quels sont ses droits" },
  { name: "Opposition", text: "S'opposer au traitement pour des raisons tenant à sa situation, ou à la prospection" },
  { name: "Effacement", text: "Obtenir la suppression de ses données dans certains cas" },
  { name: "Limitation", text: "Faire « geler » temporairement l'utilisation de ses données" },
  { name: "Portabilité", text: "Récupérer ses données dans un format structuré (CSV, JSON…)" },
];

const Slide02Rectification = () => {
  return (
    <SlideLayout
      title="Le droit de rectification"
      subtitle="Corriger des données inexactes ou compléter des données incomplètes (art. 16 et 19 RGPD)"
      icon={PenLine}
      sources={[CNIL.droitRectification, CNIL.droitsDesPersonnes, CNIL.devDroits]}
    >
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
          <PenLine className="h-7 w-7 text-accent mb-2" />
          <h3 className="text-lg font-bold text-foreground mb-1">Quoi ?</h3>
          <p className="text-sm text-foreground/90">
            Une adresse erronée, un âge inexact, une information incomplète au regard de la finalité
            du traitement.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-5 border border-primary/30">
          <Clock className="h-7 w-7 text-primary mb-2" />
          <h3 className="text-lg font-bold text-foreground mb-1">Quand ?</h3>
          <p className="text-sm text-foreground/90">
            « Dans les meilleurs délais et au plus tard dans un délai d'<strong>un mois</strong>, qui
            peut être porté à trois mois compte tenu de la complexité. »
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-xl p-5 border border-orange-500/30">
          <Share2 className="h-7 w-7 text-orange-500 mb-2" />
          <h3 className="text-lg font-bold text-foreground mb-1">Et après ?</h3>
          <p className="text-sm text-foreground/90">
            L'organisme doit <strong>répercuter la correction</strong> auprès des destinataires à qui
            les données ont été transmises.
          </p>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-sm text-foreground/90">
        💻 <strong>Côté produit</strong>, le guide RGPD du développeur recommande de permettre la
        modification directe des données depuis le compte de l'utilisateur, et d'indiquer clairement
        comment exercer ses droits.
      </div>

      <div className="bg-muted/50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-bold text-foreground">Les autres droits à connaître</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {otherRights.map((right) => (
            <div key={right.name} className="bg-background/50 rounded-lg p-3">
              <div className="text-sm font-bold text-accent">{right.name}</div>
              <div className="text-xs text-foreground/80">{right.text}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Rectification;
