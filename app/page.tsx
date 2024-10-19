import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="p-4 m-4">
                <h1 className="text-3xl font-extrabold text-center text-black mb-6">
                    Welcome to Next.js!
                </h1>
                <h2 className="text-lg text-gray-700 leading-relaxed text-left mb-4">
                    Le but de ce projet est de vous familiariser avec Next.js,
                    un framework <br />
                    React qui permet de créer des applications web modernes avec
                    des <br />
                    fonctionnalités avancées.
                </h2>
				<ul className="flex flex-col gap-y-4 text-gray-800">
    <Link href="/route">
        <li className="w-3/12 text-center bg-neutral-700 opacity-50 shadow-xl text-white py-2 px-4 rounded-md cursor-pointer hover:bg-neutral-900 transition-colors hover:opacity-100">
            Routage simplifié
        </li>
    </Link>
    <Link href="/test">
        <li className="w-3/12 text-center bg-neutral-700 opacity-50 shadow-xl text-white py-2 px-4 rounded-md cursor-pointer hover:bg-neutral-900 transition-colors hover:opacity-100">
            Rendu côté serveur (SSR) et génération statique (SSG)
        </li>
    </Link>
    <Link href="test">
        <li className="w-3/12 text-center bg-neutral-700 opacity-50 shadow-xl text-white py-2 px-4 rounded-md cursor-pointer hover:bg-neutral-900 transition-colors hover:opacity-100">
            Optimisation automatique des images
        </li>
    </Link>
    <Link href="test">
        <li className="w-3/12 text-center bg-neutral-700 opacity-50 shadow-xl text-white py-2 px-4 rounded-md cursor-pointer hover:bg-neutral-900 transition-colors hover:opacity-100">
            API intégrées
        </li>
    </Link>
    <Link href="test">
        <li className="w-3/12 text-center bg-neutral-700 opacity-50 shadow-xl text-white py-2 px-4 rounded-md cursor-pointer hover:bg-neutral-900 transition-colors hover:opacity-100">
            Prise en charge des CSS modules et Tailwind CSS
        </li>
    </Link>
</ul>

            </div>
        </div>
    );
}
