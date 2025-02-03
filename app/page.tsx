import Fonts from "@/components/ui/fonts";

import Hero from "./components/hero";
import Products from "./products/page";
import Top_sell from "./products/sell";
import Dress from "./components/dress";
import CustomerCarousel from "@/components/carousell";





export default function Home() {
  return (
<div >

  <Hero/>
  <Fonts/>
  <Products/>
  <Top_sell/>
  <Dress/>
  <CustomerCarousel/>
  
  
</div>
  );
}
