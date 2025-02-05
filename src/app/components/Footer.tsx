import Link from "next/link"
import { Twitter, Facebook, Youtube, Instagram, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* First Column */}
          <div className="space-y-4">
            <Link 
              href="allProduct" 
              className="text-sm font-bold hover:text-gray-300"
            >
              FIND A STORE
            </Link>
            <Link 
              href="joinUs" 
              className="block text-sm font-bold hover:text-gray-300"
            >
              BECOME A MEMBER
            </Link>
            <Link 
              href="signIn" 
              className="block text-sm font-bold hover:text-gray-300"
            >
              SIGN UP FOR EMAIL
            </Link>
            <Link 
              href="#" 
              className="block text-sm hover:text-gray-300"
            >
              Send Us Feedback
            </Link>
            <Link 
              href="#" 
              className="block text-sm hover:text-gray-300"
            >
              STUDENT DISCOUNTS
            </Link>
          </div>

          {/* Get Help Column */}
          <div className="space-y-4">
            <Link href={"/getHelp"} className="text-sm font-bold mb-4">GET HELP</Link>
            <Link 
              href="orderStatus" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Order Status
            </Link>
            <Link 
              href="delivery" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Delivery
            </Link>
            <Link 
              href="/getHelp" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Get Help
            </Link>
            <Link 
              href="/addToCart" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Add To Cart
            </Link>
            <Link 
              href="getHelp" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Contact Us On Nike.com Inquiries
            </Link>
            <Link 
              href="getHelp" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Contact Us On All Other Inquiries
            </Link>
          </div>

          {/* About Nike Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold mb-4">ABOUT NIKE</h3>
            <Link 
              href="addToCart" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              News
            </Link>
            <Link 
              href="addToCart" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Careers
            </Link>
            <Link 
              href="addToCart" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Investors
            </Link>
            <Link 
              href="addToCart" 
              className="block text-sm text-gray-400 hover:text-white"
            >
              Sustainability
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 lg:justify-end">
            <Link 
              href="#" 
              className="hover:text-gray-300"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 hover:text-blue-500" />
            </Link>
            <Link 
              href="#" 
              className="hover:text-gray-300"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 hover:text-blue-500" />
            </Link>
            <Link 
              href="#" 
              className="hover:text-gray-300"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6 hover:text-red-600" />
            </Link>
            <Link 
              href="#" 
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 hover:text-pink-700" />
            </Link>
          </div>
        </div>



        {/* Bottom Section */}
        <div className=" pt-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <span> <MapPin/>  </span>
              <span>India</span>
              <span>© 2023 Nike, Inc. All Rights Reserved</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-white">
                Guides
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Sale
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white">
                Nike Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

