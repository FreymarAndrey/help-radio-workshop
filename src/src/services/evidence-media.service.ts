import { evidenceMediaMock } from "../data/evidence-media.mock";
import type { IEvidenceMedia } from "../interfaces/evidence-media.interface";

export async function getEvidenceMedia(): Promise<IEvidenceMedia[]> {
  return Promise.resolve([...evidenceMediaMock]);
}
