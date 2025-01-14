import React from "react";
import "./styles.css";

/**
 * Приложение
 * @param store {Store} Состояние приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const list = store.getState().list;

  return (
    <div className="App">
      <div className="App-head">
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className="App-controls">
        <button onClick={() => store.addItem(1)}>Добавить</button>
      </div>
      <div className="App-center">
        <div className="List">
          {list.map((item) => (
            <div key={item.code} className="List-item">
              <div
                className={"Item" + (item.selected ? " Item_selected" : "")}
                onClick={() => store.selectItem(item.code)}
              >
                <div className="Item-code">{item.code}</div>
                <div className="Item-title">{item.title}</div>
<<<<<<< HEAD
<<<<<<< HEAD
                {item.count > 0 &&(
                    <div className="Item-count">Выделяли {item.count} раз</div>
                  )}
=======
=======
>>>>>>> b7f64177ddce2ea12d7b6d7c2f75af9fd8402ae5
                {item.count > 0 && (
                  <div className="Item-count">
                    Выделяли {item.count}
                    {[2, 3, 4].includes(Number(String(item.count).slice(-1))) &&
                    ![12, 13, 14].includes(item.count)
                      ? " раза"
                      : " раз"}
                  </div>
                )}
<<<<<<< HEAD
>>>>>>> b7f6417 (Исправлено задание 2 и дизайн)
=======
>>>>>>> b7f64177ddce2ea12d7b6d7c2f75af9fd8402ae5
                <div className="Item-actions">
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
