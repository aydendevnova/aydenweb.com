"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { type StaticImageData } from "next/image";
import { Dialog } from "@headlessui/react";

// Import all images
import DocT from "~/assets/gallery/DocT.jpg";
import DocT2 from "~/assets/gallery/DocT2.jpg";
import Apple from "~/assets/gallery/Apple.jpg";
import Apple2 from "~/assets/gallery/Apple2.jpg";
import Mothora from "~/assets/gallery/Mothora.jpg";
import Mothora2 from "~/assets/gallery/Mothora2.jpg";
import Pathwai from "~/assets/gallery/Pathwai.jpg";
import Pigeon from "~/assets/gallery/Pigeon.jpg";
import Pigeon2 from "~/assets/gallery/Pigeon2.jpg";
import Pigeon3 from "~/assets/gallery/Pigeon3.jpg";
import ProBarberShop from "~/assets/gallery/ProBarberShop.jpg";
import ProBarberShop2 from "~/assets/gallery/ProBarberShop2.jpg";
import ProBarberShop3 from "~/assets/gallery/ProBarberShop3.jpg";
import Solana from "~/assets/gallery/Solana.jpg";
import Solana2 from "~/assets/gallery/Solana2.jpg";
import Solana3 from "~/assets/gallery/Solana3.jpg";
import ZeroAuthority from "~/assets/gallery/ZeroAuthority.jpg";
import ZeroAuthority2 from "~/assets/gallery/ZeroAuthority2.jpg";
import ZeroAuthority3 from "~/assets/gallery/ZeroAuthority3.jpg";

const images = [
  DocT,
  DocT2,
  Apple,
  Apple2,
  Mothora,
  Mothora2,
  Pathwai,
  Pigeon,
  Pigeon2,
  Pigeon3,
  ProBarberShop,
  ProBarberShop2,
  ProBarberShop3,
  Solana,
  Solana2,
  Solana3,
  ZeroAuthority,
  ZeroAuthority2,
  ZeroAuthority3,
];

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      } else if (event.key === "Escape") {
        closeModal();
      }
    },
    [isOpen],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handlePrevImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null
        ? images.length - 1
        : prev === 0
          ? images.length - 1
          : prev - 1,
    );
  }, []);

  const handleNextImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const openModal = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedImageIndex(null);
  }, []);

  return (
    <div className="animate-in fade-in container mx-auto mt-32 px-4 py-8 duration-500">
      <h1 className="mb-4 text-2xl font-bold">Welcome to the Gallery</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image: StaticImageData, index: number) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(index)}
            onKeyDown={(e) => e.key === "Enter" && openModal(index)}
            role="button"
            tabIndex={0}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={600}
              height={600}
              className="h-64 w-full select-none rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <Dialog.Overlay className="fixed inset-0 bg-opacity-70" />
        <Dialog.Panel className="animate-in fade-in relative mx-4 overflow-x-auto rounded-xl max-sm:w-screen">
          <div className="relative mx-auto min-w-[300px] max-w-5xl rounded-xl bg-black">
            {selectedImageIndex !== null && (
              <Image
                src={images[selectedImageIndex]!}
                alt={`Selected image ${selectedImageIndex + 1}`}
                width={1200}
                height={800}
                className="animate-in fade-in pointer-events-none my-auto h-[300px] w-full select-none object-contain sm:h-[400px] md:h-[550px] lg:h-[700px]"
                draggable={false}
              />
            )}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-black bg-opacity-50 p-2 text-white"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Gallery;
