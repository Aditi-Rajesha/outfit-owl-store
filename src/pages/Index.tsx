import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <HeroSection onCategorySelect={handleCategorySelect} />
      <ProductGrid selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default Index;