import axios from 'axios'
import fakeUa from 'fake-useragent'

const auth = async (login: string, password: string) => {
    const url = 'https://passport.43edu.ru/auth/login'
    const data = {
        login: login,
        password: password,
        submit: 'submit',
        returnTo: 'https://one.43edu.ru'
    }
    const headers = {
        'User-Agent': String(fakeUa()),
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios.post(url, data, {
        headers: headers
    })
}

export default auth