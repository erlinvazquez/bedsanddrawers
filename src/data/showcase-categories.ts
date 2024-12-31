export interface ShowcaseCategory {
  title: string;
  image: string;
  description: string;
  href: string;
}

export const showcaseCategories: ShowcaseCategory[] = [
  {
    title: "For Kids",
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9",
    description: "Colorful and safe beds perfect for children's rooms",
    href: "/kids-beds"
  },
  {
    title: "For Dogs",
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97",
    description: "Cozy and durable beds for your canine companions",
    href: "/dog-beds"
  },
  {
    title: "For Cats",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    description: "Soft and comfortable beds your feline friends will love",
    href: "/cat-beds"
  },
  {
    title: "For Hamsters",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
    description: "Cozy hideouts and beds for your small furry friends",
    href: "/hamster-beds"
  },
  {
    title: "Nursery Collections",
    image: "https://images.unsplash.com/photo-1573170384001-5178b202b405?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Beautiful and safe furniture collections for your baby's nursery",
    href: "/nursery-collections"
  },
  {
    title: "Luxury Collection",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description: "Premium beds with elegant designs and superior comfort",
    href: "/luxury-beds"
  }
];

