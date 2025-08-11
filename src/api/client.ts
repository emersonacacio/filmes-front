import axios, { AxiosError } from "axios"

const axiosConfig = {
  baseURL: process.env.REACT_APP_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
}

export const client = axios.create(axiosConfig)

// Add response interceptor for better error handling
client.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Log error details for debugging
    console.error("API Error:", {
      status: error.response?.status,
      message: error.message,
      url: error.config?.url,
    })

    return Promise.reject(error)
  },
)
