import React from "react";

const test = []

const Table = ({data}) => {
    return (
        <table >
            <thead>
                <tr className="heading">
                    <th className="table-name">Название</th>
                    <th className="table-date">Дата публикации</th>
                    <th className="table-url">Ссылка</th>
                    <th className="table-price">Цена</th>
                    <th className="table-deviation">Отклонение цены от среднего %</th>
                    <th className="table-city">Город</th>
                    <th className="table-region">Регион</th>
                </tr>
            </thead>
            <tbody>
                {/* {data.map((item) => {
                    return item;
                })} */}
                    <tr>
                        <td className='table-name'>Название.</td>
                        <td className="table-date">Дата публикации</td>
                        <td className="table-url">Ссылка</td>
                        <td className="table-price">Цена</td>
                        <td className="table-deviation">Отклонение</td>
                        <td className="table-city">Город</td>
                        <td className="table-region">Регион</td>
                    </tr>
            </tbody>
        </table>
    )
}

export default Table;