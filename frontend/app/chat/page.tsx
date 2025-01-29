import {ReactElement} from "react";
import {useRouter} from "next/navigation";

export default async function Settings(): Promise<ReactElement> {
    const router = useRouter();
    return (
        <main>
            <button onClick={() => router.push('/')}>click me</button>
        </main>
    )
}
