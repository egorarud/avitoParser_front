import React from "react";

const test = []

const Table = ({data}) => {
    return (
        <table >
            <thead>
                <tr className="heading">
                    <th>Название</th>
                    <th>Дата публикации</th>
                    <th>Ссылка</th>
                    <th>Цена</th>
                    <th>Отклонение цены от среднего %</th>
                    <th>Город</th>
                    <th>Регион</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return item;
                })}
                    <tr>
                        <tb>{item.name}</tb>
                        <tb>{}</tb>
                        <tb>dsdsdsd</tb>
                        <tb>dsdsdsd</tb>
                        <tb>dsdsdsd</tb>
                        <tb>dsdsdsd</tb>
                        <tb>dsdsdsd</tb>
                    </tr>
            </tbody>
        </table>
    )
}

export default Table;