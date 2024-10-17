// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/icons8-next.js-48.png"
                        alt="Next.js Logo"
                        width={48}
                        height={48}
                        className="mr-2"
                    />
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            href="/"
                            className="text-white hover:text-gray-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-white hover:text-gray-200"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="text-white hover:text-gray-200"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-white hover:text-gray-200"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
