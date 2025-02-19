
import { useState } from "react";
import { Heart, ShoppingBag, Star, Percent } from "lucide-react";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import { GripHorizontal, Minimize2, Maximize2 } from "lucide-react";

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isDetached, setIsDetached] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 520, y: window.innerHeight - 720 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const categories = [
    { id: "fashion", name: "Fashion" },
    { id: "beauty", name: "Beauty" },
    { id: "health", name: "Health" },
    { id: "home", name: "Home" },
    { id: "food", name: "Food" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Leopard Print Casual Blouse",
      price: 1299,
      discountedPrice: 899,
      rating: 4.8,
      reviews: 156,
      image: "/lovable-uploads/12b5a587-961d-42b5-980c-4a84c17be256.png",
      category: "fashion"
    },
    {
      id: 2,
      name: "Premium Pearl Necklace 8mm",
      price: 3599,
      discountedPrice: 2799,
      rating: 4.9,
      reviews: 89,
      image: "/lovable-uploads/51bafd88-1a9e-4127-9bd0-83f2679d78dd.png",
      category: "beauty"
    },
    {
      id: 3,
      name: "Family Health Insurance Plus",
      price: 9999,
      discountedPrice: 8499,
      rating: 4.7,
      reviews: 234,
      image: "/lovable-uploads/1253e9de-6b63-4a05-9294-a041df088dc4.png",
      category: "health"
    },
    {
      id: 4,
      name: "Natural Herbal Supplements Set",
      price: 2499,
      discountedPrice: 1899,
      rating: 4.6,
      reviews: 312,
      image: "/lovable-uploads/d3b65959-215a-44de-b51c-a99157ebdb84.png",
      category: "health"
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDetached) {
      setIsDetached(true);
    }
    
    setIsDragging(true);
    const startX = e.pageX - position.x;
    const startY = e.pageY - position.y;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({
        x: Math.min(Math.max(0, e.pageX - startX), window.innerWidth - 500),
        y: Math.min(Math.max(0, e.pageY - startY), window.innerHeight - 700)
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Voice Agent iframe */}
      <div 
        className={`fixed z-50 transition-all duration-300 ${
          isDetached ? '' : 'bottom-0 left-0 right-0'
        }`}
        style={isDetached ? { 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isMinimized ? '200px' : '500px',
          height: isMinimized ? '40px' : '700px',
          cursor: isDragging ? 'grabbing' : 'grab'
        } : {
          width: '100%',
          height: isMinimized ? '40px' : '700px'
        }}
      >
        <div 
          className="bg-white rounded-t-lg shadow-lg p-2 flex items-center justify-between select-none"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <GripHorizontal className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">Voice Agent</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleMinimize}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {isMinimized ? 
                <Maximize2 className="w-4 h-4 text-gray-500" /> : 
                <Minimize2 className="w-4 h-4 text-gray-500" />
              }
            </button>
            <button 
              onClick={() => setIsDetached(!isDetached)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {isDetached ? "📌" : "↗️"}
            </button>
          </div>
        </div>
        {!isMinimized && (
          <ResizablePanelGroup 
            direction="vertical" 
            className="overflow-hidden"
          >
            <ResizablePanel defaultSize={85}>
              <div className="w-full h-full overflow-auto">
                <iframe 
                  src="http://localhost:3005/"
                  className="w-full h-full border-0 rounded-b-lg shadow-lg"
                  allow="microphone"
                />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={15}>
              <div className="w-full h-full bg-white" />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary">Shop Channel</h1>
              <div className="hidden md:flex space-x-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setCurrentCategory(category.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        currentCategory === category.id
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-primary transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 hover:text-primary transition-colors">
                <ShoppingBag className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-2 text-center">Featured Products</h3>
          <p className="text-gray-600 text-center mb-12">Discover our most popular items</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up"
              >
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Percent className="w-4 h-4 mr-1" />
                    {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                    </div>
                    <button className="text-gray-600 hover:text-primary transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                  <h4 className="font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-primary font-semibold">฿{product.discountedPrice.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 line-through">฿{product.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">We're Here to Help</h3>
          <p className="text-gray-600 mb-6">
            24/7 Customer Service: <span className="font-medium">02-1234-999</span>
          </p>
          <div className="flex justify-center space-x-4">
            {["Line", "Facebook", "Instagram", "YouTube"].map((platform) => (
              <button
                key={platform}
                className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
