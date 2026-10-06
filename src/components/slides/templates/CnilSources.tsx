import { ExternalLink } from "lucide-react";

export interface CnilSource {
  label: string;
  url: string;
}

interface CnilSourcesProps {
  sources: CnilSource[];
}

// Bloc de sources affiché en pied de chaque slide : la référence est le site de la CNIL
const CnilSources = ({ sources }: CnilSourcesProps) => {
  return (
    <div className="border-t border-border pt-3 mt-auto">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="font-semibold uppercase tracking-wide">Sources</span>
        {sources.map((source) => (
          <a
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            {source.label}
            <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CnilSources;
