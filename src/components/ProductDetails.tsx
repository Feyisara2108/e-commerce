"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addItem(
      {
        id: "fall-sneakers",
        name: "Fall Limited Edition Sneakers",
        price: 125.0,
        image: "/images/image-product-1.jpg",
      },
      quantity
    );
    setQuantity(1); // reset after adding
  };

  return (
    <div className="flex flex-col justify-center">
      <p className="font-bold uppercase tracking-widest text-orange-500">
        Sneaker Company
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Fall Limited Edition Sneakers
      </h1>

      <p className="mt-4 text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything
        the weather can offer.
      </p>

      {/* Pricing */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="rounded bg-orange-100 px-2 font-bold text-orange-500">
            50%
          </span>
        </div>
        <span className="text-gray-400 line-through">$250.00</span>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mt-6 flex gap-4">
        <div className="flex items-center rounded-lg bg-gray-100 px-4">
          <button
            onClick={decrement}
            className="px-3 py-2 font-bold text-orange-500"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={increment}
            className="px-3 py-2 font-bold text-orange-500"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-1 rounded-lg bg-orange-500 py-3 font-bold text-white hover:opacity-75"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
