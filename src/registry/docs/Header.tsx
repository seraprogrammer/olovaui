import { ComponentDoc } from "@/uiEngine/ViewEngine";
import HeaderTwo from "../components/Header/HeaderTwo";

export default function HeaderUIDoc() {
  return (
    <>
      <ComponentDoc
        title="Header Component"
        component={<HeaderTwo />}
        componentPath="/src/registry/components/Header/HeaderTwo.tsx?raw"
      />
    </>
  );
}
