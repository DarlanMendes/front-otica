import { getClients } from '@/service/rest/client.rest'
export async function getAllClients() {
  const clients = await getClients()
  return clients || []
}
