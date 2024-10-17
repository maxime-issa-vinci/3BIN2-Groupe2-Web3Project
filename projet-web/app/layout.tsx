import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NextJs",
    description: "...",
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
