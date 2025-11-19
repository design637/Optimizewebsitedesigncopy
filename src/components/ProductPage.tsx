import { useState } from "react";
import { Star, Minus, Plus, ChevronDown, Truck, RefreshCw, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ProductCard } from "./ProductCard";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  color?: string;
  reviews?: Review[];
  hoverImage?: string;
}

interface ProductPageProps {
  product: {
    id: number;
    name: string;
    price: number;
    salePrice?: number;
    description: string;
    images: string[];
    rating: number;
    reviewCount: number;
    reviews: Review[];
    benefits?: string[];
    ingredients?: string;
    usage?: string;
    servingSize?: string;
  };
  relatedProducts?: Product[];
  onProductClick?: (product: Product) => void;
}

export function ProductPage({ product, relatedProducts = [], onProductClick }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("One Size");
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscription">("one-time");
  const [subscriptionFrequency, setSubscriptionFrequency] = useState("30");

  const sizes = ["One Size"];
  const subscriptionDiscount = 0.15; // 15% off for subscription
  
  const getCurrentPrice = () => {
    const basePrice = product.salePrice || product.price;
    if (purchaseType === "subscription") {
      return basePrice * (1 - subscriptionDiscount);
    }
    return basePrice;
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const scrollRelated = (direction: 'left' | 'right') => {
    const container = document.getElementById('related-products-scroll');
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-neutral-50 rounded overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-neutral-50 rounded overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl tracking-tight mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-black text-black'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                {product.salePrice ? (
                  <>
                    <span className="text-2xl tracking-tight">${product.salePrice}</span>
                    <span className="text-xl text-neutral-400 line-through">${product.price}</span>
                    <span className="px-2 py-1 bg-black text-white text-xs tracking-wider">
                      SAVE ${product.price - product.salePrice}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl tracking-tight">${product.price}</span>
                )}
              </div>
            </div>

            {/* Short Description */}
            <p className="text-neutral-600 leading-relaxed border-t border-b border-neutral-200 py-6">
              {product.description}
            </p>

            {/* Purchase Type Selector */}
            <div className="space-y-4">
              <label className="text-sm tracking-wider">PURCHASE OPTIONS</label>
              
              {/* One-time Purchase */}
              <button
                onClick={() => setPurchaseType("one-time")}
                className={`w-full p-4 border-2 rounded transition-colors text-left ${
                  purchaseType === "one-time"
                    ? 'border-black bg-neutral-50'
                    : 'border-neutral-300 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      purchaseType === "one-time" ? 'border-black' : 'border-neutral-300'
                    }`}>
                      {purchaseType === "one-time" && (
                        <div className="w-3 h-3 rounded-full bg-black" />
                      )}
                    </div>
                    <div>
                      <div className="tracking-wide mb-1">One-Time Purchase</div>
                      <div className="text-sm text-neutral-600">
                        ${product.salePrice || product.price} per item
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Subscription */}
              <button
                onClick={() => setPurchaseType("subscription")}
                className={`w-full p-4 border-2 rounded transition-colors text-left ${
                  purchaseType === "subscription"
                    ? 'border-black bg-neutral-50'
                    : 'border-neutral-300 hover:border-neutral-400'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        purchaseType === "subscription" ? 'border-black' : 'border-neutral-300'
                      }`}>
                        {purchaseType === "subscription" && (
                          <div className="w-3 h-3 rounded-full bg-black" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="tracking-wide">Subscribe & Save</span>
                          <span className="px-2 py-0.5 bg-black text-white text-xs tracking-wider">
                            15% OFF
                          </span>
                        </div>
                        <div className="text-sm text-neutral-600">
                          ${getCurrentPrice().toFixed(2)} per delivery
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {purchaseType === "subscription" && (
                    <div className="pl-8 space-y-3">
                      {/* Frequency Selector */}
                      <div className="space-y-2">
                        <label className="text-xs tracking-wider text-neutral-600">DELIVERY FREQUENCY</label>
                        <select
                          value={subscriptionFrequency}
                          onChange={(e) => setSubscriptionFrequency(e.target.value)}
                          className="w-full p-2 border border-neutral-300 rounded text-sm"
                        >
                          <option value="30">Every 30 days</option>
                          <option value="45">Every 45 days</option>
                          <option value="60">Every 60 days</option>
                          <option value="90">Every 90 days</option>
                        </select>
                      </div>
                      
                      {/* Benefits */}
                      <ul className="space-y-1 text-xs text-neutral-600">
                        <li className="flex items-center gap-2">
                          <span>✓</span>
                          <span>15% off every delivery</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>✓</span>
                          <span>Free shipping on all subscription orders</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>✓</span>
                          <span>Cancel or pause anytime</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider">SIZE</label>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    <span className="text-sm">{size}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider">QUANTITY</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-neutral-300 rounded">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 hover:bg-neutral-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 border-x border-neutral-300">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 hover:bg-neutral-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full bg-black text-white hover:bg-neutral-800 h-14"
            >
              {purchaseType === "subscription" ? "SUBSCRIBE NOW" : "ADD TO CART"} - ${(getCurrentPrice() * quantity).toFixed(2)}
            </Button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
              <div className="text-center space-y-2">
                <Truck className="w-6 h-6 mx-auto" />
                <div className="text-xs tracking-wide">FREE SHIPPING</div>
                <div className="text-xs text-neutral-500">Orders over $75</div>
              </div>
              <div className="text-center space-y-2">
                <RefreshCw className="w-6 h-6 mx-auto" />
                <div className="text-xs tracking-wide">EASY RETURNS</div>
                <div className="text-xs text-neutral-500">30-day policy</div>
              </div>
              <div className="text-center space-y-2">
                <Shield className="w-6 h-6 mx-auto" />
                <div className="text-xs tracking-wide">SECURE CHECKOUT</div>
                <div className="text-xs text-neutral-500">SSL encrypted</div>
              </div>
            </div>

            {/* Product Details Accordion */}
            <Accordion type="single" collapsible className="border-t border-neutral-200">
              {product.benefits && (
                <AccordionItem value="benefits" className="border-neutral-200">
                  <AccordionTrigger className="text-sm tracking-wider hover:no-underline">
                    BENEFITS
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-2">
                          <span>•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
              
              {product.ingredients && (
                <AccordionItem value="ingredients" className="border-neutral-200">
                  <AccordionTrigger className="text-sm tracking-wider hover:no-underline">
                    INGREDIENTS
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-neutral-600">{product.ingredients}</p>
                  </AccordionContent>
                </AccordionItem>
              )}
              
              {product.usage && (
                <AccordionItem value="usage" className="border-neutral-200">
                  <AccordionTrigger className="text-sm tracking-wider hover:no-underline">
                    HOW TO USE
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-neutral-600">{product.usage}</p>
                  </AccordionContent>
                </AccordionItem>
              )}
              
              {product.servingSize && (
                <AccordionItem value="nutrition" className="border-neutral-200">
                  <AccordionTrigger className="text-sm tracking-wider hover:no-underline">
                    NUTRITION INFO
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-neutral-600">{product.servingSize}</p>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="text-xs tracking-widest text-neutral-400">CUSTOMER REVIEWS</span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.reviews.slice(0, 6).map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded border border-neutral-200 p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-black text-black'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="text-xs text-neutral-500">Verified Purchase</span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-700">{review.comment}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <span className="text-sm">{review.author}</span>
                    <span className="text-xs text-neutral-500">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4 flex-1">
                <div className="h-px flex-1 bg-neutral-200" />
                <span className="text-xs tracking-widest text-neutral-400">YOU MAY ALSO LIKE</span>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>
              
              <div className="flex gap-2 ml-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollRelated('left')}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollRelated('right')}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div 
              id="related-products-scroll"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="flex-shrink-0 w-[280px]">
                  <ProductCard product={relatedProduct} navigateToProduct={onProductClick} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}