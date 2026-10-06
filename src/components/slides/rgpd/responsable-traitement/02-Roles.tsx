import { Users, Building2, Server, Handshake, UserCheck } from "lucide-react";
import SlideLayout from "../../templates/SlideLayout";
import { CNIL } from "@/data/cnil-sources";

const roles = [
  {
    icon: Building2,
    color: "text-blue-500",
    bg: "from-blue-500/20 to-blue-500/10",
    border: "border-blue-500/30",
    name: "Responsable de traitement",
    definition: "Détermine les finalités et les moyens du traitement.",
    obligations: [
      "Tenir le registre des traitements",
      "Assurer la sécurité des données",
      "Répondre aux demandes de droits",
    ],
  },
  {
    icon: Server,
    color: "text-purple-500",
    bg: "from-purple-500/20 to-purple-500/10",
    border: "border-purple-500/30",
    name: "Sous-traitant",
    definition: "Traite les données pour le compte et sur instruction du responsable.",
    obligations: [
      "Relation encadrée par un contrat (art. 28)",
      "Respecter les instructions, ne pas réutiliser les données",
      "Garantir la sécurité, alerter en cas de violation",
    ],
  },
  {
    icon: Handshake,
    color: "text-green-500",
    bg: "from-green-500/20 to-green-500/10",
    border: "border-green-500/30",
    name: "Responsables conjoints",
    definition: "Plusieurs organismes déterminent ensemble finalités et moyens.",
    obligations: [
      "Répartir les obligations par écrit",
      "Préciser qui répond aux demandes des personnes",
      "Organiser la gestion des incidents",
    ],
  },
];

const Slide02Roles = () => {
  return (
    <SlideLayout
      title="Qui fait quoi ? Les rôles des acteurs"
      subtitle="La qualification dépend des faits, pas de ce qu'écrit le contrat"
      icon={Users}
      sources={[CNIL.identifierSonRole, CNIL.sousTraitant, CNIL.dpo]}
    >
      <div className="grid md:grid-cols-3 gap-4">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <div key={role.name} className={`bg-gradient-to-br ${role.bg} rounded-xl p-5 border ${role.border} flex flex-col`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`h-6 w-6 ${role.color}`} />
                <h3 className="text-lg font-bold text-foreground leading-tight">{role.name}</h3>
              </div>
              <p className="text-sm text-foreground/90 font-medium mb-3">{role.definition}</p>
              <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside mt-auto">
                {role.obligations.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
          <div className="text-sm font-bold text-foreground mb-2">🧩 Exemple illustratif : un service numérique public</div>
          <ul className="text-sm text-foreground/90 space-y-1">
            <li>
              <strong>Administration porteuse</strong> qui décide de l'objectif et des données
              collectées → <span className="text-blue-500 font-semibold">responsable de traitement</span>
            </li>
            <li>
              <strong>Hébergeur, outil d'envoi d'e-mails, prestataire de développement</strong> qui
              agissent sur instruction → <span className="text-purple-500 font-semibold">sous-traitants</span>
            </li>
          </ul>
        </div>
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 flex gap-3">
          <UserCheck className="h-8 w-8 text-accent shrink-0" />
          <div className="text-sm text-foreground/90">
            <div className="font-bold text-foreground mb-1">Le DPO, votre interlocuteur</div>
            « Chef d'orchestre » de la conformité, le délégué à la protection des données est
            chargé d'« informer et conseiller » l'organisme qui l'a désigné. Sa désignation est obligatoire pour les autorités et
            organismes publics. <strong>Au moindre doute, sollicitez-le.</strong>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Roles;
