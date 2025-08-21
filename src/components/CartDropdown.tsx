"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";


export default function CartDropdown({ onCheckout }: { onCheckout?: () => void }) {
const { items, subtotal, removeItem, updateQty, clear } = useCart();


return (
<div className="rounded-xl bg-white p-4 shadow-card">
<h2 className="mb-3 font-bold">Cart</h2>
<hr />
{items.length === 0 ? (
<p className="my-10 text-center text-sm text-neutral-500">Your cart is empty.</p>
) : (
<div className="mt-4 space-y-4">
{items.map((item) => (
<div key={item.id} className="flex items-center gap-4">
<Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md" />
<div className="flex-1 text-sm text-neutral-600">
<p className="line-clamp-2">{item.name}</p>
<p>
${item.price.toFixed(2)} x {item.qty}{" "}
<span className="font-bold text-neutral-900">${(item.price * item.qty).toFixed(2)}</span>
</p>
</div>
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="h-8 w-8 rounded bg-neutral-100" onClick={() => updateQty(item.id, item.qty - 1)}>
<Image src="/images/icon-minus.svg" alt="-" width={12} height={12} className="mx-auto" />
</button>
<button aria-label="Increase" className="h-8 w-8 rounded bg-neutral-100" onClick={() => updateQty(item.id, item.qty + 1)}>
<Image src="/images/icon-plus.svg" alt="+" width={12} height={12} className="mx-auto" />
</button>
<button aria-label="Remove item" className="ml-2" onClick={() => removeItem(item.id)}>
<Image src="/images/icon-delete.svg" alt="Delete" width={16} height={16} />
</button>
</div>
</div>
))}


<div className="flex items-center justify-between border-t pt-4 font-semibold">
<span>Subtotal</span>
<span>${subtotal.toFixed(2)}</span>
</div>


<button
className="w-full rounded-lg bg-orange-500 py-3 font-bold text-white transition hover:opacity-90"
onClick={() => {
onCheckout?.();
clear();
}}
>
Checkout
</button>
</div>
)}
</div>
);
}
