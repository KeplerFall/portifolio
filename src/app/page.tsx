import Image from "next/image";
import Header from "./Components/Header";
import HelloSection from "./Components/HelloSection";
import Divider from "./Components/Divider";
import Featured from "./Components/Featured";
import AboutMe from "./Components/AboutMe";
import LetsConnect from "./Components/LetsConnect";

export default function Home() {
  return (
    <>
      <Header />
      <HelloSection />
      <Divider />
      <Featured />
      <Divider />
      <AboutMe />
      <LetsConnect />
    </>
  );
}
