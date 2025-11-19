import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div className="max-w-md mx-auto text-center space-y-4 pb-16 border-b border-neutral-200">
          <h3 className="tracking-tight">Stay Updated</h3>
          <p className="text-sm text-neutral-600">
            Subscribe to get special offers, free giveaways, and updates.
          </p>
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-black hover:bg-neutral-800">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-neutral-200">
          <div className="space-y-4">
            <h4 className="text-sm tracking-wider">SHOP</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Supplements</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm tracking-wider">HELP</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-black transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm tracking-wider">ABOUT</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm tracking-wider">FOLLOW US</h4>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-neutral-200">
                <Instagram className="size-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-neutral-200">
                <Facebook className="size-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-neutral-200">
                <Twitter className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
          <p>&copy; 2025 Brand. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
