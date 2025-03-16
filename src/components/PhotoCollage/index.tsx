import React from "react";
import Image from "next/image";

export const PhotoCollage: React.FC = () => {
  return (
    <section className="relative overflow-hidden max-w-2xl">
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/95 via-white/50 to-transparent lg:hidden z-10"></div>
      <div className="grid grid-cols-6 gap-1.5 auto-rows-[60px]">
        <div className="col-span-2 row-span-3 relative rounded-lg overflow-hidden shadow-sm">
          <Image
            src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG1%20copy%202.png"
            alt="Photo w/ Dan"
            fill
            className="object-cover object-[center_20%]"
          />
        </div>
        <div className="col-span-2 row-span-3 relative rounded-lg overflow-hidden shadow-sm">
          <Image
            src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/image.webp"
            alt="Photo 3"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-2 row-span-3 relative rounded-lg overflow-hidden shadow-sm">
          <Image
            src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG_8669-2.webp"
            alt="Marocco"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-sm">
          <Image
            src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/image.webp"
            alt="Photo 7"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-sm">
          <Image
            src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG_5826-2.webp"
            alt="Photo 8"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoCollage;
