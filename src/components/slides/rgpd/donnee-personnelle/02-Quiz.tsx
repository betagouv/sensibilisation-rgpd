import { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

interface QuizItem {
  label: string;
  isPersonal: boolean;
  explanation: string;
}

const items: QuizItem[] = [
  {
    label: "marie.dupont@exemple.fr",
    isPersonal: true,
    explanation: "Une adresse courriel nominative identifie directement la personne.",
  },
  {
    label: "contact@entreprise.fr",
    isPersonal: false,
    explanation: "Courriel générique d'une entreprise : pas une donnée personnelle.",
  },
  {
    label: "Adresse IP 192.0.2.42",
    isPersonal: true,
    explanation: "La CNIL cite l'adresse IP parmi les données permettant une identification indirecte.",
  },
  {
    label: "AB-123-CD (immatriculation)",
    isPersonal: true,
    explanation: "Une plaque d'immatriculation permet d'identifier indirectement le propriétaire.",
  },
  {
    label: "Hash SHA-256 de l'e-mail",
    isPersonal: true,
    explanation:
      "Donnée pseudonymisée : la CNIL rappelle qu'elle reste une donnée personnelle soumise au RGPD.",
  },
  {
    label: "Enregistrement de la voix",
    isPersonal: true,
    explanation: "La voix fait partie des exemples d'identification indirecte cités par la CNIL.",
  },
  {
    label: "Standard téléphonique d'une entreprise",
    isPersonal: false,
    explanation: "Coordonnées génériques d'une personne morale : pas une donnée personnelle.",
  },
  {
    label: "Statistique réellement anonymisée",
    isPersonal: false,
    explanation:
      "Si l'anonymisation est effective et irréversible, le RGPD ne s'applique plus.",
  },
];

type Answer = "yes" | "no";

const Slide02Quiz = () => {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const answer = (index: number, value: Answer) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const answeredCount = Object.keys(answers).length;
  const score = items.filter(
    (item, i) => answers[i] && (answers[i] === "yes") === item.isPersonal
  ).length;

  return (
    <SlideLayout
      title="Quiz : donnée personnelle ou pas ?"
      subtitle="Cliquez sur « Oui » ou « Non » pour chaque élément"
      icon={HelpCircle}
      sources={[CNIL.donneePersonnelle, CNIL.identifierDonnees, CNIL.anonymisation]}
    >
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((item, index) => {
          const given = answers[index];
          const isCorrect = given && (given === "yes") === item.isPersonal;
          return (
            <div
              key={item.label}
              className={`rounded-xl p-3 border-2 transition-colors ${
                !given
                  ? "border-border bg-background/50"
                  : isCorrect
                    ? "border-green-500/50 bg-green-500/10"
                    : "border-destructive/50 bg-destructive/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-foreground">{item.label}</span>
                {!given ? (
                  <div className="flex gap-2 shrink-0">
                    <Button size="sm" variant="outline" onClick={() => answer(index, "yes")}>
                      Oui
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => answer(index, "no")}>
                      Non
                    </Button>
                  </div>
                ) : isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive shrink-0" />
                )}
              </div>
              {given && (
                <p className="text-xs text-foreground/80 mt-2 animate-fade-in">
                  <strong>{item.isPersonal ? "Donnée personnelle" : "Pas une donnée personnelle"}</strong>
                  {" — "}
                  {item.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {answeredCount > 0 && (
        <div className="flex items-center justify-center gap-4">
          <span className="text-lg font-semibold text-foreground">
            Score : <span className="text-accent">{score}</span> / {answeredCount}
          </span>
          <Button size="sm" variant="ghost" className="gap-2" onClick={() => setAnswers({})}>
            <RotateCcw className="h-4 w-4" />
            Recommencer
          </Button>
        </div>
      )}
    </SlideLayout>
  );
};

export default Slide02Quiz;
