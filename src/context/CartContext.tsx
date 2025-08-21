// "use client";
// import { createContext, useContext, useMemo, useState, ReactNode } from "react";

// type CartItem = {
//   id: string; // product id
//   name: string;
//   price: number; // unit price
//   qty: number;
//   image: string; // thumbnail path
// };

// type CartContextType = {
//   items: CartItem[];
//   count: number; // total items quantity
//   subtotal: number; // sum of (price * qty)
//   addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
//   removeItem: (id: string) => void;
//   updateQty: (id: string, qty: number) => void;
//   clear: () => void;
// };

// const CartContext = createContext<CartContextType | null>(null);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([]);

//   const addItem: CartContextType["addItem"] = (item, qty = 1) => {
//     setItems((prev) => {
//       const idx = prev.findIndex((p) => p.id === item.id);
//       if (idx > -1) {
//         const next = [...prev];
//         next[idx] = { ...next[idx], qty: next[idx].qty + qty };
//         return next;
//       }
//       return [...prev, { ...item, qty }];
//     });
//   };

//   const removeItem = (id: string) =>
//     setItems((prev) => prev.filter((p) => p.id !== id));

//   const updateQty = (id: string, qty: number) =>
//     setItems((prev) =>
//       prev
//         .map((p) => (p.id === id ? { ...p, qty: Math.max(0, qty) } : p))
//         .filter((p) => p.qty > 0)
//     );

//   const clear = () => setItems([]);

//   const { count, subtotal } = useMemo(() => {
//     const c = items.reduce((acc, i) => acc + i.qty, 0);
//     const s = items.reduce((acc, i) => acc + i.price * i.qty, 0);
//     return { count: c, subtotal: s };
//   }, [items]);

//   return (
//     <CartContext.Provider
//       value={{ items, count, subtotal, addItem, removeItem, updateQty, clear }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within a CartProvider");
//   return context;
// }

"use client";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem: CartContextType["addItem"] = (item, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === item.id);
      if (i > -1) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id: string) =>
    setItems(prev => prev.filter(p => p.id !== id));

  const updateQty = (id: string, qty: number) =>
    setItems(prev =>
      prev
        .map(p => (p.id === id ? { ...p, qty: Math.max(0, qty) } : p))
        .filter(p => p.qty > 0)
    );

  const clear = () => setItems([]);

  const { count, subtotal } = useMemo(() => {
    const c = items.reduce((acc, i) => acc + i.qty, 0);
    const s = items.reduce((acc, i) => acc + i.price * i.qty, 0);
    return { count: c, subtotal: s };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, count, subtotal, addItem, removeItem, updateQty, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
