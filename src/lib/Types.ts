export type Era = 'Canal' | 'Subway' | 'Graffiti' | 'Future'
export type LongEra = 'Canal (1822-1919)' | 'Subway (1920s-1950s)' | 'Graffiti (1984-2023)' | 'Future'

export interface Artifact {
  filename: string,
  fileExtension: string,
  title: string,
  shortDescription: string,
  longDescription: string,
  tags: string,
  era: LongEra,
  year: number,
  date: string,
  externalSource: string,
  contributors: string,
  publisher: string,
  citation: string
}