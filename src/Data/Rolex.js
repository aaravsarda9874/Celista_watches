export const rolexData = {
  id: "rolex",
  name: "Rolex",
  heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
  storyImage: "https://images.unsplash.com/photo-1518544889289-f1ae0e4f6ee6?auto=format&fit=crop&w=1200&q=80",
  intro: "Rolex is the world’s most iconic luxury watchmaker, known for precision and unmatched legacy.",
  story: "Founded in 1905, Rolex represents excellence in watchmaking and timeless craftsmanship.",
  watches: Array.from({ length: 50 }).map((_, i) => ({
    id: i + 1,
    name: `Rolex Model ${i + 1}`,
    description: "A premium handcrafted Rolex timepiece blending heritage and performance.",
    price: 150000 + i * 1200,
    image: `https://source.unsplash.com/600x600/?rolex,watch,${i}`
  }))
};
