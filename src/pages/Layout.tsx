import { Routes, Route } from "react-router-dom";
import ButtonsDoc from "@/registry/docs/buttons";
import TabsUIDoc from "@/registry/docs/TabsUI";
import HeaderUIDoc from "@/registry/docs/Header";
import Test from "@/registry/docs/test";

const Home = () => {
  return <div>Home</div>;
};

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components/buttons" element={<ButtonsDoc />} />
      <Route path="/components/tabs" element={<TabsUIDoc />} />
      <Route path="/components/header" element={<HeaderUIDoc />} />
      <Route path="/components/test" element={<Test />} />
    </Routes>
  );
}
