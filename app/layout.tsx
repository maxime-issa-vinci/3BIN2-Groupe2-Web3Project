import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Car Finder",
    description: "Find your dream car with ease using our innovative tools.",
    keywords: ["car", "finder", "dream", "vehicles", "search"],
    authors: [
        { name: 'Ibrahim A.' },
        { name: 'Maxime I.' },
        { name: 'Nicolae P.' },
        { name: 'Yassin K.' },
        { name: 'Ylann M.' }
    ],
    creator: "Car Finder Team",
    themeColor: "#FFFFFF",
    openGraph: {
        title: "Car Finder - Find Your Dream Car",
        description: "Search and find your ideal car using our platform.",
        url: "https://carfinder.com",
        siteName: "Car Finder",
        images: [
            {
                url: "https://carfinder.com/cover.jpg",
                width: 800,
                height: 600,
                alt: "Car Finder Cover",
            },
        ],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={GeistSans.className}>{children}</body>
        </html>
    );
}
