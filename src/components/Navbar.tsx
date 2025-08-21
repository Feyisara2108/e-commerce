// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import CartDropdown from "./CartDropdown";


// export default function Navbar() {
// const [showCart, setShowCart] = useState(false);
// const { count } = useCart();


// return (
// <header className="border-b">
// <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 p-6">
// {/* Left - Logo & Menu */}
// <div className="flex items-center gap-8">
// <span className="text-2xl font-extrabold tracking-tight">sneakers</span>
// <ul className="hidden md:flex items-center gap-6 text-neutral-500">
// {['Collections','Men','Women','About','Contact'].map((item) => (
// <li key={item} className="relative cursor-pointer py-2 hover:text-neutral-900 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:scale-x-0 after:bg-orange-500 after:transition hover:after:scale-x-100">{item}</li>
// ))}
// </ul>
// </div>


// {/* Right - Cart & Avatar */}
// <div className="relative flex items-center gap-6">
// <button
// aria-label="Open cart"
// className="relative button-focus"
// onClick={() => setShowCart((s) => !s)}
// >
// <Image src="/images/icon-cart.svg" alt="Cart" width={24} height={24} />
// {count > 0 && (
// <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 text-xs font-bold text-white">
// {count}
// </span>
// )}
// </button>
// <Image src="/images/image-avatar.png" alt="User avatar" width={40} height={40} className="rounded-full" />


// {showCart && (
// <div className="absolute right-0 top-14 z-50 w-80">
// <CartDropdown onCheckout={() => setShowCart(false)} />
// </div>
// )}
// </div>
// </nav>
// </header>
// );
// }






"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDropdown from "./CartDropdown";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const { count } = useCart();

  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 p-6">
        {/* Left */}
        <div className="flex items-center gap-8">
          <span className="text-2xl font-extrabold tracking-tight">sneakers</span>
          <ul className="hidden md:flex items-center gap-6 text-neutral-500">
            {["Collections","Men","Women","About","Contact"].map(item => (
              <li
                key={item}
                className="relative cursor-pointer py-2 hover:text-neutral-900 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:scale-x-0 after:bg-orange-500 after:transition hover:after:scale-x-100"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="relative flex items-center gap-6">
          <button
            aria-label="Open cart"
            className="relative button-focus"
            onClick={() => setShowCart(s => !s)}
          >
            <Image src="/images/icon-cart.svg" alt="Cart" width={24} height={24} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <Image
            src="/images/image-avatar.png"
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full"
          />

          {showCart && (
            <div className="absolute right-0 top-14 z-50 w-80">
              <CartDropdown onCheckout={() => setShowCart(false)} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
