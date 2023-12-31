import "./App.css";
import React from "react";
import Table from "./Table";

const App = () => {
  const [data, setData] = React.useState({});
  const [text, setText] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [conter, setCounter] = React.useState(0);
  // const [value, setValue] = React.useState('')

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  const fetchTable = async () => {
    setCounter((prev) => prev + 1);
    setIsLoading(true);
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json",
      {
        method: "GET",
      }
    );
    if (response.ok) {
      console.log(response.data);
      setIsLoading(false);
    }

    const dataTable = await response.json();
    setData(dataTable);
    setIsLoading(false);
  };

  // const handleClear = (e) =>  {
  //   e.preventDefault()
  //   setValue('')
  // }

  console.log(text);

  return (
    <div>
      <header>
        <div className="header-content">
          <h1>Онлайн парсер объявлений</h1>
          <a href="https://www.avito.ru/" className="logo">
            <img src="/images/avito-logo.png" alt="Логотип Авито" width="200" />
          </a>
        </div>
      </header>
      <main>
        <section className="main-content">
          <div className="content">
            <form
              action="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="form"
            >
              <input
                style={{ padding: "0 10px 0 10px" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="url"
                id="url"
                className="url"
                placeholder="cсылка из доски объявлений"
                required
              />
              <button
                style={{
                  height: 55,
                  padding: "5px 10px",
                  backgroundColor: "#97ca3d",
                }}
                onClick={() => fetchTable()}
                className="filter-button"
              >
                Отправить
              </button>
            </form>
            {/* <button className='filter-button' onClick={handleModal}>Фильтры и сортировка</button> */}
          </div>
        </section>
        {isVisible ? (
          <div className="modal">
            <div className="modal-box">
              <h2>Как пользоваться парсером объявлений</h2>
              <ol>
                <li>Зайдите на сайт avito.ru, введите запрос.</li>
                <li>
                  Нажимаете кнопку "Найти" и затем скопируйте ссылку из
                  браузера.
                </li>
                <li>
                  Вставьте скопированную ссылку в парсер. Нажмите кнопку
                  “Отправить”.
                </li>
                <li>
                  По окончании сбора, готовая таблица будет выведена на экран.
                  Также вы сможете скачать ее, нажав кнопку “Скачать”.
                </li>
              </ol>
              {/* <h2>Фильтры</h2>
              <ul className="filters-list">
                <div className="filters-block">
                  <h3>Обьявления от:</h3>
                  <li className="filters-list-item">
                    <input
                      type="radio"
                      name="from"
                      value="individual"
                      id="individual"
                    />
                    <label for="individual">Физических лиц</label>
                  </li>
                  <li className="filters-list-item">
                    <input type="radio" name="from" value="shop" id="shop" />
                    <label for="shop">Магазинов</label>
                  </li>
                </div>

                <div className="filters-block">
                  <h3>Состояние:</h3>
                  <li className="filters-list-item">
                    <input type="radio" value="new" name="condition" id="new" />
                    <label for="new">Новое</label>
                  </li>
                  <li className="filters-list-item">
                    <input
                      type="radio"
                      value="used"
                      name="condition"
                      id="used"
                    />
                    <label for="used">Б/У</label>
                  </li>
                </div>

                <li className="filters-list-item">
                  <input type="checkbox" name="rent" id="rent" />
                  <label for="rent">В аренду</label>
                </li>
                <li className="filters-list-item">
                  <input type="checkbox" name="services" id="services" />
                  <label for="services">Услуги</label>
                </li>
                <li className="filters-list-item">
                  <input type="checkbox" name="delivery" id="delivery" />
                  <label for="delivery">С доставкой</label>
                </li>
                <li className="filters-list-item">
                  <label for="deviation">
                    Отклонение от средней стоимости не более чем на
                  </label>
                  <input
                    type="number"
                    name="deviation"
                    id="deviation"
                    min="0"
                    placeholder="%"
                  />
                </li>
                <li className="filters-list-item">
                  <label for="region">Регион</label>
                  <input type="text" name="region" id="region" />
                </li>
              </ul>

              <h2>Сортировка</h2>
              <ul className="sorting-list">
                <li className="sorting-list-item">
                  <input
                    type="radio"
                    value="date"
                    name="sorting"
                    id="date"
                    checked
                  />
                  <label for="date">По дате публикации</label>
                </li>
                <li className="sorting-list-item">
                  <input
                    type="radio"
                    value="price-descending"
                    name="sorting"
                    id="price-descending"
                  />
                  <label for="price-descending">Цена: по-убыванию</label>
                </li>
                <li className="sorting-list-item">
                  <input
                    type="radio"
                    value="price-increase"
                    name="sorting"
                    id="price-increase"
                  />
                  <label for="price-increase">Цена: по-возрастанию</label>
                </li>
                <li className="sorting-list-item">
                  <input
                    type="radio"
                    value="rating"
                    name="sorting"
                    id="rating"
                  />
                  <label for="rating">По рейтингу</label>
                </li>
              </ul>
              <div className="bottons">
                <button className="close-button" onClick={handleModal}>
                  Применить
                </button>
                <button className="reset-button">Сбросить</button>
              </div> */}
            </div>
          </div>
        ) : (
          <></>
        )}
        {conter > 0 && (
          <div className="table">
            {isLoading ? <>Загрузка</> : <Table conter={conter} />}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
