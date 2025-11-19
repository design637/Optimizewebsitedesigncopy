import { Button } from "./ui/button";
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { CountUpNumber } from "./CountUpNumber";

export function IronWealthAcademy() {
  const programs = [
    {
      icon: Target,
      title: "Strength Programs",
      description: "Build muscle and increase strength with science-backed training protocols"
    },
    {
      icon: TrendingUp,
      title: "Performance Plans",
      description: "Elevate your athletic performance with tailored programming"
    },
    {
      icon: Users,
      title: "Coaching & Support",
      description: "Get expert guidance and community support throughout your journey"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest text-neutral-400">TRAINING PROGRAMS</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl tracking-tight">Iron Wealth Academy</h2>
              <p className="text-neutral-600 leading-relaxed">
                Transform your physique and performance with our comprehensive training programs. 
                Designed by industry experts, our programs combine proven methodologies with 
                personalized coaching to help you achieve your fitness goals.
              </p>
            </div>

            {/* Programs List */}
            <div className="space-y-4 pt-4">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded border border-neutral-200 hover:border-neutral-300 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="tracking-wide mb-1">{program.title}</h3>
                      <p className="text-sm text-neutral-600">{program.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-black text-white hover:bg-neutral-800 group"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-100 rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Iron Wealth Academy Training"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded p-6 border border-neutral-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <CountUpNumber end={500} suffix="+" className="text-2xl tracking-tight" />
                  <div className="text-xs text-neutral-500 tracking-wide">Members</div>
                </div>
                <div>
                  <CountUpNumber end={12} className="text-2xl tracking-tight" />
                  <div className="text-xs text-neutral-500 tracking-wide">Programs</div>
                </div>
                <div>
                  <div className="text-2xl tracking-tight">24/7</div>
                  <div className="text-xs text-neutral-500 tracking-wide">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}