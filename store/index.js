export const state = () => ({
  /**
   * Массив содержащий данные по транспортным средствам.
   * 
   * @type {array}
   */
  vehicles: [],
  /**
   * Индикатор необходимости отображения
   * окна для добавления транспорта.
   */
  add_window_required: false
})

export const mutations = {
  /**
   * Сохраняет данные по транспортным средствам в хранилище.
   * 
   * @param {array} data - массив содержащий данные. 
   */
  store_vehicles (state, data) {
    state.vehicles = data
  },
  /**
   * Отображает окно для добавления
   * нового транспорта.
   */
  show_add_window (state) {
    state.add_window_required = true
    document.documentElement.style.overflow = 'hidden'
  },
  /**
   * Скрывает окно для добавления
   * нового транспорта.
   */
  hide_add_window (state) {
    state.add_window_required = false
    document.documentElement.style.overflow = ''
  },
  /**
   * Добавляет новую запись о
   * транспортном средстве.
   * 
   * @param {object} vehicle_obj - объект содержащий данные транспортного средства.
   */
  add_new_vehicle (state, vehicle_obj) {
    state.vehicles.unshift(vehicle_obj)
  }
}

export const getters = {
  /**
   * Ищет данные по транспортному средству
   * по указанному id.
   * 
   * @returns {object | undefined}
   */
  get_vehicle: state => id => {
    return state.vehicles.find(vehicle => vehicle.id == id)
  }
}

export const actions = {
  /**
   * Перед отображением страницы
   * запрашивает данные по транспортным средствам.
   */
  async nuxtServerInit (ctx, { $get_vehicles }) {
    await $get_vehicles()
  }
}
