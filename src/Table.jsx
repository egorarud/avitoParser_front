import React, { useState, useEffect } from "react";
import { data, data2, data3 } from "./response";

const Table = ({ conter }) => {
  function sortData(data, option) {
    let sortedData;
    switch (option) {
      case "price-descending":
        sortedData = [...data].sort((a, b) => b.price - a.price);
        break;
      case "price-increase":
        sortedData = [...data].sort((a, b) => a.price - b.price);
        break;
      case "deviation":
        sortedData = [...data].sort(
          (a, b) => Math.abs(a.priceDeviation) - Math.abs(b.priceDeviation)
        );
        break;
      case "date":
        sortedData = [...data].sort(
          (a, b) => new Date(b.publicationDate) - new Date(a.publicationDate)
        );
        break;
      default:
        sortedData = data;
    }
    return sortedData;
  }

  const [sortOption, setSortOption] = useState("default");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (conter === 1) {
      setSortedData(sortData(data.advertisements, sortOption));
    } else if (conter === 2) {
      setSortedData(sortData(data2.advertisements, sortOption));
    } else if (conter === 3) {
      setSortedData(sortData(data3.advertisements, sortOption));
    }
  }, [conter, sortOption]);

  return (
    <>
      <div className="table-container">
        <select
          style={{ marginBottom: 10 }}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default" selected>
            По умолчанию
          </option>
          <option value="price-descending">Цена: От большего к меньшему</option>
          <option value="price-increase">Цена: От меньшего к большему</option>
          <option value="deviation">По отклонению от средней стоимости</option>
          <option value="date">По дате</option>
        </select>
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
              sortedData.map((t) => (
                <>
                  <tr>
                    <td className="table-name">
                      <a href={t.url}>{t.title}</a>
                    </td>
                    <td className="table-date">
                      {new Date(t.publicationDate).toLocaleDateString()}
                    </td>
                    <td className="table-price">{t.price}</td>
                    <td className="table-deviation">{t.priceDeviation}</td>
                    <td className="table-city">{t.city}</td>
                  </tr>
                </>
              ))}
            {conter === 2 &&
              sortedData.map((t) => (
                <tr>
                  <td className="table-name">
                    <a href={t.url}>{t.title}</a>
                  </td>
                  <td className="table-date">
                    {new Date(t.publicationDate).toLocaleDateString()}
                  </td>
                  <td className="table-price">{t.price}</td>
                  <td className="table-deviation">{t.priceDeviation}</td>
                  <td className="table-city">{t.city}</td>
                </tr>
              ))}
            {conter === 3 &&
              data3.advertisements.map((t) => (
                <tr>
                  <td className="table-name">
                    <a href={t.url}>{t.title}</a>
                  </td>
                  <td className="table-date">
                    {new Date(t.publicationDate).toLocaleDateString()}
                  </td>
                  <td className="table-price">{t.price}</td>
                  <td className="table-deviation">{t.priceDeviation}</td>
                  <td className="table-city">{t.city}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {conter === 1 && (
          <a
            style={{ textAlign: "center", marginTop: 20 }}
            target="blank"
            href="https://drive.google.com/uc?export=download&id=1aAbCfc71nXRq6miJlrVorpiyeeSmKCmm"
          >
            Скачать
          </a>
        )}
        {conter === 2 && (
          <a
            target="blank"
            href="https://drive.google.com/uc?export=download&id=11SEs90ThqIRfkwVYVTxbh1tX-0nK_YLr"
          >
            Скачать
          </a>
        )}
        {conter === 3 && (
          <a
            target="blank"
            href="https://drive.google.com/uc?export=download&id=1rPl7CWNhJ9iJnQIhnVCMYrnPPzBwKnwZ  "
          >
            Скачать
          </a>
        )}
      </div>
    </>
  );
};

export default Table;
