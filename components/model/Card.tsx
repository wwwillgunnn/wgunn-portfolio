"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
  image: string;
  title: string;
  link?: string;
  variant?: "modal" | "internal" | "external";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Card({
  image,
  title,
  link,
  variant = "modal",
  size = "md",
}: CardProps) {
  const [open, setOpen] = useState(false);

  const sizeStyles = {
    sm: "max-w-[200px]",
    md: "max-w-[300px]",
    lg: "max-w-[400px]",
    xl: "max-w-[600px]",
  };

  const ImageContent = (
    <div
      className={`relative w-full ${sizeStyles[size || "md"]} aspect-3/4 overflow-hidden cursor-pointer`}
      onClick={() => variant === "modal" && setOpen(true)}
    >
      <Image
        src={image}
        alt={title}
        width={800}
        height={1000}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );

  return (
    <>
      {/* INTERNAL LINK */}
      {variant === "internal" && link && (
        <Link href={link}>{ImageContent}</Link>
      )}

      {/* EXTERNAL LINK */}
      {variant === "external" && link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {ImageContent}
        </a>
      )}

      {/* MODAL */}
      {variant === "modal" && ImageContent}

      {/* Modal UI */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={1600}
              height={2000}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
