import Hero from "@/components/Hero/page";
import Product from "@/components/Home/Product";
import Navbar from "@/components/Layout/Navbar";

 

export default function Home() {
  return (
    <main className=" ">
      <Navbar />
      <Hero /> 
      <Product />
    </main>
  )
}
