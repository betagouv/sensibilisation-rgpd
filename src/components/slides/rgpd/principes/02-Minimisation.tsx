import { Minimize2, XCircle, CheckCircle2 } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

interface Field {
  label: string;
  value: string;
  comment?: string;
}

const before: Field[] = [
  { label: "Nom", value: "Dupont" },
  { label: "Prénom", value: "Marie" },
  { label: "Date de naissance", value: "14/03/1987", comment: "Seule l'année est utile ici" },
  { label: "Situation familiale", value: "Mariée", comment: "Sans lien avec l'objectif" },
  { label: "N° de sécurité sociale", value: "2 87 03 75 …", comment: "Non nécessaire" },
  { label: "Commentaire libre", value: "« Suivie pour un diabète… »", comment: "Risque de données sensibles" },
];

const after: Field[] = [
  { label: "Nom", value: "Dupont" },
  { label: "Prénom", value: "Marie" },
  { label: "Année de naissance", value: "1987" },
  { label: "Courriel", value: "marie.dupont@exemple.fr" },
];

const FormMock = ({ fields, variant }: { fields: Field[]; variant: "bad" | "good" }) => (
  <div className="space-y-2">
    {fields.map((f) => (
      <div key={f.label}>
        <div className="text-xs text-muted-foreground mb-0.5">{f.label}</div>
        <div
          className={`rounded-md border px-3 py-1.5 text-sm font-mono ${
            variant === "bad" && f.comment
              ? "border-destructive/60 bg-destructive/10 text-destructive"
              : "border-border bg-background text-foreground"
          }`}
        >
          {f.value}
        </div>
        {variant === "bad" && f.comment && (
          <div className="text-[11px] text-destructive mt-0.5">↳ {f.comment}</div>
        )}
      </div>
    ))}
  </div>
);

const Slide02Minimisation = () => {
  return (
    <SlideLayout
      title="Focus : la minimisation"
      subtitle="« Ne collectez que les données vraiment nécessaires pour atteindre votre objectif »"
      icon={Minimize2}
      sources={[CNIL.minimisation, CNIL.devMinimiser, CNIL.sixPrincipes]}
    >
      <div className="text-sm text-foreground/90 text-center">
        Exemple : formulaire d'inscription à une lettre d'information annuelle réservée aux personnes
        nées avant une certaine année.
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-xl p-5 border border-destructive/30">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="h-6 w-6 text-destructive" />
            <h3 className="text-lg font-bold text-foreground">Collecte « au cas où »</h3>
          </div>
          <FormMock fields={before} variant="bad" />
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl p-5 border border-green-500/30 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            <h3 className="text-lg font-bold text-foreground">Collecte minimisée</h3>
          </div>
          <FormMock fields={after} variant="good" />
          <ul className="text-sm text-foreground/90 space-y-1 mt-4 list-disc list-inside">
            <li>Réduire la précision : l'année plutôt que la date complète</li>
            <li>Éviter les champs libres, qui attirent les données sensibles</li>
            <li>Rendre optionnel ce qui n'est pas indispensable</li>
            <li>Ne pas journaliser de données sensibles dans les logs</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Minimisation;
