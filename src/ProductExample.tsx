import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ProductPage } from "./components/ProductPage";

export default function ProductExample() {
  const product = {
    id: 10,
    name: "Omega-3 Pro",
    price: 45,
    salePrice: 35,
    description: "Premium omega-3 fish oil supplement formulated to support cardiovascular health, brain function, and overall wellness. Each serving delivers 2,000mg of high-quality EPA and DHA from wild-caught fish.",
    images: [
      "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
    ],
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        comment: "Best omega-3 supplement I've tried. No fishy aftertaste and I can feel the difference in my energy levels.",
        date: "Nov 10, 2025",
        verified: true
      },
      {
        id: 2,
        author: "John D.",
        rating: 5,
        comment: "High quality product. Great for heart health and recovery after workouts.",
        date: "Nov 5, 2025",
        verified: true
      },
      {
        id: 3,
        author: "Emily R.",
        rating: 4,
        comment: "Good product, easy to swallow capsules. Noticed improvement in joint health.",
        date: "Oct 28, 2025",
        verified: true
      },
      {
        id: 4,
        author: "Michael K.",
        rating: 5,
        comment: "Excellent omega-3 supplement. Clean ingredients and third-party tested.",
        date: "Oct 22, 2025",
        verified: true
      },
      {
        id: 5,
        author: "Lisa T.",
        rating: 5,
        comment: "Love this product! My doctor recommended omega-3s and this is the best I've found.",
        date: "Oct 15, 2025",
        verified: true
      },
      {
        id: 6,
        author: "David P.",
        rating: 4,
        comment: "Great value for the quality. Will definitely repurchase.",
        date: "Oct 8, 2025",
        verified: true
      },
    ],
    benefits: [
      "Supports cardiovascular health and healthy cholesterol levels",
      "Promotes brain function and cognitive performance",
      "Reduces inflammation and supports joint health",
      "Wild-caught, sustainably sourced fish oil",
      "Third-party tested for purity and potency",
      "No fishy aftertaste with enteric coating"
    ],
    ingredients: "Fish Oil Concentrate (Anchovy, Sardine, Mackerel), Gelatin (Bovine), Glycerin, Purified Water, Natural Lemon Flavor, Mixed Tocopherols (Vitamin E).",
    usage: "Take 2 softgels daily with meals, or as directed by your healthcare professional. For best results, take consistently as part of your daily supplement routine.",
    servingSize: "Serving Size: 2 Softgels | Servings Per Container: 30 | Per Serving: Omega-3 Fatty Acids 2,000mg (EPA 1,200mg, DHA 800mg)"
  };

  const relatedProducts = [
    {
      id: 9,
      name: "Creatine Monohydrate",
      price: 25,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.9,
      reviewCount: 156,
      reviews: [
        { id: 1, author: "Mark D.", rating: 5, comment: "Pure quality, mixes well, great results.", date: "Nov 10, 2025" },
      ],
    },
    {
      id: 11,
      name: "BCAA Powder",
      price: 20,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.6,
      reviewCount: 89,
      reviews: [
        { id: 1, author: "Jake W.", rating: 5, comment: "Great for recovery.", date: "Nov 8, 2025" },
      ],
    },
    {
      id: 12,
      name: "Pre-Workout",
      price: 30,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.8,
      reviewCount: 127,
      reviews: [
        { id: 1, author: "Steven L.", rating: 5, comment: "Perfect energy boost!", date: "Nov 11, 2025" },
      ],
    },
    {
      id: 14,
      name: "Multivitamin Complex",
      price: 28,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.7,
      reviewCount: 98,
      reviews: [
        { id: 1, author: "Lisa M.", rating: 5, comment: "Great daily supplement!", date: "Nov 9, 2025" },
      ],
    },
    {
      id: 16,
      name: "Vitamin D3",
      price: 18,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.9,
      reviewCount: 87,
      reviews: [
        { id: 1, author: "Anna K.", rating: 5, comment: "Essential for winter!", date: "Nov 6, 2025" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProductPage product={product} relatedProducts={relatedProducts} />
      <Footer />
    </div>
  );
}
