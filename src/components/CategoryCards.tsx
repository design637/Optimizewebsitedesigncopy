import { Button } from "./ui/button";

export function CategoryCards() {
  const categories = [
    {
      id: 1,
      title: "MEN'S",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1310.png?v=1692283869&width=600",
      link: "/collections/mens"
    },
    {
      id: 2,
      title: "WOMEN'S",
      image: "https://ironfitindustries.com/cdn/shop/files/IMG_1345.png?v=1691685951&width=600",
      link: "/collections/womens"
    },
    {
      id: 3,
      title: "SUPPLEMENTS",
      image: "https://ironfitindustries.com/cdn/shop/files/Untitled_design.jpg?v=1722835508&width=1000",
      link: "/collections/supplements"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Card - Men's */}
        <a
          href={categories[0].link}
          className="group relative h-[400px] md:h-[650px] md:row-span-2 overflow-hidden bg-neutral-100"
        >
          <img 
            src={categories[0].image}
            alt={categories[0].title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-white mb-6 tracking-wider">{categories[0].title}</h3>
            <Button className="bg-white text-black hover:bg-neutral-100 px-8 py-6">
              SHOP NOW
            </Button>
          </div>
        </a>

        {/* Smaller Cards */}
        <div className="grid grid-cols-1 gap-6">
          {categories.slice(1).map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative h-[400px] md:h-[315px] overflow-hidden bg-neutral-100"
            >
              <img 
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-white mb-6 tracking-wider">{category.title}</h3>
                <Button className="bg-white text-black hover:bg-neutral-100 px-8 py-6">
                  SHOP NOW
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}