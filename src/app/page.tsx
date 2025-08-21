"use client";
import Navbar from "@/components/Navbar";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";


export default function Home() {
return (
<main className="">
<Navbar />
<section className="mx-auto max-w-6xl p-6 grid gap-10 md:grid-cols-2">
<ProductGallery />
<ProductDetails />
</section>
</main>
);
}