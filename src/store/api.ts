/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios'
import {
  UserSubmit,
  UserResponse,
  User,
  UserRegister
} from './models'

export const baseAuthApi = axios.create({
  baseURL: process.env.API,
  headers: {
    'api-key': `${process.env.API_KEY}`,
    'Content-Type': 'application/json'
  }
})

export function setJWT (token: string) {
  baseAuthApi.defaults.headers.common.Authorization = `Token ${token}`
}

export function clearJWT () {
  delete baseAuthApi.defaults.headers.common.Authorization
}

export async function loginUser (user: UserSubmit): Promise<User> {
  const response = await baseAuthApi.post('/auth/token',
    user
  )
  return (response.data as UserResponse).user
}

export async function registerUser (user: UserRegister): Promise<User> {
  const response = await baseAuthApi.post('/auth/account',
    user
  )
  return (response.data as UserResponse).user
}
