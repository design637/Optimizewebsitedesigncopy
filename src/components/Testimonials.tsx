import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import { CountUpNumber } from "./CountUpNumber";

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Marcus Johnson",
      role: "Competitive Athlete",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      quote: "IronFit has completely transformed my training. The quality of their apparel and supplements is unmatched. I've seen incredible gains in both strength and performance.",
      rating: 5,
      achievement: "+45lbs PR"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      quote: "The Iron Wealth Academy programs changed my life. Not only did I achieve my fitness goals, but I gained a supportive community that keeps me motivated every day.",
      rating: 5,
      achievement: "Lost 30lbs"
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Brand Ambassador",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      quote: "Being part of the IronFit family has been incredible. The products are top-tier, and the brand truly cares about helping people reach their full potential.",
      rating: 5,
      achievement: "12 Month Journey"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      quote: "I recommend IronFit to all my clients. The supplement quality is exceptional, and the athletic wear performs beautifully during intense training sessions.",
      rating: 5,
      achievement: "Certified PT"
    },
    {
      id: 5,
      name: "James Williams",
      role: "Gym Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      quote: "We stock IronFit products at our gym and they're always the first to sell out. The members love the quality and the results speak for themselves.",
      rating: 5,
      achievement: "5 Year Partner"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4 flex-1">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs tracking-widest text-neutral-400">TESTIMONIALS</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 ml-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[400px] bg-white rounded border border-neutral-200 p-8 hover:border-neutral-300 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-100 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="tracking-wide">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs tracking-wider text-neutral-400">ACHIEVEMENT</div>
                  <div className="text-sm">{testimonial.achievement}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-neutral-200">
          <div className="text-center">
            <CountUpNumber end={10000} suffix="+" className="text-3xl tracking-tight mb-2" />
            <div className="text-sm text-neutral-500 tracking-wide">Happy Customers</div>
          </div>
          <div className="text-center">
            <CountUpNumber end={4.9} decimals={1} suffix="/5" className="text-3xl tracking-tight mb-2" />
            <div className="text-sm text-neutral-500 tracking-wide">Average Rating</div>
          </div>
          <div className="text-center">
            <CountUpNumber end={2500} suffix="+" className="text-3xl tracking-tight mb-2" />
            <div className="text-sm text-neutral-500 tracking-wide">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}