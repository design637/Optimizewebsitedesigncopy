import { useRef } from "react";
import { ProductCard } from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function LatestReleasesC() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const newProducts = [
    {
      id: 101,
      name: "Elite Training Jacket",
      price: 98,
      color: "Charcoal",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      rating: 5.0,
      reviewCount: 8,
      isNew: true,
      reviews: [
        { id: 1, author: "Alex T.", rating: 5, comment: "Perfect for cold weather training!", date: "Nov 18, 2025" },
      ],
    },
    {
      id: 102,
      name: "Women's Flow Leggings",
      price: 72,
      color: "Sage Green",
      image: "https://ironfitindustries.com/cdn/shop/files/SPECIALTY_BLACK_2.jpg?v=1740422354&width=600",
      rating: 4.9,
      reviewCount: 12,
      isNew: true,
      reviews: [
        { id: 1, author: "Rachel M.", rating: 5, comment: "Amazing quality and fit!", date: "Nov 17, 2025" },
      ],
    },
    {
      id: 103,
      name: "Hydration Electrolytes",
      price: 32,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.8,
      reviewCount: 15,
      isNew: true,
      reviews: [
        { id: 1, author: "Chris B.", rating: 5, comment: "Great taste, perfect for workouts!", date: "Nov 16, 2025" },
      ],
    },
    {
      id: 104,
      name: "Recovery Compression Tights",
      price: 85,
      color: "Black",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      rating: 4.7,
      reviewCount: 6,
      isNew: true,
      reviews: [
        { id: 1, author: "Jordan K.", rating: 5, comment: "Helps with recovery tremendously!", date: "Nov 15, 2025" },
      ],
    },
    {
      id: 105,
      name: "Performance Tee 2.0",
      price: 42,
      color: "Navy",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      rating: 4.8,
      reviewCount: 9,
      isNew: true,
      reviews: [
        { id: 1, author: "Sam W.", rating: 5, comment: "Best training tee I've owned!", date: "Nov 14, 2025" },
      ],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="h-px flex-1 bg-neutral-300" />
              <span className="text-xs tracking-widest text-neutral-400">LATEST RELEASES</span>
              <div className="h-px flex-1 bg-neutral-300" />
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center gap-2 ml-8">
              <button
                onClick={() => scroll("left")}
                className="p-2 border border-neutral-300 hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 border border-neutral-300 hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newProducts.map((product) => (
              <div key={product.id} className="flex-none w-[280px] snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <button className="text-sm tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 hover:border-neutral-600">
              VIEW ALL NEW ARRIVALS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}