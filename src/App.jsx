import { useState } from "react";
import { Navigation } from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import { CategoryCards } from "./components/CategoryCards.jsx";
import { GenderToggleSection } from "./components/GenderToggleSection.jsx";
import { SupplementToggleSection } from "./components/SupplementToggleSection.jsx";
import { QuizCTA } from "./components/QuizCTA.jsx";
import { Footer } from "./components/Footer.jsx";
import { LatestReleasesC } from "./components/LatestReleasesC.jsx";
import { BrandAmbassador } from "./components/BrandAmbassador.jsx";
import { IronWealthAcademy } from "./components/IronWealthAcademy.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { ProductPage } from "./components/ProductPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigateToProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  // Men's Collection
  const menProducts = [
    {
      id: 1,
      name: "Performance Shorts",
      price: 58,
      color: "Black",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      rating: 4.8,
      reviewCount: 24,
      reviews: [
        { id: 1, author: "Mike T.", rating: 5, comment: "Perfect fit and great quality. These shorts are my go-to for every workout.", date: "Nov 10, 2025" },
        { id: 2, author: "James R.", rating: 4, comment: "Comfortable and durable. Would recommend!", date: "Nov 5, 2025" },
      ],
    },
    {
      id: 2,
      name: "Essential Tank",
      price: 42,
      color: "Navy",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      rating: 4.5,
      reviewCount: 18,
      reviews: [
        { id: 1, author: "Chris L.", rating: 5, comment: "Love the breathable fabric!", date: "Nov 12, 2025" },
      ],
    },
    {
      id: 3,
      name: "Performance Joggers",
      price: 78,
      color: "Grey",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      rating: 4.9,
      reviewCount: 32,
      reviews: [
        { id: 1, author: "David K.", rating: 5, comment: "Best joggers I've ever owned. The fit is amazing.", date: "Nov 8, 2025" },
        { id: 2, author: "Alex M.", rating: 5, comment: "Super comfortable for both gym and casual wear.", date: "Nov 3, 2025" },
      ],
    },
    {
      id: 4,
      name: "Training Tee",
      price: 38,
      color: "Black",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      rating: 4.6,
      reviewCount: 15,
      reviews: [
        { id: 1, author: "Ryan P.", rating: 5, comment: "Great quality for the price!", date: "Nov 14, 2025" },
      ],
    },
  ];

  // Women's Collection
  const womenProducts = [
    {
      id: 5,
      name: "Performance Leggings",
      price: 68,
      color: "Black",
      image: "https://ironfitindustries.com/cdn/shop/files/SPECIALTY_BLACK_2.jpg?v=1740422354&width=600",
      rating: 4.9,
      reviewCount: 42,
      reviews: [
        { id: 1, author: "Sarah J.", rating: 5, comment: "These leggings are incredible! No sliding, perfect compression.", date: "Nov 11, 2025" },
        { id: 2, author: "Emma W.", rating: 5, comment: "Finally found leggings that stay put during my workouts!", date: "Nov 6, 2025" },
      ],
    },
    {
      id: 6,
      name: "Amplify Sports Bra",
      price: 48,
      color: "Nude",
      image: "https://ironfitindustries.com/cdn/shop/files/SPECIALTY_BLACK_2.jpg?v=1740422354&width=600",
      rating: 4.7,
      reviewCount: 28,
      reviews: [
        { id: 1, author: "Jessica M.", rating: 5, comment: "Great support and comfortable all day.", date: "Nov 9, 2025" },
      ],
    },
    {
      id: 7,
      name: "Performance Shorts",
      price: 52,
      color: "Black",
      image: "https://ironfitindustries.com/cdn/shop/files/SPECIALTY_BLACK_2.jpg?v=1740422354&width=600",
      rating: 4.8,
      reviewCount: 21,
      reviews: [
        { id: 1, author: "Mia C.", rating: 5, comment: "Perfect length and so comfortable!", date: "Nov 13, 2025" },
        { id: 2, author: "Olivia B.", rating: 4, comment: "Love these shorts, great for running.", date: "Nov 7, 2025" },
      ],
    },
    {
      id: 8,
      name: "Essential Tank",
      price: 38,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/SPECIALTY_BLACK_2.jpg?v=1740422354&width=600",
      rating: 4.6,
      reviewCount: 19,
      reviews: [
        { id: 1, author: "Sophia R.", rating: 5, comment: "Love the fit and fabric quality!", date: "Nov 15, 2025" },
      ],
    },
  ];

  // Supplement Collection
  const supplementProducts = [
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
        { id: 2, author: "Tom S.", rating: 5, comment: "Best creatine on the market!", date: "Nov 4, 2025" },
      ],
    },
    {
      id: 10,
      name: "Whey Protein",
      price: 45,
      salePrice: 35,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.7,
      reviewCount: 203,
      reviews: [
        { id: 1, author: "Brian K.", rating: 5, comment: "Tastes great and mixes smoothly!", date: "Nov 12, 2025" },
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
        { id: 1, author: "Jake W.", rating: 5, comment: "Great for recovery, no artificial taste.", date: "Nov 8, 2025" },
        { id: 2, author: "Matt H.", rating: 4, comment: "Solid product, helps with muscle soreness.", date: "Nov 2, 2025" },
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
        { id: 1, author: "Steven L.", rating: 5, comment: "Perfect energy boost without the jitters!", date: "Nov 11, 2025" },
      ],
    },
  ];

  // Performance Supplements
  const performanceProducts = [
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
        { id: 2, author: "Tom S.", rating: 5, comment: "Best creatine on the market!", date: "Nov 4, 2025" },
      ],
    },
    {
      id: 10,
      name: "Whey Protein",
      price: 45,
      salePrice: 35,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.7,
      reviewCount: 203,
      reviews: [
        { id: 1, author: "Brian K.", rating: 5, comment: "Tastes great and mixes smoothly!", date: "Nov 12, 2025" },
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
        { id: 1, author: "Jake W.", rating: 5, comment: "Great for recovery, no artificial taste.", date: "Nov 8, 2025" },
        { id: 2, author: "Matt H.", rating: 4, comment: "Solid product, helps with muscle soreness.", date: "Nov 2, 2025" },
      ],
    },
    {
      id: 13,
      name: "Pre-Workout",
      price: 30,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.8,
      reviewCount: 127,
      reviews: [
        { id: 1, author: "Steven L.", rating: 5, comment: "Perfect energy boost without the jitters!", date: "Nov 11, 2025" },
      ],
    },
  ];

  // Health Supplements
  const healthProducts = [
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
        { id: 1, author: "Lisa M.", rating: 5, comment: "Great daily supplement, feel more energized!", date: "Nov 9, 2025" },
      ],
    },
    {
      id: 15,
      name: "Omega-3 Fish Oil",
      price: 32,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.8,
      reviewCount: 134,
      reviews: [
        { id: 1, author: "John P.", rating: 5, comment: "High quality fish oil, no fishy aftertaste.", date: "Nov 7, 2025" },
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
        { id: 1, author: "Anna K.", rating: 5, comment: "Essential for winter months, great quality.", date: "Nov 6, 2025" },
      ],
    },
    {
      id: 17,
      name: "Probiotic Blend",
      price: 35,
      salePrice: 28,
      color: "White",
      image: "https://ironfitindustries.com/cdn/shop/files/29.png?v=1738266952&width=600",
      hoverImage: "https://cdn.shopify.com/s/files/1/0803/8308/2800/files/women_multi.jpg?v=1725914160",
      rating: 4.6,
      reviewCount: 76,
      reviews: [
        { id: 1, author: "Michael S.", rating: 5, comment: "Improved digestion significantly!", date: "Nov 5, 2025" },
      ],
    },
  ];

  // All products combined for easy access
  const allProducts = [
    ...menProducts,
    ...womenProducts,
    ...supplementProducts,
  ];

  // Prepare product page data with full details
  const prepareProductForPage = (product) => {
    return {
      ...product,
      description: "Experience premium quality with our carefully crafted product. Designed for optimal performance and comfort, this item combines cutting-edge technology with superior materials to deliver exceptional results.",
      images: [product.image, product.hoverImage || product.image, product.image],
      benefits: [
        "Premium quality materials for lasting durability",
        "Engineered for optimal performance",
        "Comfortable fit for all-day wear",
        "Easy care and maintenance",
      ],
      ingredients: product.id >= 9 ? "Premium ingredients carefully selected for maximum effectiveness and quality." : undefined,
      usage: product.id >= 9 ? "Take as directed. Consult with a healthcare professional before use." : undefined,
      servingSize: product.id >= 9 ? "30 servings per container" : undefined,
    };
  };

  // Show product page if selected
  if (currentPage === "product" && selectedProduct) {
    const relatedProducts = allProducts
      .filter(p => p.id !== selectedProduct.id)
      .slice(0, 4);
    
    return (
      <div className="min-h-screen bg-white">
        <Navigation onLogoClick={navigateToHome} />
        <ProductPage 
          product={prepareProductForPage(selectedProduct)} 
          relatedProducts={relatedProducts}
          onProductClick={navigateToProduct}
        />
        <Footer />
      </div>
    );
  }

  // Show homepage
  return (
    <div className="min-h-screen bg-white">
      <Navigation onLogoClick={navigateToHome} />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Apparel Section - No border, clean divider */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs tracking-widest text-neutral-400">ATHLETIC WEAR</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <GenderToggleSection 
            menProducts={menProducts}
            womenProducts={womenProducts}
            navigateToProduct={navigateToProduct}
          />
        </div>
        
        {/* Supplements Section - No border, clean divider */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs tracking-widest text-neutral-400">NUTRITION</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <SupplementToggleSection 
            performanceProducts={performanceProducts}
            healthProducts={healthProducts}
            navigateToProduct={navigateToProduct}
          />
        </div>
      </main>

      <CategoryCards />

      <QuizCTA />

      <LatestReleasesC />

      <BrandAmbassador />

      <IronWealthAcademy />

      <Testimonials />
      
      <Footer />
    </div>
  );
}
