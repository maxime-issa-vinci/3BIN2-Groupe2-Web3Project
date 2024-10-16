import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-red-600">
                Bienvenue sur le site qui a pour but de vous présenter NextJs
            </h1>
            <div>
                <p className="text-xl font-semi-bold">
                    En tout premier voici un lien vers la page de connexion
                </p>
                <Link href="/authentification" className="text-xl font-bold text-blue-600"> Connexion</Link>
            </div>
        </div>
    );
}
