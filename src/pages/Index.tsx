
import { useState } from "react";
import { Heart, ShoppingBag, Star, Youtube } from "lucide-react";

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const categories = [
    { id: "fashion", name: "Fashion" },
    { id: "beauty", name: "Beauty" },
    { id: "health", name: "Health" },
    { id: "home", name: "Home" },
    { id: "food", name: "Food" },
  ];

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section with Live Stream */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-pink-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Live Shopping Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Watch our 24/7 live stream and shop the latest trends
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors inline-flex items-center">
                <Youtube className="w-5 h-5 mr-2" />
                Watch Live
              </button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <div className="aspect-video bg-gray-100">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/live_stream?channel=UC_YOUR_CHANNEL_ID"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              >
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img
                    src={`/placeholder.svg`}
                    alt="Product"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">4.5</span>
                  </div>
                  <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    Product Name
                  </h4>
                  <p className="text-gray-600">$99.99</p>
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
