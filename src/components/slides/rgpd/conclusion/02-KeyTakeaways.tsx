import { Lightbulb, BookOpen } from "lucide-react";
import { CNIL } from "@/data/cnil-sources";

const takeaways = [
  { emoji: "👤", title: "Donnée personnelle", text: "Toute information sur une personne identifiable, même indirectement (IP, hash, voix…)." },
  { emoji: "🏛️", title: "Responsable de traitement", text: "Il décide du pourquoi et du comment. Les prestataires sont des sous-traitants encadrés par contrat." },
  { emoji: "⏳", title: "Conservation", text: "Une durée définie par finalité, puis archivage restreint, puis suppression ou anonymisation." },
  { emoji: "📬", title: "Droits", text: "Accès et rectification : réponse en 1 mois, gratuitement, sans exiger de pièce d'identité par défaut." },
  { emoji: "✂️", title: "Minimisation", text: "Ne collecter que ce qui est nécessaire à l'objectif. Dans le doute, ne pas collecter." },
  { emoji: "🙋", title: "Réflexe", text: "Une question, une demande d'usager, un incident ? Contacter le DPO." },
];

const resources = [CNIL.guideDeveloppeur, CNIL.sixPrincipes, CNIL.guideDureesConservation, CNIL.repondreDroitAcces, CNIL.securite];

const Slide02KeyTakeaways = () => {
  return (
    <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 h-full overflow-hidden flex flex-col">
      <div className="space-y-4 animate-fade-in flex-1 flex flex-col justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2">
            <Lightbulb className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">À retenir</h2>
        </div>

        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-3 gap-4">
          {takeaways.map((t) => (
            <div
              key={t.title}
              className="bg-background/50 rounded-lg p-3 text-center border-2 border-accent/20 hover:border-accent/50 transition-colors"
            >
              <div className="text-3xl mb-1">{t.emoji}</div>
              <div className="text-lg font-bold text-foreground mb-1">{t.title}</div>
              <div className="text-sm text-muted-foreground">{t.text}</div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto w-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-4 border-2 border-primary/30">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="h-7 w-7 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Pour aller plus loin sur cnil.fr</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-accent/90 transition-colors"
              >
                📖 {r.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide02KeyTakeaways;
