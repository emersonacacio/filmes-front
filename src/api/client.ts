import axios from "axios"

const axiosConfig = {
  baseURL: process.env.REACT_APP_API,
  timeout: 30000,
}

export const client = axios.create(axiosConfig)
