import { ShieldCheck, Clock, UserCircle, Building2, Hourglass, FileSearch, Scale } from "lucide-react";
import CnilSources from "../../templates/CnilSources";
import { CNIL } from "@/data/cnil-sources";

const agenda = [
  { icon: UserCircle, label: "Qu'est-ce qu'une donnée personnelle ?" },
  { icon: Building2, label: "Qu'est-ce que le responsable de traitement ?" },
  { icon: Hourglass, label: "Durée de conservation des données" },
  { icon: FileSearch, label: "Droits d'accès et de rectification" },
  { icon: Scale, label: "Les grands principes : minimisation…" },
];

const Slide01Title = () => {
  return (
    <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 h-full overflow-hidden flex flex-col">
      <div className="space-y-8 animate-fade-in flex-1 flex flex-col justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-4">
            <ShieldCheck className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Sensibilisation RGPD
          </h1>
          <p className="text-xl text-muted-foreground">
            Protéger les données personnelles au quotidien
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-foreground">
            <Clock className="h-4 w-4 text-primary" />
            30 minutes · Référence : <strong>cnil.fr</strong>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-6 border border-accent/30">
          <h3 className="text-lg font-bold text-foreground mb-4">Au programme</h3>
          <ol className="space-y-3">
            {agenda.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center gap-3 bg-background/50 rounded-lg px-4 py-2">
                  <span className="text-accent font-bold w-6">{index + 1}.</span>
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="text-foreground">{item.label}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <CnilSources sources={[CNIL.rgpdDeQuoiParleTOn]} />
    </div>
  );
};

export default Slide01Title;
