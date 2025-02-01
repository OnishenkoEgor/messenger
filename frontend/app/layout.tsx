import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import {Header} from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import {ReactElement, ReactNode} from "react";
import {Divider} from "@nextui-org/react";
import {isUserLoggedIn} from "@/utils/auth/server/auth";

const inter = Inter({subsets: ["cyrillic"]});

export const metadata: Metadata = {
    title: "Чат",
    description: "Приложение чата",
};

export default function RootLayout({children}: { children: ReactNode; }) {

    return (
        <html lang="ru">
        <body className={inter.className}>
        <Providers>
            <div className="h-dvh grid" style={{gridTemplateRows: 'max-content 1fr'}}>
                <Header/>
                {isUserLoggedIn() ? (
                    <div className="flex flex-row">
                        <SidebarWrapper>
                            <Sidebar/>
                        </SidebarWrapper>
                        <Divider orientation={'vertical'}/>
                        {children}
                    </div>
                ) : children}
            </div>
        </Providers>
        </body>
        </html>
    );
}

function SidebarWrapper({children}: { children: ReactNode; }): ReactElement {
    return (
        <div className="w-80">
            {children}
        </div>
    );
}
