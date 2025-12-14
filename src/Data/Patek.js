export const patekData = {
  id: "patek",
  name: "Patek Philippe",
  heroImage: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=1400&q=80",
  storyImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
  intro: "Patek Philippe — supreme haute horlogerie and cherished heirlooms.",
  story: "Patek Philippe crafts some of the most collectible and technically elaborate watches in history.",
  watches: Array.from({ length: 50 }).map((_, i) => ({
    id: i + 1,
    name: `Patek ${i + 1}`,
    description: "An exquisite Patek Philippe model with refined finishing.",
    price: 300000 + i * 2200,
    image: `https://source.unsplash.com/600x600/?patek,watch,${i}`
  }))
};
