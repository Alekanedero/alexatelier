import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";

import { ColorTest } from "@/components/custom/ColorTest";
import { IMAGES } from "@/lib/IMAGES";
import ImageCarousel from "@/components/custom/Carousel";

export default function Experience() {
  return (
    <Layout>
      <LayoutHeader className="flex-col gap-8 justify-center items-center flex">
        <LayoutTitle>Experience</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <ImageCarousel images={IMAGES} align="center" maxWidth="full" />
      </LayoutContent>
      <ColorTest />
    </Layout>
  );
}
