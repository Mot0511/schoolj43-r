import React from 'react'
import cl from './style.module.css'

const Day = () => {
    return (
        <div className="border rounded mb-3">
            <div className="rounded-top px-3 py-1 mt-3">
                <p className="text-center fs-4">Понедельник</p>
            </div>
            <div className="p-3">
                <table className={"table rounded table-striped bg-dark table-hover "+cl.lessons}>
                    <thead>
                        <tr>
                            <th className="t-cell">Предмет</th>
                            <th>Тема урока</th>
                            <th>Домашнее задание</th>
                            <th>Оценка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Предмет</td>
                            <td>Тема урока</td>
                            <td>Домашнее задание</td>
                            <td>
                                <p className={"badge bg-success "+cl.mark}>5</p>
                                <p className="text-secondary">Текущая оценка</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Day