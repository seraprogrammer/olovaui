import GroupButton from "@/registry/components/Buttons/buttons";
import ButtonsOne from "@/registry/components/Buttons/buttons1";
import ButtonTwo from "@/registry/components/Buttons/button2";
import ButtonThree from "@/registry/components/Buttons/button3";
import ButtonFour from "@/registry/components/Buttons/button4";
import { ComponentDoc } from "@/uiEngine/uiEngine";

export default function ButtonsDoc() {
  return (
    <>
      <GroupButton />
      <ComponentDoc
        title="Button One"
        component={<ButtonsOne />}
        componentPath="/src/registry/components/Buttons/buttons1.tsx?raw"
      />
      <ComponentDoc
        title="Button Two"
        component={<ButtonTwo />}
        componentPath="/src/registry/components/Buttons/button2.tsx?raw"
      />
      <ComponentDoc
        title="Button Three"
        component={<ButtonThree />}
        componentPath="/src/registry/components/Buttons/button3.tsx?raw"
      />
      <ComponentDoc
        title="Button Four"
        component={<ButtonFour />}
        componentPath="/src/registry/components/Buttons/button4.tsx?raw"
      />
    </>
  );
}
