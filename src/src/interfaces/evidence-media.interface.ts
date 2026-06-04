export type EvidenceMediaType = "image" | "video";

export interface IEvidenceMedia {
  id: string;
  src: string;
  type: EvidenceMediaType;
  alt: string;
  poster?: string;
}
