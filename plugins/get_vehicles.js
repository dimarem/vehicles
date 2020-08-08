/**
 * Глобально устанавливает метод для получения
 * данных по транспортным средствам.
 */
import { getVehicles } from '../api/request'

export default (ctx, inject) => {
  inject('get_vehicles', getVehicles)
} 
