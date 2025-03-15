import { api } from '../config.service'

function getClients() {
  return api.get('/clients').then((res) => res.data)
}
export { getClients }
