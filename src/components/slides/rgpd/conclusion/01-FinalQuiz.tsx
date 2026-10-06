import { useState } from "react";
import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "Un identifiant pseudonymisé (hash de l'e-mail) est-il une donnée personnelle ?",
    options: ["Oui", "Non"],
    correct: 0,
    explanation: "La pseudonymisation est réversible : les données restent soumises au RGPD.",
  },
  {
    question: "Qui détermine les finalités et les moyens d'un traitement ?",
    options: ["Le sous-traitant", "Le responsable de traitement", "Le développeur"],
    correct: 1,
    explanation: "C'est la définition même du responsable de traitement.",
  },
  {
    question: "Un usager exerce son droit d'accès. Délai de réponse de principe ?",
    options: ["8 jours", "1 mois", "3 mois"],
    correct: 1,
    explanation: "1 mois, prolongeable de 2 mois si la demande est complexe (8 jours pour les données de santé).",
  },
  {
    question: "Peut-on exiger systématiquement une copie de pièce d'identité ?",
    options: ["Oui", "Non"],
    correct: 1,
    explanation: "Uniquement en cas de doute raisonnable sur l'identité du demandeur.",
  },
  {
    question: "Le formulaire demande la date de naissance complète alors que seule l'année sert. Quel principe est en jeu ?",
    options: ["Exactitude", "Minimisation", "Portabilité"],
    correct: 1,
    explanation: "Réduire la précision des données collectées est un exemple de minimisation donné par la CNIL.",
  },
];

const Slide01FinalQuiz = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const score = questions.filter((q, i) => answers[i] === q.correct).length;
  const done = Object.keys(answers).length === questions.length;

  return (
    <SlideLayout
      title="Quiz final"
      subtitle="5 questions pour vérifier les acquis"
      icon={Trophy}
      sources={[CNIL.identifierDonnees, CNIL.responsableTraitement, CNIL.repondreDroitAcces, CNIL.devMinimiser]}
    >
      <div className="space-y-3">
        {questions.map((q, qi) => {
          const given = answers[qi];
          const hasAnswered = given !== undefined;
          return (
            <div key={q.question} className="bg-background/50 rounded-xl p-4 border border-border">
              <div className="font-semibold text-foreground mb-2">
                {qi + 1}. {q.question}
              </div>
              <div className="flex flex-wrap gap-2">
                {q.options.map((option, oi) => {
                  const isCorrect = oi === q.correct;
                  const isChosen = given === oi;
                  let style = "border-border hover:border-accent/50";
                  if (hasAnswered && isCorrect) style = "border-green-500 bg-green-500/10 text-green-600";
                  else if (hasAnswered && isChosen) style = "border-destructive bg-destructive/10 text-destructive";
                  return (
                    <button
                      key={option}
                      disabled={hasAnswered}
                      onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                      className={`px-4 py-1.5 rounded-lg border-2 text-sm transition-colors ${style}`}
                    >
                      {option}
                    </button>
                  );
                })}
                {hasAnswered && (
                  <span className="flex items-center gap-1 text-xs text-foreground/80 animate-fade-in">
                    {given === q.correct ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-destructive" />
                    )}
                    {q.explanation}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {done && (
        <div className="text-center text-xl font-bold text-foreground animate-fade-in">
          🎉 Score : <span className="text-accent">{score}</span> / {questions.length}
        </div>
      )}
    </SlideLayout>
  );
};

export default Slide01FinalQuiz;
