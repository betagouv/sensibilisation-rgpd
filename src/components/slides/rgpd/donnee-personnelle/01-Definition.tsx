import { UserCircle, BookOpen, Fingerprint, Puzzle, Building } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const Slide01Definition = () => {
  return (
    <SlideLayout
      title="Qu'est-ce qu'une donnée personnelle ?"
      subtitle="Une notion très large, qui va bien au-delà du nom et du prénom"
      icon={UserCircle}
      sources={[CNIL.donneePersonnelle, CNIL.identifierDonnees]}
    >
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Définition CNIL</h3>
        </div>
        <p className="text-foreground/90 text-xl leading-relaxed">
          « Une donnée personnelle est <strong>toute information</strong> se rapportant à une{" "}
          <strong>personne physique identifiée ou identifiable</strong>. »
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
          <div className="flex items-center gap-2 mb-3">
            <UserCircle className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-bold text-foreground">Identification directe</h3>
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-sm text-foreground/90">
            Nom et prénom
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
          <div className="flex items-center gap-2 mb-3">
            <Fingerprint className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-bold text-foreground">Identification indirecte</h3>
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-sm text-foreground/90">
            Numéro de téléphone, plaque d'immatriculation, numéro de sécurité sociale, adresse
            postale ou courriel, voix, image, adresse IP, identifiant de connexion ou de cookie…
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
          <div className="flex items-center gap-2 mb-3">
            <Puzzle className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-bold text-foreground">Par croisement</h3>
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-sm text-foreground/90 italic">
            « Une femme vivant à telle adresse, née tel jour et membre dans telle association »
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4">
        <Building className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-sm text-foreground/90">
          <strong>À l'inverse</strong>, les coordonnées génériques d'une entreprise (raison sociale,
          standard téléphonique, courriel du type <code className="text-accent">contact@…</code>) ne
          sont pas des données personnelles.
        </p>
      </div>
    </SlideLayout>
  );
};

export default Slide01Definition;
