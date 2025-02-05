import {ReactElement} from "react";
import {GetStaticProps} from "next";
import {getList} from "@/utils/api/chat/chat";

export default async function ChatList({chats}: any): Promise<ReactElement> {

    return (
        <>
        </>
    );
}

export const getStaticProps = (async (context) => {
    console.log(context);
    const chats = await getList();

    return {
        props: {
            chats
        }
    }
}) satisfies GetStaticProps<any>
