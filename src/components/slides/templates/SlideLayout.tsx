import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import CnilSources, { CnilSource } from "./CnilSources";

interface SlideLayoutProps {
  title: string;
  subtitle?: ReactNode;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  sources?: CnilSource[];
  children: ReactNode;
}

const SlideLayout = ({
  title,
  subtitle,
  icon: Icon,
  iconColor = "text-accent",
  iconBg = "bg-accent/20",
  sources,
  children,
}: SlideLayoutProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 h-full overflow-hidden flex flex-col">
      <div className="space-y-5 animate-fade-in flex-1 flex flex-col min-h-0">
        <div className="flex items-center gap-4">
          <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 ${iconBg} rounded-full`}>
            <Icon className={`h-7 w-7 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
            {subtitle && <p className="text-base text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col gap-4">{children}</div>

        {sources && sources.length > 0 && <CnilSources sources={sources} />}
      </div>
    </div>
  );
};

export default SlideLayout;
