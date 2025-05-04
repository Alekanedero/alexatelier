import { Layout, LayoutHeader, LayoutTitle } from "@/components/layout/layout";
import { ColorTest } from "@/components/custom/ColorTest";

export default function Home() {
  return (
    <Layout>
      <LayoutHeader className="flex-col gap-8 justify-center items-center flex">
        <LayoutTitle>Welcome</LayoutTitle>
      </LayoutHeader>
      <ColorTest />
    </Layout>
  );
}
