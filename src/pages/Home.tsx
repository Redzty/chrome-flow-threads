import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import hoodie1 from "@/assets/hoodie-1.jpg";
import tshirt1 from "@/assets/tshirt-1.jpg";
import jacket1 from "@/assets/jacket-1.jpg";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Cyber Hoodie V1",
      price: 89,
      originalPrice: 119,
      image: hoodie1,
      badge: "Limited",
    },
    {
      id: 2,
      name: "Neon Tee",
      price: 45,
      originalPrice: null,
      image: tshirt1,
      badge: "New",
    },
    {
      id: 3,
      name: "Tech Jacket",
      price: 149,
      originalPrice: 189,
      image: jacket1,
      badge: "Sale",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "High-grade materials with Y2K aesthetic design",
    },
    {
      icon: Zap,
      title: "Future Fashion",
      description: "Cutting-edge streetwear for the digital generation",
    },
    {
      icon: Shield,
      title: "Authentic Gear",
      description: "100% original designs crafted for style rebels",
    },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-primary text-white border-0 shadow-glow">
                  ✨ Y2K Collection Drop
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-pulse">
                    Future
                  </span>
                  <br />
                  Streetwear
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-md">
                  Minimal, modern apparel with a cyber twist. Shop tees, hoodies, 
                  and accessories for the digital generation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300">
                    Shop Collection
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-border hover:bg-card/50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card border-border shadow-card p-6">
                <img 
                  src={hoodie1} 
                  alt="Featured Hoodie" 
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h3 className="font-semibold">Cyber Hoodie V1</h3>
                    <p className="text-muted-foreground">Limited Edition</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-accent">$89</p>
                    <p className="text-sm text-muted-foreground line-through">$119</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Serenity</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We're not just another clothing brand. We're building the future of streetwear.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card p-8 text-center hover:shadow-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">Featured Drops</h2>
              <p className="text-muted-foreground">Latest from our Y2K collection</p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="border-border hover:bg-card/50">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bg-gradient-card border-border shadow-card overflow-hidden hover:shadow-glow transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-gradient-secondary text-black border-0">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-accent">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button className="w-full bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero border-border shadow-card p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Level Up Your Style?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the digital fashion revolution. Get exclusive access to new drops and member-only discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300">
                  Shop Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-border hover:bg-card/50">
                Join Newsletter
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}