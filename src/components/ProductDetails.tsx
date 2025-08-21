// "use client";
// import { useState } from "react";
// import { useCart } from "@/context/CartContext";

// export default function ProductDetails() {
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();

//   const increment = () => setQuantity(q => q + 1);
//   const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     addItem(
//       {
//         id: "fall-sneakers",
//         name: "Fall Limited Edition Sneakers",
//         price: 125.0,
//         image: "/images/image-product-1.jpg",
//       },
//       quantity
//     );
//     setQuantity(1); // reset after adding
//   };

//   return (
//     <div className="flex flex-col justify-center">
//       <p className="font-bold uppercase tracking-widest text-orange-500">
//         Sneaker Company
//       </p>

//       <h1 className="mt-2 text-4xl font-bold">
//         Fall Limited Edition Sneakers
//       </h1>

//       <p className="mt-4 text-gray-500">
//         These low-profile sneakers are your perfect casual wear companion.
//         Featuring a durable rubber outer sole, they’ll withstand everything
//         the weather can offer.
//       </p>

//       {/* Pricing */}
//       <div className="mt-6 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <span className="text-3xl font-bold">$125.00</span>
//           <span className="rounded bg-orange-100 px-2 font-bold text-orange-500">
//             50%
//           </span>
//         </div>
//         <span className="text-gray-400 line-through">$250.00</span>
//       </div>

//       {/* Quantity + Add to Cart */}
//       <div className="mt-6 flex gap-4">
//         <div className="flex items-center rounded-lg bg-gray-100 px-4">
//           <button
//             onClick={decrement}
//             className="px-3 py-2 font-bold text-orange-500"
//           >
//             -
//           </button>
//           <span className="mx-4">{quantity}</span>
//           <button
//             onClick={increment}
//             className="px-3 py-2 font-bold text-orange-500"
//           >
//             +
//           </button>
//         </div>
//         <button
//           onClick={handleAddToCart}
//           className="flex-1 rounded-lg bg-orange-500 py-3 font-bold text-white hover:opacity-75"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }






"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const dec = () => setQty(q => (q > 1 ? q - 1 : 1));
  const inc = () => setQty(q => q + 1);

  const addToCart = () => {
    addItem(
      {
        id: "fall-sneakers",
        name: "Fall Limited Edition Sneakers",
        price: 125,
        image: "/images/image-product-1.jpg",
      },
      qty
    );
    setQty(1);
  };

  return (
    <div className="flex flex-col justify-center gap-6">
      <p className="font-bold uppercase tracking-[0.3em] text-orange-500">Sneaker Company</p>

      <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
        Fall Limited Edition <br className="hidden md:block" /> Sneakers
      </h1>

      <p className="text-neutral-500">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
        outer sole, they’ll withstand everything the weather can offer.
      </p>

      {/* price */}
      <div className="flex items-center justify-between md:block">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-extrabold">$125.00</span>
          <span className="rounded-md bg-orange-100 px-2 py-0.5 text-sm font-bold text-orange-600">50%</span>
        </div>
        <span className="text-neutral-400 line-through md:mt-2 md:block">$250.00</span>
      </div>

      {/* qty + add */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-between rounded-lg bg-neutral-100 px-4 py-3 md:w-44">
          <button aria-label="Decrease quantity" onClick={dec}>
            <Image src="/images/icon-minus.svg" alt="" width={12} height={12} />
          </button>
          <span className="select-none font-bold">{qty}</span>
          <button aria-label="Increase quantity" onClick={inc}>
            <Image src="/images/icon-plus.svg" alt="" width={12} height={12} />
          </button>
        </div>

        <button
          onClick={addToCart}
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-500 py-3 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:opacity-90 md:flex-1"
        >
          <Image src="/images/icon-cart.svg" alt="" width={18} height={18} />
          Add to cart
        </button>
      </div>
    </div>
  );
}
