"use client";

// components/ImageCarousel.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageCarouselProps {
  images: ImageItem[];
  align?: "start" | "center" | "end";
  maxWidth?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  align = "start",
  maxWidth = "full",
}) => {
  return (
    <Carousel
      opts={{ align }}
      className={`w-${maxWidth}`}
      // plugins={[Autoplay({ delay: 4000 })]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.alt} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6">
                  <Image
                    className="object-cover"
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                  {image.alt}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
