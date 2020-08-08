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
