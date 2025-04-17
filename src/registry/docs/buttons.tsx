import ButtonsOne from "@/registry/components/Buttons/buttons1";
import ButtonTwo from "@/registry/components/Buttons/button2";
import ButtonThree from "@/registry/components/Buttons/button3";
import ButtonFour from "@/registry/components/Buttons/button4";
import Button5 from "@/registry/components/Buttons/button5";
import Button6 from "@/registry/components/Buttons/button6";
import { ComponentRow } from "@/uiEngine/ViewEngineCore";

export default function ButtonsDoc() {
  return (
    <>
      <ComponentRow
        components={[
          {
            title: "First Component",
            component: <ButtonsOne />,
            componentPath: "/src/registry/components/Buttons/buttons1.tsx?raw",
          },
          {
            title: "Second Component",
            component: <ButtonTwo />,
            componentPath: "/src/registry/components/Buttons/button2.tsx?raw",
          },
          {
            title: "Third Component",
            component: <ButtonThree />,
            componentPath: "/src/registry/components/Buttons/button3.tsx?raw",
          },
          {
            title: "Fourth Component",
            component: <ButtonFour />,
            componentPath: "/src/registry/components/Buttons/button4.tsx?raw",
          },
          {
            title: "Fifth Component",
            component: <Button5 />,
            componentPath: "/src/registry/components/Buttons/button5.tsx?raw",
          },
          {
            title: "Sixth Component",
            component: <Button6 />,
            componentPath: "/src/registry/components/Buttons/button6.tsx?raw",
          },
        ]}
      />
    </>
  );
}
