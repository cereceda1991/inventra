import axios from 'axios'
import { handleCommonErrors } from '../utils/handleCommonErrors'
import { setSelectedUser, setUsers } from './userSlice'

const API_URL = import.meta.env.VITE_API_URL

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/users`)
    dispatch(setUsers(response.data))
  } catch (error) {
    handleCommonErrors(error)
  }
}

export const getUserById = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`)
    dispatch(setSelectedUser(response.data))
  } catch (error) {
    handleCommonErrors(error)
  }
}

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData)
    dispatch(setSelectedUser(response.data))
    return response
  } catch (error) {
    handleCommonErrors(error)
  }
}

export const deleteUser = (userId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`)
    // Puedes manejar la actualización de la lista de usuarios si es necesario.
    dispatch(getUsers())
    return response
  } catch (error) {
    handleCommonErrors(error)
  }
}
