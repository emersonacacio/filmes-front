import axios from "axios"

const axiosConfig = {
  baseURL: "http://localhost:3333/",
  timeout: 30000,
}

export const client = axios.create(axiosConfig)
