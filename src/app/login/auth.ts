import axios from 'axios'
import fakeUa from 'fake-useragent'

const auth = (login: string, password: string) => {
    return new Promise(async (resolve, reject) => {
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
            headers: headers,
            withCredentials: true
        })
            .then(res => {
                const cookie = res

                resolve(cookie)
            })

       

    })
    
}

export default auth