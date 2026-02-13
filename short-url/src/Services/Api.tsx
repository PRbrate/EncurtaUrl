import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "../utils/endpoints";

const api = axios.create({
    baseURL: NEXT_PUBLIC_API_URL
})

export async function getUrl(principalUrl: string) {

    try {
        const response = await api.post("createUrl", "", { params: { principalUrl: principalUrl } })

        return response.data;
    } catch (err: any) {
        return { erro: "Não foi possivel encurtar sua url, tente novamente mais tarde" }
    }
}