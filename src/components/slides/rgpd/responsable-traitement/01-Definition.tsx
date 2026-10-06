import { Building2, BookOpen, Workflow, Target, Wrench } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const operations = [
  "Collecte",
  "Enregistrement",
  "Organisation",
  "Conservation",
  "Modification",
  "Extraction",
  "Consultation",
  "Utilisation",
  "Communication",
];

const Slide01Definition = () => {
  return (
    <SlideLayout
      title="Qu'est-ce que le responsable de traitement ?"
      subtitle="Celui qui décide du « pourquoi » et du « comment »"
      icon={Building2}
      sources={[CNIL.traitement, CNIL.responsableTraitement, CNIL.identifierSonRole]}
    >
      <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
        <div className="flex items-center gap-2 mb-2">
          <Workflow className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-bold text-foreground">D'abord : un « traitement » ?</h3>
        </div>
        <p className="text-foreground/90 mb-3">
          « Une opération, ou ensemble d'opérations, portant sur des données personnelles,{" "}
          <strong>quel que soit le procédé utilisé</strong>. » Un fichier papier est aussi un
          traitement.
        </p>
        <div className="flex flex-wrap gap-2">
          {operations.map((op) => (
            <span key={op} className="bg-background/50 rounded-full px-3 py-1 text-sm text-foreground">
              {op}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Définition CNIL du responsable de traitement</h3>
        </div>
        <p className="text-foreground/90 text-xl leading-relaxed">
          « La personne morale (entreprise, commune, etc.) ou physique qui{" "}
          <strong>détermine les finalités et les moyens</strong> d'un traitement. »
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          En pratique, c'est en général l'organisme, représenté par son représentant légal — pas
          l'agent ou le développeur à titre individuel.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-background/50 rounded-xl p-4 border-2 border-accent/20 flex gap-3">
          <Target className="h-8 w-8 text-accent shrink-0" />
          <div>
            <div className="font-bold text-foreground">Finalités = le « pourquoi »</div>
            <div className="text-sm text-muted-foreground">
              L'objectif poursuivi : instruire une demande d'aide, gérer la paie, envoyer une lettre
              d'information…
            </div>
          </div>
        </div>
        <div className="bg-background/50 rounded-xl p-4 border-2 border-accent/20 flex gap-3">
          <Wrench className="h-8 w-8 text-accent shrink-0" />
          <div>
            <div className="font-bold text-foreground">Moyens = le « comment »</div>
            <div className="text-sm text-muted-foreground">
              Notamment les moyens essentiels : quelles données collecter, combien de temps les
              conserver, à qui les transmettre.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide01Definition;
