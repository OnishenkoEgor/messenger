import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import {Header} from "@/components/header/Header";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const inter = Inter({subsets: ["cyrillic"]});

export const metadata: Metadata = {
    title: "Чат",
    description: "Приложение чата",
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    const pathname = usePathname();
    const [isLogin, setIsLogin] = useState(pathname === 'login');
    useEffect(() => {
        setIsLogin(pathname === 'login');
    }, [pathname]);

    return (
        <html lang="ru">
        <body className={inter.className}>
        <Providers>
            <div className="h-dvh divide-y grid" style={{gridTemplateRows: 'max-content 1fr'}}>
                <Header/>
                {children}
            </div>
        </Providers>
        </body>
        </html>
    );
}
