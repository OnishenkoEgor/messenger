import {get} from "@/utils/api/api";

export const getList = () => {
    return get('http://nginx:80/chat/');
}
