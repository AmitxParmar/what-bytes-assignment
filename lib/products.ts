export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Bag",
    image: "/productsImages/bag.webp",
    price: 49.99,
    category: "clothing",
    description:
      "Experience the perfect blend of style and functionality with our premium bag. Crafted from high-quality materials, this versatile bag features multiple compartments, reinforced stitching, and water-resistant fabric. Perfect for work, travel, or everyday use, it combines durability with contemporary design.",
  },
  {
    id: 2,
    name: "Boat Airdopes",
    image: "/productsImages/boat-airdopes.webp",
    price: 79.99,
    category: "electronics",
    description:
      "Immerse yourself in crystal-clear sound with our advanced wireless earbuds. Featuring active noise cancellation, 40-hour battery life, and IPX7 water resistance, these premium earbuds deliver exceptional audio quality. With touch controls, voice assistant support, and a sleek charging case, they're perfect for music, calls, and workouts.",
  },
  {
    id: 3,
    name: "Camera",
    image: "/productsImages/camera.webp",
    price: 299.99,
    category: "electronics",
    description:
      "Capture stunning moments with our professional-grade digital camera. Boasting a 24.1MP sensor, 4K video recording, and advanced autofocus system, this camera delivers exceptional image quality. With built-in Wi-Fi, weather sealing, and a versatile lens system, it's perfect for both professional photographers and enthusiasts.",
  },
  {
    id: 4,
    name: "Container Home",
    image: "/productsImages/container-home.webp",
    price: 999.99,
    category: "home",
    description:
      "Transform your living space with our innovative container home. This sustainable living solution features modern architecture, energy-efficient design, and premium finishes. With customizable layouts, solar power integration, and eco-friendly materials, it offers a unique blend of comfort, sustainability, and contemporary living.",
  },
  {
    id: 5,
    name: "MI TV",
    image: "/productsImages/mi-tv.webp",
    price: 399.99,
    category: "electronics",
    description:
      "Experience entertainment like never before with our cutting-edge smart TV. Featuring a stunning 4K HDR display, powerful quad-core processor, and built-in Android TV, it delivers exceptional picture quality and seamless streaming. With voice control, multiple HDMI ports, and a sleek design, it's the perfect centerpiece for your home entertainment system.",
  },
  {
    id: 6,
    name: "Suit",
    image: "/productsImages/suit.webp",
    price: 199.99,
    category: "clothing",
    description:
      "Make a lasting impression with our meticulously crafted formal suit. Made from premium Italian wool blend, this elegant suit features a modern slim fit, reinforced stitching, and attention to detail. Perfect for weddings, business meetings, or special occasions, it combines timeless style with contemporary comfort.",
  },
  {
    id: 7,
    name: "Tree Decor",
    image: "/productsImages/tree-decor.webp",
    price: 29.99,
    category: "home",
    description:
      "Add a touch of nature to your space with our exquisite decorative tree. Handcrafted from high-quality materials, this versatile piece features realistic foliage, a sturdy base, and adjustable branches. Perfect for home or office decor, it brings life to any room while requiring minimal maintenance.",
  },
];
