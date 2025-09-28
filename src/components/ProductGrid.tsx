import ProductCard, { Product } from "./ProductCard";
import menShirt from "@/assets/men-shirt.jpg";
import womenDress from "@/assets/women-dress.jpg";
import kidsTshirt from "@/assets/kids-tshirt.jpg";
import sneakers from "@/assets/sneakers.jpg";

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const allProducts: Product[] = [
    {
      id: "1",
      name: "Classic Cotton Shirt",
      brand: "Urban Style",
      price: 1299,
      originalPrice: 1999,
      rating: 4.2,
      category: "men",
      image: menShirt,
    },
    {
      id: "2",
      name: "Elegant Summer Dress",
      brand: "Fashion Forward",
      price: 2499,
      originalPrice: 3499,
      rating: 4.5,
      category: "women",
      image: womenDress,
    },
    {
      id: "3",
      name: "Comfortable Kids T-Shirt",
      brand: "Little Ones",
      price: 599,
      originalPrice: 899,
      rating: 4.8,
      category: "kids",
      image: kidsTshirt,
    },
    {
      id: "4",
      name: "Premium Sneakers",
      brand: "Sport Style",
      price: 3999,
      originalPrice: 5999,
      rating: 4.3,
      category: "men",
      image: sneakers,
    },
    {
      id: "5",
      name: "Business Casual Shirt",
      brand: "Professional",
      price: 1799,
      originalPrice: 2499,
      rating: 4.1,
      category: "men",
      image: menShirt,
    },
    {
      id: "6",
      name: "Trendy Party Dress",
      brand: "Night Out",
      price: 3299,
      originalPrice: 4999,
      rating: 4.6,
      category: "women",
      image: womenDress,
    },
    {
      id: "7",
      name: "Casual Kids Wear",
      brand: "Playful",
      price: 799,
      originalPrice: 1199,
      rating: 4.4,
      category: "kids",
      image: kidsTshirt,
    },
    {
      id: "8",
      name: "Running Shoes",
      brand: "Athletic Pro",
      price: 4499,
      originalPrice: 6999,
      rating: 4.7,
      category: "women",
      image: sneakers,
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case "men":
        return "Men's Collection";
      case "women":
        return "Women's Collection";
      case "kids":
        return "Kids' Collection";
      default:
        return "All Products";
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">{getCategoryTitle()}</h2>
        <p className="text-muted-foreground">
          {filteredProducts.length} items available
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;