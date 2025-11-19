import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NavigationProps {
  onLogoClick?: () => void;
}

export function Navigation({ onLogoClick }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      {/* Top Black Bar */}
      <div className="bg-black h-3"></div>
      
      {/* Main Navigation */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side */}
            <div className="flex items-center">
              <button onClick={onLogoClick} className="flex items-center cursor-pointer">
                <ImageWithFallback
                  src="https://cdn.shopify.com/s/files/1/0803/8308/2800/files/1.png?v=1691778414"
                  alt="IronFit Industries"
                  className="h-10 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <a href="#" className="text-xs tracking-wider hover:text-neutral-600 transition-colors">
                MEN
              </a>
              <a href="#" className="text-xs tracking-wider hover:text-neutral-600 transition-colors">
                WOMEN
              </a>
              <a href="#" className="text-xs tracking-wider hover:text-neutral-600 transition-colors">
                SUPPLEMENTS
              </a>
              <a href="#" className="text-xs tracking-wider hover:text-neutral-600 transition-colors">
                ACCESSORIES
              </a>
              <a href="#" className="text-xs tracking-wider hover:text-neutral-600 transition-colors">
                PROGRAMS
              </a>
              <a href="#" className="text-xs tracking-wider hover:text-neutral-600 transition-colors">
                GYMS
              </a>
              <a href="#" className="text-xs tracking-wider hover:text-neutral-600 transition-colors">
                COMPANY
              </a>
            </div>

            {/* Icons - Right Side */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="size-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="size-5" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden absolute right-4">
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}