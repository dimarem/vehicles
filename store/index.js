export const state = () => ({
  /**
   * Массив содержащий данные по транспортным средствам.
   * 
   * @type {array}
   */
  vehicles: []
})

export const mutations = {
  /**
   * Сохраняет данные по транспортным средствам в хранилище.
   * 
   * @param {array} data - массив содержащий данные. 
   */
  store_vehicles (state, data) {
    state.vehicles = data
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
    return state.vehicles.find(vehicle => vehicle.id === id)
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
