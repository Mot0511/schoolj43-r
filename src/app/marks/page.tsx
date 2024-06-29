import React from 'react'
import cl from './style.module.css'

const Marks = () => {
    return (
        <>
            <h2 className="fs-2 my-2">Оценки</h2>
            <select className="form-select form-select-dark my-3">
                <option value="/marks/1">Первая четверть</option>
                <option value="/marks/2">Вторая четверть</option>
                <option value="/marks/3">Третья четверть</option>
                <option value="/marks/4">Четвертая четверть</option>
            </select>
            <table className={"table table-striped table-bordered table-hover "+cl.marks}>
                <thead>
                    <tr>
                        <th scope="col">Предмет</th>
                        <th scope="col">Оценки</th>
                        <th scope="col">Средний балл</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Предмет</td>
                            <td>
                                <p className="badge bg-success">5</p>
                            </td>
                            <td>
                                <p className="badge bg-success">5.00</p>
                            </td>
                        </tr>
                </tbody>
                
            </table>
        </>
    )
}
export default Marks