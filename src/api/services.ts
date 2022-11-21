import { IData } from "types/IData"
import { client } from "./client"

export async function getFilms(page: number): Promise<IData> {
  const { data } = await client.get<IData>(`/film?page=${page}&size=10`)
  return data
}
