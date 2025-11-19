import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { useState } from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

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
  reviews?: Review[];
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  navigateToProduct?: (product: Product) => void;
}

export function ProductCard({ product, navigateToProduct }: ProductCardProps) {
  const [showReviews, setShowReviews] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rating = product.rating || 4.5;
  const reviewCount = product.reviewCount || 0;

  const handleClick = () => {
    if (navigateToProduct) {
      navigateToProduct(product);
    }
  };

  return (
    <div
      className="group relative space-y-3"
      onClick={handleClick}
      style={{ cursor: navigateToProduct ? 'pointer' : 'default' }}
    >
      {/* Image Container */}
      <div 
        className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-4 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageWithFallback
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className={`w-full h-full transition-all duration-500 group-hover:scale-105 ${
            isHovered && product.hoverImage ? 'object-contain' : 'object-cover'
          }`}
        />
        
        {/* NEW Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs tracking-wider">
            NEW
          </div>
        )}
        
        {/* Sale Badge */}
        {product.salePrice && (
          <div className="absolute top-3 right-3 bg-black text-white px-2 py-1 text-xs tracking-wider">
            SALE
          </div>
        )}
        
        {/* Quick Add Button - appears on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            className="w-full bg-white text-black hover:bg-neutral-100"
            size="sm"
          >
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-sm group-hover:text-neutral-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-neutral-500">
          {product.color || product.flavor}
        </p>
        
        {/* Rating & Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating)
                    ? "fill-black text-black"
                    : "fill-neutral-200 text-neutral-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowReviews(!showReviews);
            }}
            className="text-xs text-neutral-500 hover:text-black transition-colors underline"
          >
            {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
          </button>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="text-sm text-red-600">${product.salePrice}</span>
              <span className="text-sm text-neutral-400 line-through">${product.price}</span>
            </>
          ) : (
            <span className="text-sm">${product.price}</span>
          )}
        </div>

        {/* Reviews Section */}
        {showReviews && product.reviews && product.reviews.length > 0 && (
          <div className="pt-4 mt-4 border-t border-neutral-200 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {product.reviews.map((review) => (
              <div key={review.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          i < review.rating
                            ? "fill-black text-black"
                            : "fill-neutral-200 text-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs">{review.author}</span>
                </div>
                <p className="text-xs text-neutral-600">{review.comment}</p>
                <p className="text-xs text-neutral-400">{review.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
