import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-card border-border shadow-card p-12 text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              404
            </div>
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Looks like this page got lost in cyberspace. The URL you're looking for doesn't exist in our digital realm.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-border hover:bg-card/50">
                <Search className="mr-2 w-5 h-5" />
                Browse Products
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Error Code: {location.pathname}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
