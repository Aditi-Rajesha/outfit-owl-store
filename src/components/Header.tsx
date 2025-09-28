import { Search, ShoppingBag, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const Header = ({ onCategorySelect, selectedCategory }: HeaderProps) => {
  const categories = [
    { id: "all", label: "All", color: "" },
    { id: "men", label: "Men", color: "category-men" },
    { id: "women", label: "Women", color: "category-women" },
    { id: "kids", label: "Kids", color: "category-kids" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          Free shipping on orders above ₹999 | Easy returns within 30 days
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gradient">FashionHub</h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for products, brands and more"
                className="pl-10 bg-secondary border-none"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>Wishlist</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <ShoppingBag className="w-4 h-4" />
              <span>Bag</span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex space-x-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              onClick={() => onCategorySelect(category.id)}
              className={`${
                selectedCategory === category.id && category.color
                  ? category.color
                  : ""
              } transition-[var(--transition-smooth)]`}
            >
              {category.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;