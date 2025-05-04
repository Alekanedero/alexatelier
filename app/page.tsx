import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <LayoutHeader className="flex-col gap-8 justify-center items-center flex">
        <LayoutTitle>Présentation</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="align-center rounded-full w-60 h-60 overflow-hidden">
            <Image
              src={"/images/alex.png"}
              alt="photo de profil"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-8 text-gray-600 text-md max-w-3xl space-y-4 pb-8">
            <p>
              Avec plus de 10 ans d’expérience dans les secteurs de l’industrie
              et du bâtiment, j’ai acquis un savoir-faire polyvalent qui me
              permet de mener à bien des projets variés, aussi bien techniques
              que manuels.
            </p>
            <p>
              Au fil de mon parcours, j’ai travaillé sur des chantiers de
              fabrication et pose d’enseignes lumineuses, réalisé l’entretien
              d’espaces extérieurs, participé à des travaux de montage et assuré
              l’usinage de pièces sur fraiseuses CNC. Ces expériences m’ont
              permis de développer une solide rigueur, un excellent sens de
              l’organisation et une grande capacité d’adaptation, que ce soit en
              atelier ou sur le terrain.
            </p>
            <p>
              J’apprécie particulièrement le travail manuel, que ce soit pour la
              construction, l’installation ou la maintenance. Autonome,
              méthodique et proactif, je suis attaché au travail bien fait et au
              respect des normes de qualité et de sécurité.
            </p>
            <p>
              J’ai aussi eu l’opportunité d’encadrer de petites équipes,
              renforçant mes compétences en communication et en gestion de
              tâches.
            </p>
            <p>
              Polyvalent, motivé et passionné par les métiers techniques et
              manuels, je saurai rapidement m’intégrer à vos équipes et
              contribuer efficacement à la réussite de vos projets.
            </p>
          </div>
        </div>
      </LayoutContent>
    </Layout>
  );
}
