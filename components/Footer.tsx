import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <h3 className="font-semibold text-lg mb-4">Filters</h3>
            <ul className="flex flex-row gap-5">
              <li>
                <Link href="/?category=all" className="hover:underline">
                  All
                </Link>
              </li>
              <li>
                <Link href="/?category=electronics" className="hover:underline">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-300">
                <Facebook className="w-7 h-7 bg-blue-700 rounded-full p-1" />
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Twitter className="w-7 h-7 bg-blue-700 rounded-full p-1" />
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Instagram className="w-7 h-7 bg-blue-700 rounded-full p-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" border-blue-700 mt-8 pt-4 text-">
          <p>&copy; 2025 American</p>
        </div>
      </div>
    </footer>
  );
}
