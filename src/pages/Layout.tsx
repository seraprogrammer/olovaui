import { Routes, Route } from "react-router-dom";
import ButtonsDoc from "@/registry/docs/buttons";
import TabsUIDoc from "@/registry/docs/TabsUI";

const Home = () => {
  return <div>Home</div>;
};

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components/buttons" element={<ButtonsDoc />} />
      <Route path="/components/tabs" element={<TabsUIDoc />} />
    </Routes>
  );
}
