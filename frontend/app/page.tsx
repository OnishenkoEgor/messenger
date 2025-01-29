'use server'
import {ReactElement} from "react";
import {Link} from "@nextui-org/react";

export default async function Home(): Promise<ReactElement> {
    return (
        <main>
            <Link href={'/settings'}>Settings</Link>
        </main>
    );
}
