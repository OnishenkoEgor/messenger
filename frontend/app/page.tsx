'use server'
import {ReactElement} from "react";

export default async function Home(): Promise<ReactElement> {
    return (
        <main className="">
            {'main'}
        </main>
    );
}
