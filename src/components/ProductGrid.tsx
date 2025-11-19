import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  color?: string;
  flavor?: string;
  image: string;
}

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: Product[];
}

export function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <section className="space-y-8">
      {/* Header */}
      {title && (
        <div className="text-center space-y-2">
          <h2 className="tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-sm tracking-widest text-neutral-600">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}