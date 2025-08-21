// import "./globals.css";
// import type { Metadata } from "next";
// import type { ReactNode } from "react";
// import { CartProvider } from "@/context/CartContext";

// export const metadata: Metadata = {
//   title: "Sneakers Shop",
//   description: "E-commerce product page",
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white text-neutral-900 antialiased">
//         <CartProvider>{children}</CartProvider>
//       </body>
//     </html>
//   );
// }





import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Sneakers Shop",
  description: "E-commerce product page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
