import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Button } from "./ui/button";

export function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      id: 1,
      image: "https://ironfitindustries.com/cdn/shop/files/Website_Banners_2429c3bf-a2e6-4a6a-9cb9-072dc5bef075.svg?v=1726855108&width=1600",
      alt: "Women's Amplify Collection",
      title: "Women's Amplify Collection",
      cta: "Shop Now"
    },
    {
      id: 2,
      image: "https://ironfitindustries.com/cdn/shop/files/no_shop_now.svg?v=1726854612&width=1600",
      alt: "Shop Now Collection",
      title: "New Collection",
      cta: "Shop Now"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                {/* CTA Overlay */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                  <Button 
                    size="lg"
                    className="bg-black hover:bg-neutral-800 text-white px-8 py-6 tracking-wider"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 lg:left-8" />
        <CarouselNext className="right-4 lg:right-8" />
      </Carousel>
    </section>
  );
}