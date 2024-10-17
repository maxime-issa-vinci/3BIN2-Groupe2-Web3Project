import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar />
    <div className="p-4 m-4">
      <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
        Welcome to Next.js!
      </h1>
      <h2 className="text-lg text-gray-700 leading-relaxed text-left mb-4">
        Nous avons créé ce site pour vous répertorier les différentes <br />
        fonctionnalités de Next.js qui vont vous faciliter la vie.
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        <li>Routage simplifié</li>
        <li>Rendu côté serveur (SSR) et génération statique (SSG)</li>
        <li>Optimisation automatique des images</li>
        <li>API intégrées</li>
        <li>Prise en charge des CSS modules et Tailwind CSS</li>
      </ul>
    </div>
    </div>
  );
}
