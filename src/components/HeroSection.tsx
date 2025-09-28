import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

interface HeroSectionProps {
  onCategorySelect: (category: string) => void;
}

const HeroSection = ({ onCategorySelect }: HeroSectionProps) => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-fashion">
            Discover Your
            <span className="block text-gradient">Perfect Style</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Explore premium fashion for men, women, and kids. From casual wear to formal attire, find everything you need to express your unique style.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => onCategorySelect("men")}
              className="btn-hero bg-[hsl(var(--men-accent))] hover:bg-[hsl(var(--men-accent))] hover:scale-105"
            >
              Shop Men
            </Button>
            <Button
              onClick={() => onCategorySelect("women")}
              className="btn-hero bg-[hsl(var(--women-accent))] hover:bg-[hsl(var(--women-accent))] hover:scale-105"
            >
              Shop Women
            </Button>
            <Button
              onClick={() => onCategorySelect("kids")}
              className="btn-hero bg-[hsl(var(--kids-accent))] hover:bg-[hsl(var(--kids-accent))] hover:scale-105"
            >
              Shop Kids
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;