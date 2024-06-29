import Day from '@/components/day/day'
import React from 'react'

const Component = () => {
  return (
    <>
      <h2 className="fs-2 my-2">Главная</h2>
        <div className="row">
            <div className="col-md-6">
                <Day />
                <div className="border rounded p-3 mb-3">
                    <h2 className="fs-4">Оценки этой недели: 
                        <span className="fs-5">
                            <span className="text-success"> 1 пятерок</span>
                        </span>
                    </h2>
                    <hr />
                        <p className="badge fs-1 bg-success">5</p>
                        На этой неделе оценок пока нет
                </div>
            </div>
            <div className="col-md-6">
                {/* <div className="border rounded p-3">
                    <h2 className="fs-4">Таблица рейтингов</h2>
                    <hr>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Место</th>
                                <th>Имя Фамилия</th>
                                <th>Кол-во очков</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Имя Фамилия</td>
                                <td>100000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Имя Фамилия</td>
                                <td>100000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Имя Фамилия</td>
                                <td>100000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Имя Фамилия</td>
                                <td>100000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Имя Фамилия</td>
                                <td>100000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border rounded p-3 my-2">
                    <h2 className="fs-4">Твои награды</h2>
                    <hr>
                    <div className="d-flex flex-wrap">
                        <div className="w-25">
                            <img width="100%" src="https://benza.ru/upload/medialibrary/5ff/золотая%20медаль.png" alt="">
                            <p className="text-center fs-5">Молодец</p>
                        </div>
                        <div className="w-25">
                            <img width="100%" src="https://benza.ru/upload/medialibrary/5ff/золотая%20медаль.png" alt="">
                            <p className="text-center fs-5">Молодец</p>
                        </div>
                        <div className="w-25">
                            <img width="100%" src="https://benza.ru/upload/medialibrary/5ff/золотая%20медаль.png" alt="">
                            <p className="text-center fs-5">Молодец</p>
                        </div>
                        <div className="w-25">
                            <img width="100%" src="https://benza.ru/upload/medialibrary/5ff/золотая%20медаль.png" alt="">
                            <p className="text-center fs-5">Молодец</p>
                        </div>
                        <div className="w-25">
                            <img width="100%" src="https://benza.ru/upload/medialibrary/5ff/золотая%20медаль.png" alt="">
                            <p className="text-center fs-5">Молодец</p>
                        </div>
                    </div> */}
                </div>
            </div>
    </>
  )
}
export default Component