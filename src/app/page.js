'use client'
import Navbar1 from "@/Components/Navbar/Navbar1";
import Slider from "@/Components/SecondSection/Slider";
import Menu from "@/Components/menu/Menu";

// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-white ">
    

    <Navbar1/>
    {/* <Slider/> */}
    <Menu />
    </main>
  );
}
