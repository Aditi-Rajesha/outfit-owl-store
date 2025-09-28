import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index component is rendering");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-black">FashionHub Website</h1>
        <p className="text-gray-600">Testing if basic content shows up</p>
      </div>
      {/* Temporarily commenting out components to test
      <Header
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <HeroSection onCategorySelect={handleCategorySelect} />
      <ProductGrid selectedCategory={selectedCategory} />
      <Footer />
      */}
    </div>
  );
};

export default Index;