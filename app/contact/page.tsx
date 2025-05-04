import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { ColorTest } from "@/components/custom/ColorTest";

export default function Contact() {
  return (
    <Layout>
      <LayoutHeader className="flex-col gap-8 justify-center items-center flex">
        <LayoutTitle>Contact</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <ColorTest />
      </LayoutContent>
    </Layout>
  );
}
