import Link from "next/link";
import Image from "next/image";

export function MainNav() {
  return (
    <div className=" ">
    <header className="sticky top-0 z-50 w-full ">
    <div className="flex h-10 items-center justify-between bg-gray-100 w-full px-10">
      {/* Logo and Image */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/man.png"
            alt="Jordan"
            className="object-contain"
            width={45} // Increased width
            height={45} // Increased height
            quality={100} // Ensures high image quality
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4 text-sm">
        <Link href="/allProduct" className="hover:text-gray-600">
          Find a Store
        </Link>
        <span>|</span>
        <Link href="/getHelp" className="hover:text-gray-600">
          Help
        </Link>
        <span>|</span>
        <Link href="/joinUs" className="hover:text-gray-600">
          Join Us
        </Link>
        <span>|</span>
        <Link href="/signIn" className="hover:text-gray-600">
          Sign In
        </Link>
      </div>
    </div>
    </header>
    </div>
  );
}   