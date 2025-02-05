"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

// Initialize the Sanity client
const client = createClient({
  projectId: "mbtsebsy", // Replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: false, // Set to true for faster CDN caching in production
});

interface Product {
  _id: string;
  productName: string;
  title: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  image: {
    asset: {
      url: string;
    };
  };
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          productName,
          category,
          price,
          description,
          discountPercentage,
          stockLevel,
          isFeaturedProduct,
          "imageUrl": image.asset->url
        }
      `;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} has been added to your cart!`);
  };

  // Remove product from cart
  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Add product to wishlist
  const addToWishlist = (product: Product) => {
    const isInWishlist = wishlist.some((item) => item._id === product._id);
    if (!isInWishlist) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert(`${product.title} has been added to your wishlist!`);
    } else {
      alert(`${product.title} is already in your wishlist!`);
    }
  };

  // Remove product from wishlist
  const removeFromWishlist = (index: number) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Load cart and wishlist from localStorage on page load
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Products</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-gray-100 shadow-md rounded-lg p-4"
            >
              {product.imageUrl && (
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <div className="mt-4">
                <h2 className="text-xl text-blue-800 tracking-tighter font-serif  font-bold">
                  {product.productName}
                </h2>
                <p className="text-orange-600 text-sm">{product.category}</p>
                <p className="mt-2 text-sm text-gray-800">{product.description}</p>
                <p className="mt-2 text-black font-bold">${product.price}</p>

                <div className="mt-4 lg:flex ">
                  

                  {/* Add to cart button */}
                    
          
                  <button
                  onClick={() => addToCart(product)}>
                  <a
                      className="flex ml-16 lg:ml-0 items-center justify-center w-full py-2 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-3xl cursor-pointer border-blue-800 focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:w-28 sm:px-3 border-text  hover:shadow-lg hover:-translate-y-3 hover:bg-blue-300 hover:border-hidden "
                    >
                      Add to cart
                      </a>
                    </button>
                  
                  
                 
                {/* Add to whishlist button*/}
                  <button
                   onClick={() => addToWishlist(product)}
                   className="flex flex-col w-full sm:w-auto sm:flex-row p-4">
                   
                    <a
                      href="#"
                      className="flex ml-16 lg:ml-0 items-center justify-center w-full px-2 py-2 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-3xl cursor-pointer bg-blue-300 focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-3 hover:border-blue-800 hover:bg-gray-100 "
                    >
                      Wishlist
                    </a>
                  </button>


                </div>
              </div>
            </div>
          ))}

<h1 className="hidden lg:block"></h1>
<h1 className="hidden lg:block"></h1>

          {/* Cart Summary */}
          <div className="mt-6 bg-slate-200 p-6 rounded-lg lg:w-[22rem] shadow-md">
            <h2 className="font-extrabold text-xl font-serif text-red-800">
              Cart Summary
            </h2>
            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-white shadow-sm p-4 rounded-md"
                  >
                    <div className="flex-grow">
                      <p className="font-bold text-lg font-serif text-red-800">
                        {item.title}
                      </p>
                      <p className="font-bold text-lg font-serif text-blue-600">
                        ${item.price}
                      </p>
                    </div>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="rounded-md h-16 my-2 w-16 ml-10"
                    />


                    <button
                      onClick={() => removeFromCart(index)}
                      className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black text-center font-semibold">
                Your Cart is Empty. Please Add Products.
              </p>
            )}
          </div>

          {/* Wishlist Summary */}
          <div className="mt-6 bg-slate-200 p-6 rounded-lg lg:ml-[9rem] lg:w-[21rem] shadow-md">
            <h2 className="font-extrabold text-xl font-serif text-red-800">
              Wishlist Summary
            </h2>
            {wishlist.length > 0 ? (
              <ul className="space-y-4">
                {wishlist.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-white shadow-sm p-4 rounded-md"
                  >
                    <div className="flex-grow">
                      <p className="font-bold text-lg font-serif text-red-800">
                        {item.title}
                      </p>
                      <p className="font-bold text-lg font-serif text-blue-600">
                        ${item.price}
                      </p>
                    </div>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="rounded-md h-16 my-2 w-16 ml-10"
                    />
                    <button
                      onClick={() => removeFromWishlist(index)}
                      className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black text-center font-semibold">
                Your Wishlist is Empty. Please Add Products.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductsPage;
