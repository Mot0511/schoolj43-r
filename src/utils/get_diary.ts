import { AxiosInstance } from "axios"
import get_guid from "./get_guid"

const get_diary = (session: AxiosInstance) => {

    const guid = get_guid(session)
    // const res = session.get()

}

export default get_diary