import { useState } from "react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  color?: string;
  image: string;
}

interface GenderToggleSectionProps {
  menProducts: Product[];
  womenProducts: Product[];
  navigateToProduct?: (product: Product) => void;
}

export function GenderToggleSection({ menProducts, womenProducts, navigateToProduct }: GenderToggleSectionProps) {
  const [selectedGender, setSelectedGender] = useState<"men" | "women">("women");

  const currentProducts = selectedGender === "men" ? menProducts : womenProducts;

  return (
    <section className="space-y-10">
      {/* Side Accent Toggle */}
      <div className="flex items-center justify-center gap-8">
        <button
          onClick={() => setSelectedGender("men")}
          className="flex items-center gap-2"
        >
          <div className={`w-0.5 h-3.5 transition-all ${
            selectedGender === "men" ? "bg-black" : "bg-transparent"
          }`} />
          <span className={`text-[10px] tracking-wide transition-colors ${
            selectedGender === "men" ? "text-black" : "text-neutral-400 hover:text-neutral-600"
          }`}>
            FOR HIM
          </span>
        </button>
        <button
          onClick={() => setSelectedGender("women")}
          className="flex items-center gap-2"
        >
          <div className={`w-0.5 h-3.5 transition-all ${
            selectedGender === "women" ? "bg-black" : "bg-transparent"
          }`} />
          <span className={`text-[10px] tracking-wide transition-colors ${
            selectedGender === "women" ? "text-black" : "text-neutral-400 hover:text-neutral-600"
          }`}>
            FOR HER
          </span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} navigateToProduct={navigateToProduct} />
        ))}
      </div>
    </section>
  );
}