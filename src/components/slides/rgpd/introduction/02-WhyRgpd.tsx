import { BookOpen, Globe, Gavel, Users } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const Slide02WhyRgpd = () => {
  return (
    <SlideLayout
      title="Le RGPD, de quoi parle-t-on ?"
      subtitle="Règlement général sur la protection des données, applicable depuis le 25 mai 2018"
      icon={BookOpen}
      sources={[CNIL.rgpdDeQuoiParleTOn, CNIL.sanctions]}
    >
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-5 border border-primary/30">
          <Globe className="h-8 w-8 text-primary mb-3" />
          <h3 className="text-lg font-bold text-foreground mb-2">Pour qui ?</h3>
          <p className="text-sm text-foreground/90">
            À « toute organisation, <strong>publique et privée</strong>, qui traite des données
            personnelles », dès lors qu'elle est établie dans l'UE ou que son activité cible des
            résidents européens. Les administrations sont donc concernées.
          </p>
        </div>
        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30">
          <Users className="h-8 w-8 text-accent mb-3" />
          <h3 className="text-lg font-bold text-foreground mb-2">Pourquoi ?</h3>
          <p className="text-sm text-foreground/90">
            Il « renforce le contrôle par les citoyens de l'utilisation qui peut être faite des
            données les concernant » et « harmonise les règles en Europe ».
          </p>
        </div>
        <div className="bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-xl p-5 border border-destructive/30">
          <Gavel className="h-8 w-8 text-destructive mb-3" />
          <h3 className="text-lg font-bold text-foreground mb-2">Quels risques ?</h3>
          <p className="text-sm text-foreground/90">
            Amendes administratives de la CNIL jusqu'à :
          </p>
          <ul className="text-sm text-foreground/90 mt-2 space-y-1">
            <li>
              <strong className="text-destructive">20 M€ ou 4 %</strong> du CA annuel mondial pour les
              manquements les plus graves (principes, droits des personnes…)
            </li>
            <li>
              <strong className="text-destructive">10 M€ ou 2 %</strong> pour les autres manquements
            </li>
          </ul>
          <p className="text-xs text-muted-foreground mt-2">
            La CNIL peut aussi prononcer un rappel à l'ordre ou une injonction sous astreinte, ou
            limiter un traitement.
          </p>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <p className="text-foreground/90 text-base leading-relaxed text-center">
          💡 Le RGPD n'est pas seulement l'affaire des juristes : <strong>chaque personne</strong> qui
          conçoit, développe ou utilise un service manipulant des données personnelles est concernée.
        </p>
      </div>
    </SlideLayout>
  );
};

export default Slide02WhyRgpd;
