import React from "react";
import { data, data2, data3 } from "./response";

const Table = ({ conter }) => {
  return (
    <table>
      <thead>
        <tr className="heading">
          <th className="table-name">Название</th>
          <th className="table-date">Дата публикации</th>
          <th className="table-price">Цена</th>
          <th className="table-deviation">Отклонение цены от среднего %</th>
          <th className="table-city">Город</th>
        </tr>
      </thead>
      <tbody>
        {conter === 1 &&
          data.advertisements.map((t) => (
            <tr>
              <td className="table-name"><a href={t.url}>{t.title}</a></td>
              <td className="table-date">{new Date(t.publicationDate).toLocaleDateString()}</td>
              <td className="table-price">{t.price}</td>
              <td className="table-deviation">{t.priceDeviation}</td>
              <td className="table-city">{t.city}</td>
            </tr>
          ))}
        {conter === 2 &&
          data2.advertisements.map((t) => (
            <tr>
              <td className="table-name"><a href={t.url}>{t.title}</a></td>
              <td className="table-date">{new Date(t.publicationDate).toLocaleDateString()}</td>
              <td className="table-price">{t.price}</td>
              <td className="table-deviation">{t.priceDeviation}</td>
              <td className="table-city">{t.city}</td>
            </tr>
          ))}
        {conter === 3 &&
          data3.advertisements.map((t) => (
            <tr>
              <td className="table-name"><a href={t.url}>{t.title}</a></td>
              <td className="table-date">{new Date(t.publicationDate).toLocaleDateString()}</td>
              <td className="table-price">{t.price}</td>
              <td className="table-deviation">{t.priceDeviation}</td>
              <td className="table-city">{t.city}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
