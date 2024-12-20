import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ["cyrillic"]});

export const metadata: Metadata = {
    title: "Чат",
    description: "Приложение чата",
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Providers>
            <div className="h-dvh">
                {children}
            </div>
        </Providers>
        </body>
        </html>
    );
}
