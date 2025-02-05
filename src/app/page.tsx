
import { HeroSection } from "./components/Hero-section";
import { ProductSlider } from "./components/Product-slider";
import { FeaturedSection } from "./components/Featured-section";
import Carousal2 from "./components/product-carousel";
import { FlightEssentials } from "./components/flight-essentials";
import ProductCategories from "./components/MainLast";



export default function Home() {
  return (
   <div>


    {/* Hero Secion */}
    <HeroSection/>

    {/* Shoes Slider */}
    <ProductSlider/>

    {/* Feauture Section */}
    <FeaturedSection/>

    {/* Men & Women Carousal */}
   <Carousal2/>


   {/*  */}
   <FlightEssentials/>

   {/* Last content */}
   <ProductCategories/>

   
    
   </div>
  );
}
