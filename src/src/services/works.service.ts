import { worksMock } from '../data/works.mock'
import type { IWork } from '../interfaces/work.interface'

export async function getWorks(): Promise<IWork[]> {
  return Promise.resolve([...worksMock])
}

export async function getWorkById(id: string): Promise<IWork | undefined> {
  return Promise.resolve(worksMock.find((work) => work.id === id))
}
