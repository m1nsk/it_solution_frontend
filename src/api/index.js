import axios from 'axios'

import { API_HOST, API_PORT } from '../api/config'

export const baseHost = API_HOST + ':' + API_PORT
export const baseURL = API_HOST + '/api'

export function getMessages (userData) {
  return axios.get(baseURL + '/get_messages', {params: userData})
}

export function setMessageStatus (messageId) {
  return axios.get(baseURL + '/mark_read', {params: messageId})
}
