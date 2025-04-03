
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-ksdm-navy to-blue-900 text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <p className="mb-8 text-gray-300">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400"
          onClick={() => window.location.href = "/"}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
