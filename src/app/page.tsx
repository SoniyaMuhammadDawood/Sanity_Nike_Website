
import { HeroSection } from "./components/Hero-section";
import { ProductSlider } from "./components/Product-slider";
import { FeaturedSection } from "./components/Featured-section";
import Carousal2 from "./components/product-carousel";
import { FlightEssentials } from "./components/flight-essentials";
import ProductCategories from "./components/MainLast";
import { MainNav } from "./components/Main-nav";
import { SiteHeader } from "./components/Site-header";
import Footer from "./components/Footer";



export default function Home() {
  return (
   <div>

    {/* Main Nav */}
    <MainNav/>

    {/* Site Header */}
    <SiteHeader/>
    
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

   {/* Footer */}
   <Footer/>
    
   </div>
  );
}
