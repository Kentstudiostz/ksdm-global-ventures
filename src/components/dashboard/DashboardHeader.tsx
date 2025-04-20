
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

const DashboardHeader = ({
  title,
  description,
  actions,
  className
}: DashboardHeaderProps) => {
  return (
    <header className={cn("bg-white border-b px-6 py-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        
        {actions ? (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        ) : (
          <Button variant="outline" asChild>
            <Link to="/" target="_blank">
              View Store
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
