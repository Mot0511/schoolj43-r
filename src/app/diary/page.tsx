import Day from '@/components/day/day'
import Weeks_nav from '@/components/weeks_nav/weeks_nav'
import React from 'react'

const Diary = () => {
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