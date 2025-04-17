import { ComponentRow } from "@/uiEngine/ViewEngineCore";
import Test1 from "@/registry/components/test/test1";

export default function test() {
  return (
    <ComponentRow
      components={[
        {
          title: "First Component",
          component: <Test1 />,
          componentPath: "/src/registry/components/test/test1.tsx?raw",
        },
        {
          title: "Second Component",
          component: <Test1 />,
          componentPath: "/src/registry/components/test/test1.tsx?raw",
        },
        {
          title: "Third Component",
          component: <Test1 />,
          componentPath: "/src/registry/components/test/test1.tsx?raw",
        },
      ]}
    />
  );
}
