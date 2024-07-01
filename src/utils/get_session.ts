import axios from "axios"
import fakeUa from "fake-useragent"

const get_session = (token: string) => {

    const session = axios.create()
    session.defaults.headers.common['User-Agent'] = String(fakeUa())
    session.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    session.defaults.headers.common['Cookie'] = 'X1_SSO=668276f1651d320f5e1ab3b9'

    return session
}

export default get_session