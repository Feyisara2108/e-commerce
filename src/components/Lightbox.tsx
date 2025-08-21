"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  thumbs: string[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, thumbs, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div role="dialog" aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-xl" onClick={e => e.stopPropagation()}>
        <button aria-label="Close" onClick={onClose} className="absolute -top-10 right-0 text-white">
          <Image src="/images/icon-close.svg" alt="Close" width={22} height={22} />
        </button>

        <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-200">
          <Image src={images[index]} alt={`Product ${index + 1}`} fill className="object-cover" priority />
          <button aria-label="Previous"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white p-3 shadow"
          >
            <Image src="/images/icon-previous.svg" alt="" width={12} height={12} />
          </button>
          <button aria-label="Next"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-3 shadow"
          >
            <Image src="/images/icon-next.svg" alt="" width={12} height={12} />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {thumbs.map((t, i) => (
            <button
              key={t}
              onClick={() => setIndex(i)}
              className={`relative overflow-hidden rounded-xl ring-2 transition ${
                i === index ? "ring-orange-500" : "ring-transparent hover:ring-orange-300"
              }`}
            >
              <div className="relative h-20 w-full">
                <Image src={t} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
              </div>
              {i === index && <span className="absolute inset-0 bg-white/50" aria-hidden />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
