import React, {ReactElement} from "react";
import {Image} from "@nextui-org/react";
import Link from 'next/link'

export function Logo(): ReactElement {
    return (
        <Link href={'/'}>
            <Image src={'logo.svg'} alt={'logo'} width="64" height="64"/>
        </Link>
    )
}
