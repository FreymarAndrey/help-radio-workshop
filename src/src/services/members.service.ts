import { membersMock } from '../data/members.mock'
import type { IMember } from '../interfaces/member.interface'

export async function getMembers(): Promise<IMember[]> {
  return Promise.resolve([...membersMock])
}

export async function getMemberById(id: string): Promise<IMember | undefined> {
  return Promise.resolve(membersMock.find((member) => member.id === id))
}
