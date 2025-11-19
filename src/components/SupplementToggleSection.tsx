import { useState } from "react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  color?: string;
  flavor?: string;
  image: string;
  hoverImage?: string;
  rating?: number;
  reviewCount?: number;
  reviews?: Array<{
    id: number;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

interface SupplementToggleSectionProps {
  performanceProducts: Product[];
  healthProducts: Product[];
  navigateToProduct?: (product: Product) => void;
}

export function SupplementToggleSection({
  performanceProducts,
  healthProducts,
  navigateToProduct,
}: SupplementToggleSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"performance" | "health">("performance");

  const products = activeCategory === "performance" ? performanceProducts : healthProducts;

  return (
    <section className="space-y-10">
      {/* Side Accent Toggle */}
      <div className="flex items-center justify-center gap-8">
        <button
          onClick={() => setActiveCategory("performance")}
          className="flex items-center gap-2"
        >
          <div className={`w-0.5 h-3.5 transition-all ${
            activeCategory === "performance" ? "bg-black" : "bg-transparent"
          }`} />
          <span className={`text-[10px] tracking-wide transition-colors ${
            activeCategory === "performance" ? "text-black" : "text-neutral-400 hover:text-neutral-600"
          }`}>
            PERFORMANCE SERIES
          </span>
        </button>
        <button
          onClick={() => setActiveCategory("health")}
          className="flex items-center gap-2"
        >
          <div className={`w-0.5 h-3.5 transition-all ${
            activeCategory === "health" ? "bg-black" : "bg-transparent"
          }`} />
          <span className={`text-[10px] tracking-wide transition-colors ${
            activeCategory === "health" ? "text-black" : "text-neutral-400 hover:text-neutral-600"
          }`}>
            HEALTH SERIES
          </span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} navigateToProduct={navigateToProduct} />
        ))}
      </div>
    </section>
  );
}