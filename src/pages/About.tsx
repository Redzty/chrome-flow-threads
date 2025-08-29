import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Zap, Heart, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { label: "Happy Customers", value: "10K+" },
    { label: "Products Sold", value: "25K+" },
    { label: "Countries", value: "15+" },
    { label: "Years Experience", value: "3+" },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We're constantly pushing the boundaries of streetwear design with cutting-edge aesthetics.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by and for the digital generation who values authenticity and self-expression.",
    },
    {
      icon: Zap,
      title: "Quality Promise",
      description: "Premium materials and craftsmanship in every piece we create.",
    },
    {
      icon: Heart,
      title: "Sustainable Future",
      description: "Committed to ethical production and reducing our environmental impact.",
    },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      description: "Former designer at major streetwear brands, leading our Y2K aesthetic revolution.",
    },
    {
      name: "Maya Rodriguez",
      role: "Head of Design",
      description: "Digital artist turned fashion designer, specializing in cyber-punk influences.",
    },
    {
      name: "Jordan Kim",
      role: "Brand Manager",
      description: "Community builder and trend forecaster, keeping us connected to our audience.",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <Badge className="bg-gradient-primary text-white border-0 shadow-glow mb-6">
            ✨ Our Story
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Redefining
            </span>
            <br />
            Streetwear
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Serenity was born from a vision to bridge the gap between digital culture and physical fashion. 
            We're not just making clothes—we're crafting the uniform for the next generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300">
                Shop Our Vision
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-border hover:bg-card/50">
              <Mail className="mr-2 w-4 h-4" />
              Contact Us
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card p-8 text-center">
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                In a world where digital and physical realities blur, fashion needs to evolve. 
                We're creating apparel that speaks to the cyber-native generation—those who grew up 
                online and see technology not as a tool, but as an extension of themselves.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every piece we design carries the essence of Y2K nostalgia mixed with contemporary 
                streetwear sensibilities. We're not just following trends; we're creating the 
                aesthetic vocabulary for tomorrow's fashion.
              </p>
              <Link to="/products">
                <Button className="bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300">
                  Explore Collection
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-hero border-border shadow-card p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Future Fashion</h3>
                  <p className="text-muted-foreground">
                    Where technology meets textile, where digital dreams become wearable reality.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The creative minds behind Serenity, bringing together diverse perspectives from fashion, tech, and digital culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card p-8 text-center hover:shadow-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <Badge variant="outline" className="border-accent text-accent mb-4">
                  {member.role}
                </Badge>
                <p className="text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <Card className="bg-gradient-hero border-border shadow-card p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions, feedback, or just want to chat about the future of fashion? 
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300">
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-card/50">
                <MessageCircle className="mr-2 w-5 h-5" />
                Join Discord
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}