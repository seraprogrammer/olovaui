import TabsUI from "@/registry/components/Tabs/tabs1";
import TabsUI2 from "@/registry/components/Tabs/tabs2";
import TabsUI3 from "@/registry/components/Tabs/tabs3";
import { ComponentDoc } from "@/uiEngine/uiEngine";

export default function TabsUIDoc() {
  return (
    <>
      <ComponentDoc
        title="Tabs Component"
        component={<TabsUI />}
        componentPath="/src/registry/components/Tabs/tabs1.tsx?raw"
      />
      <ComponentDoc
        title="Tabs Component"
        component={<TabsUI2 />}
        componentPath="/src/registry/components/Tabs/tabs2.tsx?raw"
      />
      <ComponentDoc
        title="Tabs Component"
        component={<TabsUI3 />}
        componentPath="/src/registry/components/Tabs/tabs3.tsx?raw"
      />
    </>
  );
}
