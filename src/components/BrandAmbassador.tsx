import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function BrandAmbassador() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-neutral-600" />
              <span className="text-xs tracking-widest text-neutral-400">JOIN THE TEAM</span>
              <div className="h-px w-12 bg-neutral-600" />
            </div>
            <h2 className="text-4xl tracking-tight">Become a Brand Ambassador</h2>
          </div>

          {/* Description */}
          <p className="text-neutral-300 leading-relaxed">
            Join the IronFit family and represent a brand dedicated to performance, quality, and excellence. 
            As a brand ambassador, you'll receive exclusive perks, early access to new releases, and be part 
            of a community that's pushing the boundaries of athletic performance.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="space-y-2">
              <div className="text-2xl">💪</div>
              <h3 className="text-sm tracking-wider">Exclusive Discounts</h3>
              <p className="text-xs text-neutral-400">Special pricing on all products</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🎁</div>
              <h3 className="text-sm tracking-wider">Free Products</h3>
              <p className="text-xs text-neutral-400">Monthly product allowance</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🚀</div>
              <h3 className="text-sm tracking-wider">Early Access</h3>
              <p className="text-xs text-neutral-400">First to try new releases</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-neutral-200 group"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
