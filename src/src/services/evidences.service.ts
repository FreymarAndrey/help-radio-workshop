import { evidencesMock } from '../data/evidences.mock'
import type { IEvidence } from '../interfaces/evidence.interface'

export async function getEvidences(): Promise<IEvidence[]> {
  return Promise.resolve([...evidencesMock])
}

export async function getEvidenceById(id: string): Promise<IEvidence | undefined> {
  return Promise.resolve(evidencesMock.find((item) => item.id === id))
}
