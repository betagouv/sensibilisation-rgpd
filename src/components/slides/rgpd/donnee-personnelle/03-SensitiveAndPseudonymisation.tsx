import { AlertTriangle, EyeOff, Shuffle } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const sensitiveCategories = [
  "Origine raciale ou ethnique",
  "Opinions politiques",
  "Convictions religieuses ou philosophiques",
  "Appartenance syndicale",
  "Données génétiques",
  "Données biométriques (identification unique)",
  "Données de santé",
  "Vie sexuelle ou orientation sexuelle",
];

const Slide03SensitiveAndPseudonymisation = () => {
  return (
    <SlideLayout
      title="Données sensibles, pseudonymisation, anonymisation"
      subtitle="Certaines données demandent une vigilance renforcée"
      icon={AlertTriangle}
      iconColor="text-destructive"
      iconBg="bg-destructive/20"
      sources={[CNIL.donneeSensible, CNIL.anonymisation, CNIL.identifierDonnees]}
    >
      <div className="bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-xl p-5 border border-destructive/30">
        <h3 className="text-lg font-bold text-foreground mb-1">Les données sensibles</h3>
        <p className="text-sm text-foreground/80 mb-3">
          Leur traitement est <strong>interdit par principe</strong>, sauf exceptions (consentement
          explicite, données rendues publiques par la personne, sauvegarde de la vie humaine, intérêt
          public en santé…).
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {sensitiveCategories.map((category) => (
            <div key={category} className="bg-background/50 rounded-lg px-3 py-2 text-sm text-foreground text-center">
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-xl p-5 border border-orange-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Shuffle className="h-6 w-6 text-orange-500" />
            <h3 className="text-lg font-bold text-foreground">Pseudonymisation</h3>
          </div>
          <p className="text-sm text-foreground/90 mb-2">
            On ne peut plus attribuer les données à une personne « sans avoir recours à des
            informations supplémentaires ».
          </p>
          <ul className="text-sm text-foreground/90 space-y-1">
            <li>↩️ Processus <strong>réversible</strong></li>
            <li>⚠️ Les données <strong>restent personnelles</strong> : le RGPD s'applique</li>
            <li>🔐 La clé de correspondance doit être conservée séparément</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl p-5 border border-green-500/30">
          <div className="flex items-center gap-2 mb-2">
            <EyeOff className="h-6 w-6 text-green-500" />
            <h3 className="text-lg font-bold text-foreground">Anonymisation</h3>
          </div>
          <p className="text-sm text-foreground/90 mb-2">
            Rendre impossible, en pratique, toute identification de la personne, par quelque moyen
            que ce soit et de manière irréversible.
          </p>
          <ul className="text-sm text-foreground/90 space-y-1">
            <li>🚫 Processus <strong>irréversible</strong></li>
            <li>✅ Si elle est effective, le RGPD <strong>ne s'applique plus</strong></li>
            <li>🧪 Difficile à atteindre : le croisement de données suffit souvent à ré-identifier</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide03SensitiveAndPseudonymisation;
