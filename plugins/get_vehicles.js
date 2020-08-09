/**
 * Глобально устанавливает метод для получения
 * данных по транспортным средствам.
 * 
 * В данном методе идет обращение к api,
 * полученные данные сохраняются в хранилище.
 * В случае неудачи производится ошибка со статусом 500.
 */
import { getVehicles } from '../api/request'

export default ({ store, error }, inject) => {
  const get_vehicles = async () => {
    try {
      const vehicles = await getVehicles()

      store.commit('store_vehicles', vehicles)
    } catch (e) {
      error({ statusCode: 500, message: 'An error has occured' })
    }
  }

  inject('get_vehicles', get_vehicles)
} 
