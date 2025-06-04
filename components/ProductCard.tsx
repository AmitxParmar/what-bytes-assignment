import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating?: number;
  onAddToCart?: () => void;
};

const ProductCard = ({
  name,
  price,
  image,
  description,
  category,
  rating = 4.5,
  onAddToCart,
}: Props) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.15] hover:z-50">
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>

        <div className="flex flex-col">
          <div className="flex flex-col justify-between ">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            <div className="flex items-center">
              <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating)
                          ? "fill-current"
                          : "stroke-current fill-none"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({rating})</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3 hidden group-hover:block">
            {description}
          </p>
          <p className="text-gray-500 text-sm mb-3 hidden group-hover:block">
            <span className="font-bold">Category:</span> {category}
          </p>
          <button
            onClick={onAddToCart}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
