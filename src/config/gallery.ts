// Gallery sourced from Chef Maddy's own content (@_maddy_cooks).
// Categories map to the filter pills in the Gallery section.

export type GalleryCategory = "food" | "plating" | "chef" | "behind-the-scenes" | "dining";

export type GalleryItem = {
  id: string;
  image: string;
  caption: string;
  category: GalleryCategory;
  orientation: "square" | "portrait" | "landscape";
  span?: "wide" | "tall";
};

export const GALLERY_CATEGORY_LABELS: Record<"all" | GalleryCategory, string> = {
  all: "All",
  food: "Food",
  plating: "Plating",
  chef: "Chef",
  "behind-the-scenes": "Behind the Scenes",
  dining: "Dining",
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "chef-portrait",
    image: "/images/chef-maddy-portrait.jpg",
    caption: "Chef Maddy",
    category: "chef",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "chicken-leg-basil-veloute",
    image: "/images/gallery/chicken-leg-basil-veloute.jpg",
    caption: "Chicken Leg with Basil Velouté",
    category: "plating",
    orientation: "square",
  },
  {
    id: "prawns-basil-hummus",
    image: "/images/gallery/prawns-basil-hummus.jpg",
    caption: "Prawns with Basil Hummus",
    category: "food",
    orientation: "square",
  },
  {
    id: "lobster-pickled-cabbage",
    image: "/images/gallery/lobster-pickled-cabbage.jpg",
    caption: "Lobster with Pickled Cabbage",
    category: "plating",
    orientation: "square",
    span: "wide",
  },
  {
    id: "dark-chocolate-brownie",
    image: "/images/gallery/dark-chocolate-brownie.jpg",
    caption: "Dark Chocolate Brownie",
    category: "food",
    orientation: "square",
  },
  {
    id: "burnt-cheesecake",
    image: "/images/gallery/burnt-cheesecake.jpg",
    caption: "Burnt Cheesecake",
    category: "food",
    orientation: "square",
  },
  {
    id: "crispy-potato-shallot-cream",
    image: "/images/gallery/crispy-potato-shallot-cream.jpg",
    caption: "Crispy Potato with Shallot Cream",
    category: "plating",
    orientation: "square",
  },
  {
    id: "grilled-chicken-mushroom-sauce",
    image: "/images/gallery/grilled-chicken-mushroom-sauce.jpg",
    caption: "Grilled Chicken, Mashed Potato & Mushroom Sauce",
    category: "food",
    orientation: "square",
  },
  {
    id: "braised-lamb-potato-veloute",
    image: "/images/gallery/braised-lamb-potato-veloute.jpg",
    caption: "Braised Lamb & Silk Potato Velouté",
    category: "plating",
    orientation: "square",
    span: "wide",
  },
  {
    id: "handmade-pasta-chili-crab",
    image: "/images/gallery/handmade-pasta-chili-crab.jpg",
    caption: "Handmade Pasta with Chili Crab",
    category: "food",
    orientation: "square",
  },
  {
    id: "vegan-chocolate-cake",
    image: "/images/gallery/vegan-chocolate-cake.jpg",
    caption: "The Vegan Chocolate",
    category: "food",
    orientation: "square",
  },
  {
    id: "tiramisu-coffee-bean",
    image: "/images/gallery/tiramisu-coffee-bean.jpg",
    caption: "The Tiramisu Coffee Bean",
    category: "plating",
    orientation: "square",
  },
  {
    id: "crispy-skin-salmon-potato-rosti",
    image: "/images/gallery/crispy-skin-salmon-potato-rosti.jpg",
    caption: "Crispy Skin Salmon & Potato Rösti",
    category: "plating",
    orientation: "square",
  },
  {
    id: "lamb-ribs-mushroom-sauce",
    image: "/images/gallery/lamb-ribs-mushroom-sauce.jpg",
    caption: "Lamb Ribs & Creamy Mushroom Sauce",
    category: "behind-the-scenes",
    orientation: "square",
    span: "wide",
  },
];
