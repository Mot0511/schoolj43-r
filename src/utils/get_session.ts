import axios from "axios"
import fakeUa from "fake-useragent"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

const get_session = (token: RequestCookie | undefined) => {

    const session = axios.create()
    session.defaults.headers.common['User-Agent'] = String(fakeUa())
    session.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    session.defaults.headers.common['Cookie'] = 'X1_SSO='+token

    return session
}

export default get_session