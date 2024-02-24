/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
<<<<<<< HEAD
    this.generateNumber = 7; 
=======
    //this.numberGenerate = this.state.list.length; //чем вам не рабочий вариант?
                                                    //Ниже есть вариант без использования конструктора
>>>>>>> b7f6417 (Исправлено задание 2 и дизайн)
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }
  /**
   * Добавление новой записи
   */
  addItem() {
<<<<<<< HEAD
    const code = 0
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: ++this.generateNumber, title: 'Новая запись'}] //Задание №2
    })
      console.log(code); 
  };
=======
    const code = 0;
    const newCode =
      this.state.list.length > 0
        ? Math.max(...this.state.list.map((item) => item.code)) + 1
        : 1;
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: newCode, title: "Новая запись"}], //Задание №2
    });
    console.log(code);
  }
>>>>>>> b7f6417 (Исправлено задание 2 и дизайн)

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map((item) => {
        if (item.code === code) {
          item.selected = !item.selected;
          if (item.selected === true)
<<<<<<< HEAD
            item.count = item.count ? ++item.count: 1;
        } else { 
=======
            item.count = item.count ? ++item.count : 1;
        } else {
>>>>>>> b7f6417 (Исправлено задание 2 и дизайн)
          item.selected = false; //Задание №1
        }
        return item;
      }),
    });
  }
}

export default Store;
