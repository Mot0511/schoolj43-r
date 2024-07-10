'use client'

import Day from '@/components/day/day'
import Weeks_nav from '@/components/weeks_nav/weeks_nav'
import get_diary from '@/utils/get_diary'
import get_session from '@/utils/get_session'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const Diary = () => {

    const [cookies] = useCookies()

    useEffect(() => {

        console.log('Token', cookies)
        // const session = get_session(cookies)
        // const diary = get_diary(session)
    })

    return (
        <>
        <h2 className="fs-2 my-2">Дневник</h2>
            <Weeks_nav />
        <div className="row">
            <div className="col-xl-6">
                <Day />
            </div>
            <div className="col-xl-6">
                <Day />
            </div>
        </div>
        <p className="fs-4">Данная неделя пуста</p>
        </>
    )
}
export default Diary