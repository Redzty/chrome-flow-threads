import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3); // Mock cart count
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Cart", href: "/cart" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-bg bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center">
                <Star className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-wide">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Serenity
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.slice(0, -1).map((item) => (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className={isActive(item.href) 
                      ? "bg-gradient-primary shadow-button" 
                      : "hover:bg-card/50 hover:border-border"
                    }
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link to="/cart">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="relative hover:bg-card/50"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-primary rounded-full text-xs font-bold text-white flex items-center justify-center shadow-glow">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border bg-card/30 backdrop-blur-md">
              <div className="py-4 space-y-2">
                {navigation.slice(0, -1).map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        isActive(item.href) 
                          ? "bg-gradient-primary shadow-button" 
                          : "hover:bg-card/50"
                      }`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-gradient-primary shadow-glow flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" fill="currentColor" />
                </div>
                <span className="font-bold text-lg">Serenity</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Y2K streetwear for the future generation. Clean, modern apparel with a cyber twist.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Shop</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><Link to="/products" className="hover:text-accent transition-colors">All Products</Link></div>
                <div><Link to="/products" className="hover:text-accent transition-colors">Hoodies</Link></div>
                <div><Link to="/products" className="hover:text-accent transition-colors">T-Shirts</Link></div>
                <div><Link to="/products" className="hover:text-accent transition-colors">Accessories</Link></div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></div>
                <div><a href="#" className="hover:text-accent transition-colors">Contact</a></div>
                <div><a href="#" className="hover:text-accent transition-colors">Size Guide</a></div>
                <div><a href="#" className="hover:text-accent transition-colors">Returns</a></div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-accent transition-colors">Instagram</a></div>
                <div><a href="#" className="hover:text-accent transition-colors">Twitter</a></div>
                <div><a href="#" className="hover:text-accent transition-colors">Discord</a></div>
                <div><a href="#" className="hover:text-accent transition-colors">Newsletter</a></div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024. Serenity Streetwear. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};