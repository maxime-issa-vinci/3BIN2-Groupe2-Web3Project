import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-16 bg-white border-b border-neutral-200 px-6">
            <Link href="/">
            <div className="flex items-center">
            <Image
                src="/images/icons-next-black.png"
                alt="Logo"
                width={32}
                height={32}
            />
            <p className="font-medium pl-2 text-2xl">/</p>
            <p className="pl-2 font-bold">NextJs</p>
            </div>
            </Link>
            

            <ul className="flex space-x-4">
                <Link href="/route">
                <li className="text-gray-700 font-medium text-base hover:text-black transition-colors">
                    Routes
                </li>
                </Link>
                <Link href="/test">
                <li className="text-gray-700 font-medium text-base hover:text-black transition-colors">
                    Structure
                </li>
                </Link>
                <Link href="/est">
                <li className="text-gray-700 font-medium text-base hover:text-black transition-colors">
                    Internationalisation 
                </li>
                </Link>
            </ul>
        </nav>
    );
}
