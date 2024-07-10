import { AxiosInstance } from "axios"
import { parse } from 'js-html-parser';

const get_guid = async (session: AxiosInstance) => {
    const res = await session.get("https://one.43edu.ru/edv/index/participant/")

    const root = parse(res.data)
    console.log(res.data) 

    return ''
}
export default get_guid