'use client'

import {ReactElement} from "react";
import {Divider, Link, Listbox, ListboxItem} from "@nextui-org/react";
import {redirect} from "next/navigation";

const items = [
    {
        key: 'feed',
        label: 'Feed',
        link: '/feed'
    },
    {
        key: 'chat',
        label: 'Chat',
        link: '/chat'
    }
]
export default function Sidebar(): ReactElement {
    return (
        <Listbox aria-label="Dynamic Actions" items={items} variant="flat">
            {(item) => (
                <ListboxItem key={item.key} showDivider href={item.link}>
                    {item.label}
                </ListboxItem>
            )}
        </Listbox>
    );
}
