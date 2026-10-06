import { useState } from "react";
import { Mail, Route, Inbox, IdCard, Search, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const steps = [
  {
    icon: Inbox,
    when: "Dès réception",
    title: "Réception",
    text: "La demande peut arriver par n'importe quel canal (e-mail, formulaire, courrier, support). Elle doit être transmise sans attendre au bon interlocuteur (DPO, référent).",
  },
  {
    icon: IdCard,
    when: "Avant toute communication",
    title: "Vérification de l'identité",
    text: "Par tout moyen proportionné : compte authentifié, numéro de dossier… Une pièce d'identité seulement en cas de doute raisonnable.",
  },
  {
    icon: Search,
    when: "Dans tous les systèmes",
    title: "Recherche des données",
    text: "Base de production, sauvegardes, outils tiers et sous-traitants (CRM, support, outil d'e-mailing…). Mettre en œuvre la correction s'il s'agit d'une rectification.",
  },
  {
    icon: Send,
    when: "≤ 1 mois",
    title: "Réponse",
    text: "Une réponse claire et compréhensible, dans le délai d'un mois. Prolongation de 2 mois possible si la demande est complexe, à condition de prévenir la personne dans le premier mois.",
  },
];

const Slide03RequestProcess = () => {
  const [revealed, setRevealed] = useState(0);

  return (
    <SlideLayout
      title="Mise en situation : une demande arrive"
      subtitle="Comment traiter la demande d'un usager, étape par étape"
      icon={Route}
      sources={[CNIL.repondreDroitAcces, CNIL.droitRectification, CNIL.devDroits]}
    >
      <div className="bg-muted/50 rounded-xl p-4 border-l-4 border-l-primary">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">Message reçu au support</span>
        </div>
        <p className="text-sm text-foreground/90 italic">
          « Bonjour, je souhaite savoir quelles données vous détenez sur moi. Par ailleurs, mon
          adresse postale a changé, merci de la mettre à jour. Cordialement, Camille M. »
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-3 flex-1">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isVisible = index < revealed;
          return (
            <div
              key={step.title}
              className={`rounded-xl p-4 border-2 transition-all ${
                isVisible
                  ? "bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30 animate-fade-in"
                  : "bg-background/30 border-dashed border-border"
              }`}
            >
              {isVisible ? (
                <>
                  <div className="text-xs font-mono text-accent mb-1">{step.when}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-accent" />
                    <div className="font-bold text-foreground">{step.title}</div>
                  </div>
                  <p className="text-sm text-foreground/90">{step.text}</p>
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-3xl text-muted-foreground">
                  {index + 1}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-3">
        {revealed < steps.length ? (
          <Button onClick={() => setRevealed((r) => r + 1)} className="gap-2">
            Étape suivante
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setRevealed(0)}>
            Recommencer
          </Button>
        )}
      </div>
    </SlideLayout>
  );
};

export default Slide03RequestProcess;
