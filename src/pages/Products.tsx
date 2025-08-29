import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, List } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import hoodie1 from "@/assets/hoodie-1.jpg";
import tshirt1 from "@/assets/tshirt-1.jpg";
import jacket1 from "@/assets/jacket-1.jpg";
import pants1 from "@/assets/pants-1.jpg";

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Cyber Hoodie V1",
      price: 189,
      originalPrice: 249,
      image: hoodie1,
      badge: "Limited",
      category: "hoodies",
      description: "Premium hoodie with Y2K cyber graphics and LED accents",
    },
    {
      id: 2,
      name: "Neon Tee",
      price: 159,
      originalPrice: null,
      image: tshirt1,
      badge: "New",
      category: "tshirts",
      description: "Soft cotton tee with holographic print design",
    },
    {
      id: 3,
      name: "Tech Jacket",
      price: 239,
      originalPrice: 289,
      image: jacket1,
      badge: "Sale",
      category: "jackets",
      description: "Waterproof tech jacket with reflective details",
    },
    {
      id: 4,
      name: "Cyber Cargo Pants",
      price: 179,
      originalPrice: null,
      image: pants1,
      badge: "Popular",
      category: "pants",
      description: "Tactical cargo pants with tech wear aesthetic",
    },
    {
      id: 5,
      name: "Matrix Hoodie",
      price: 199,
      originalPrice: null,
      image: hoodie1,
      badge: "New",
      category: "hoodies",
      description: "Black hoodie with green matrix-style code print",
    },
    {
      id: 6,
      name: "Digital Tee",
      price: 149,
      originalPrice: 189,
      image: tshirt1,
      badge: "Sale",
      category: "tshirts",
      description: "Oversized tee with pixelated graphics",
    },
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'hoodies', label: 'Hoodies' },
    { value: 'tshirts', label: 'T-Shirts' },
    { value: 'jackets', label: 'Jackets' },
    { value: 'pants', label: 'Pants' },
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Shop Collection
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover our full range of Y2K streetwear essentials
          </p>
        </div>

        {/* Filters & Controls */}
        <div className="mb-8">
          <Card className="bg-card/50 border-border p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px] bg-background border-border">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] bg-background border-border">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-gradient-primary shadow-button' : 'border-border'}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-gradient-primary shadow-button' : 'border-border'}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Product Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className={`bg-gradient-card border-border shadow-card overflow-hidden hover:shadow-glow transition-all duration-300 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full aspect-square'
                  }`}
                />
                <Badge className="absolute top-3 left-3 bg-gradient-secondary text-black border-0">
                  {product.badge}
                </Badge>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  {viewMode === 'list' && (
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-accent">{product.price} SEK</span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through">{product.originalPrice} SEK</span>
                    )}
                  </div>
                </div>
                
                <div className={`flex gap-2 ${viewMode === 'list' ? 'w-fit' : ''}`}>
                  <Button 
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        size: 'M',
                        color: 'Default'
                      });
                      toast({
                        title: "Added to cart!",
                        description: `${product.name} has been added to your cart.`,
                      });
                    }}
                    className={`bg-gradient-primary shadow-button hover:shadow-glow transition-all duration-300 ${
                      viewMode === 'list' ? 'flex-1' : 'w-full'
                    }`}
                  >
                    Add to Cart
                  </Button>
                  {viewMode === 'list' && (
                    <Button variant="outline" className="border-border hover:bg-card/50">
                      Quick View
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-card/50"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}