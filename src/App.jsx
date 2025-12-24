import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Demo from "./Demo/Demo";
import DemoHeader from "./Demo/DemoHeader";
import HomeHeader from "./Home/HomeHeader";

export default function App() {
  const auth = false;
  return (
    <>
    {auth ? <HomeHeader /> : <DemoHeader />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
    </>
  )
}
