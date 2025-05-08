import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";

import { ColorTest } from "@/components/custom/ColorTest";
import {
  IMG_CUISINE,
  IMG_ENS_BOUCHERIE,
  IMG_ENS_SIGNATURE,
  IMG_ENSEIGNES,
  IMG_ESTRADE,
  IMG_EXTENSION,
  IMG_MOBILIER,
  IMG_STAND,
} from "@/lib/IMAGES";
import ImageCarousel from "@/components/custom/Carousel";

export default function Experience() {
  return (
    <Layout>
      <LayoutHeader className="flex-col gap-8 justify-center items-center flex">
        <LayoutTitle>Experience</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-8 mt-8">
        <p className="text-lg">
          Réalisation et installation d’une estrade au Parc des Expositions de
          Villepinte.
        </p>
        <ImageCarousel images={IMG_ESTRADE} align="center" maxWidth="full" />
        <p className="text-lg">
          Réalisation et installation d’une extension de maison à Saint-Denis.
        </p>
        <ImageCarousel images={IMG_EXTENSION} align="center" maxWidth="full" />
        <p className="text-lg">
          Réalisation et installation d’un stand au salon de l'agriculture.
        </p>
        <ImageCarousel images={IMG_STAND} align="center" maxWidth="full" />
        <p className="text-lg">
          Réalisation et installation d’une cuisine chez une cliente a
          Montpellier.
        </p>
        <ImageCarousel images={IMG_CUISINE} align="center" maxWidth="full" />
        <p className="text-lg">
          Conception et fabrication d'enseignes pour divers entreprises.
        </p>
        <ImageCarousel images={IMG_ENSEIGNES} align="center" maxWidth="full" />
        <p className="text-lg">
          Réalisation et installation d’une enseignes boucherie de A à Z.
        </p>
        <ImageCarousel
          images={IMG_ENS_BOUCHERIE}
          align="center"
          maxWidth="full"
        />
        <p className="text-lg">
          Réalisation et installation d’une enseignes de coiffeur de A à Z.
        </p>
        <ImageCarousel
          images={IMG_ENS_SIGNATURE}
          align="center"
          maxWidth="full"
        />
        <p className="text-lg">Réalisation de mobilier sur mesure.</p>
        <ImageCarousel images={IMG_MOBILIER} align="center" maxWidth="full" />
      </LayoutContent>

      <ColorTest />
    </Layout>
  );
}
