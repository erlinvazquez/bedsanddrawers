export const bedsGuide = {
  factors: [
    {
      name: "Size",
      description: "Consider the room dimensions and who will be using the bed",
      icon: "ruler"
    },
    {
      name: "Material",
      description: "Choose between wood, metal, or upholstered frames",
      icon: "material"
    },
    {
      name: "Style",
      description: "Match your bedroom's decor with the right design",
      icon: "style"
    },
    {
      name: "Budget",
      description: "Balance quality and affordability within your price range",
      icon: "money"
    }
  ],
  brands: [
    {
      name: "SleepMaster",
      logo: "/brands/sleepmaster.png",
      description: "Premium beds with innovative designs",
      rating: 4.8,
      reviewCount: 1250,
      knownFor: ["Quality craftsmanship", "Modern designs", "Durability"]
    },
    {
      name: "DreamCraft",
      logo: "/brands/dreamcraft.png",
      description: "Affordable luxury beds",
      rating: 4.6,
      reviewCount: 980,
      knownFor: ["Value for money", "Classic styles", "Customer service"]
    },
    {
      name: "BedTech",
      logo: "/brands/bedtech.png",
      description: "Smart beds with advanced features",
      rating: 4.7,
      reviewCount: 850,
      knownFor: ["Innovation", "Technology integration", "Comfort"]
    }
  ],
  priceRanges: [
    {
      label: "Budget",
      min: 300,
      max: 800
    },
    {
      label: "Mid-range",
      min: 800,
      max: 1500
    },
    {
      label: "Premium",
      min: 1500,
      max: 3000
    },
    {
      label: "Luxury",
      min: 3000
    }
  ],
  questions: [
    {
      question: "What size bed should I choose?",
      answer: "Consider your room size, who will be using the bed, and available space for movement. Twin beds are ideal for children, while queen and king sizes offer more space for couples."
    },
    {
      question: "How important is the bed frame material?",
      answer: "The frame material affects both aesthetics and durability. Wood frames offer traditional appeal, metal frames are durable and affordable, while upholstered frames add luxury and comfort."
    },
    {
      question: "What's the average lifespan of a bed?",
      answer: "A quality bed frame can last 15-20 years with proper care. However, mattresses should be replaced every 7-10 years for optimal comfort and support."
    },
    {
      question: "Should I consider storage options?",
      answer: "If space is limited, consider beds with built-in storage drawers or lift-up mechanisms. These features can provide valuable storage without sacrificing style."
    }
  ]
};
