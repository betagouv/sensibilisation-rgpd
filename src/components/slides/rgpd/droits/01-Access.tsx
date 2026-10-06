import { FileSearch, Clock, Euro, IdCard, Ban, ListChecks } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const toCommunicate = [
  "Une copie des données",
  "Les finalités du traitement",
  "Les catégories de données",
  "Les destinataires",
  "La durée de conservation",
  "Les autres droits disponibles",
  "La source (si collecte indirecte)",
  "L'existence d'une décision automatisée",
];

const Slide01Access = () => {
  return (
    <SlideLayout
      title="Le droit d'accès"
      subtitle="Toute personne peut savoir si un organisme détient des données sur elle, et en obtenir une copie (art. 15 RGPD)"
      icon={FileSearch}
      sources={[CNIL.repondreDroitAcces, CNIL.droitsDesPersonnes]}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-bold text-foreground">Ce qu'il faut communiquer</h3>
          </div>
          <ul className="grid grid-cols-1 gap-1.5">
            {toCommunicate.map((item) => (
              <li key={item} className="bg-background/50 rounded-md px-3 py-1.5 text-sm text-foreground">
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="bg-background/50 rounded-xl p-4 border-2 border-primary/20 flex gap-3">
            <Clock className="h-7 w-7 text-primary shrink-0" />
            <div>
              <div className="font-bold text-foreground">Délai : 1 mois maximum</div>
              <div className="text-sm text-muted-foreground">
                Prolongeable de 2 mois si la demande est complexe ou les demandes nombreuses, en
                prévenant la personne dans le premier mois. 8 jours pour les données de santé.
              </div>
            </div>
          </div>
          <div className="bg-background/50 rounded-xl p-4 border-2 border-primary/20 flex gap-3">
            <Euro className="h-7 w-7 text-primary shrink-0" />
            <div>
              <div className="font-bold text-foreground">Gratuit</div>
              <div className="text-sm text-muted-foreground">
                Des « frais raisonnables » ne peuvent être demandés que pour des copies
                supplémentaires ou une demande manifestement excessive.
              </div>
            </div>
          </div>
          <div className="bg-background/50 rounded-xl p-4 border-2 border-primary/20 flex gap-3">
            <IdCard className="h-7 w-7 text-primary shrink-0" />
            <div>
              <div className="font-bold text-foreground">Pas de pièce d'identité systématique</div>
              <div className="text-sm text-muted-foreground">
                L'identité se vérifie « par tout moyen » (compte authentifié, numéro de dossier…).
                Une copie de pièce d'identité seulement en cas de « doute raisonnable ».
              </div>
            </div>
          </div>
          <div className="bg-background/50 rounded-xl p-4 border-2 border-destructive/20 flex gap-3">
            <Ban className="h-7 w-7 text-destructive shrink-0" />
            <div>
              <div className="font-bold text-foreground">Refus possible… mais motivé</div>
              <div className="text-sm text-muted-foreground">
                Pour les demandes « manifestement infondées ou excessives », notamment répétitives.
                Le refus doit être justifié et indiquer les voies de recours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide01Access;
