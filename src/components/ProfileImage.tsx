"use client";

import Image from "next/image";

type ProfileImageProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function ProfileImage({
  src,
  alt,
  size = 256,
}: ProfileImageProps) {
  return (
    <div
      className="relative rounded-full overflow-hidden border-2 border-blue-500 shadow-xl
                 transition-transform duration-500 hover:scale-105 hover:shadow-blue-400/60"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
      {/* Glow ring animation */}
      <div className="absolute inset-0 rounded-full ring-2 ring-blue-500 animate-pulse pointer-events-none"></div>
    </div>
  );
}
