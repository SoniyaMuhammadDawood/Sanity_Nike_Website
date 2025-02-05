import ProductCards from "@/app/product/page"
import { ProductCard } from "./Product-card"



const products = [
  {
    name: "Nike Air Force 1 Mid '07",
    price: "9,695.00",
    imageUrl: "/images/item1.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/images/item2.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item3.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item4.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item5.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item6.png",
    category: "Women's Dress",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 Mid '07",
    price: "9,695.00",
    imageUrl: "/images/item7.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/images/item9.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item8.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item12.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item11.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item10.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/images/item13.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item14.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item15.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item16.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item17.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item18.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item19.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item20.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/images/pink.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item22.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/images/item23.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item24.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item25.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item26.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item27.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item28.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/images/item29.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item30.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item31.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item32.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item33.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item34.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item35.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item36.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item37.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item38.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item39.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item40.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item41.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item42.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item43.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item44.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item45.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item46.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item47.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item48.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07 (W)",
    price: "8,195.00",
    imageUrl: "/images/item49.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/images/item50.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/images/item51.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item10.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/item21.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: "3,695.00",
    imageUrl: "/images/pink.png",
    category: "Women's Dress",
    isNewArrival: true
  },

]

export function ProductGrid() {
  return (
<div>
  
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
      
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
  <ProductCards/>
  </div>
  )
}

