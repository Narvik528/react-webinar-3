/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
<<<<<<< HEAD
<<<<<<< HEAD
    this.generateNumber = 7; 
=======
    //this.numberGenerate = this.state.list.length; //чем вам не рабочий вариант?
                                                    //Ниже есть вариант без использования конструктора
>>>>>>> b7f6417 (Исправлено задание 2 и дизайн)
=======
    //this.numberGenerate = this.state.list.length; //чем вам не рабочий вариант?
                                                    //Ниже есть вариант без использования конструктора
>>>>>>> b7f64177ddce2ea12d7b6d7c2f75af9fd8402ae5
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
=======
    const code = 0;
    const newCode =
      this.state.list.length > 0
        ? Math.max(...this.state.list.map((item) => item.code)) + 1
        : 1;
    this.setState({
      ...this.state,
>>>>>>> b7f64177ddce2ea12d7b6d7c2f75af9fd8402ae5
      list: [...this.state.list, {code: newCode, title: "Новая запись"}], //Задание №2
    });
    console.log(code);
  }
<<<<<<< HEAD
>>>>>>> b7f6417 (Исправлено задание 2 и дизайн)
=======
>>>>>>> b7f64177ddce2ea12d7b6d7c2f75af9fd8402ae5

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
<<<<<<< HEAD
            item.count = item.count ? ++item.count: 1;
        } else { 
=======
            item.count = item.count ? ++item.count : 1;
        } else {
>>>>>>> b7f6417 (Исправлено задание 2 и дизайн)
=======
            item.count = item.count ? ++item.count : 1;
        } else {
>>>>>>> b7f64177ddce2ea12d7b6d7c2f75af9fd8402ae5
          item.selected = false; //Задание №1
        }
        return item;
      }),
    });
  }
}

export default Store;
