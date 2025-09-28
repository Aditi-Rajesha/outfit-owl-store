import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: "men" | "women" | "kids";
  image: string;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "men":
        return "category-men";
      case "women":
        return "category-women";
      case "kids":
        return "category-kids";
      default:
        return "";
    }
  };

  return (
    <div className="product-card hover-lift group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Discount badge */}
        {discountPercent > 0 && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
            {discountPercent}% OFF
          </Badge>
        )}

        {/* Category badge */}
        <Badge className={`absolute bottom-2 left-2 ${getCategoryColor(product.category)}`}>
          {product.category.toUpperCase()}
        </Badge>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-sm text-foreground truncate">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.brand}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="font-bold text-foreground">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <Button className="w-full btn-hero text-sm">
          Add to Bag
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;