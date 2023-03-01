import type { ObjectId } from "mongodb";

export interface Artifact {
  id?: ObjectId;
  fileName: string;
  fileExtension: string;
  driveLink: string;
  era: string;
  citation: string;
  title?: string;
  shortDescription?: string;
  tags?: string[];
  year?: string;
  date?: string;
  contributors?: string[];
  publisher?: string;
  notes?: string;
}

// export default class Artifact {
// constructor(
// public fileName: string,
// public fileExtension: string,
// public driveLink: string,
// public era: string,
// public citation: string,
// public id?: ObjectId,
// public title?: string,
// public shortDescription?: string,
// public tags?: string[],
// public year?: string,
// public date?: string,
// public contributors?: string[],
// public publisher?: string,
// public notes?: string,
// ) {}
// }

// {
// filename: string, // required
// fileExtension: string, //required
// driveLink: string, // required
// era: [enum], // AT LEAST one of
// citation: string, // required
// title: string,
// shortDescription: string,
// tags: [string, string, string],
// year: string,
// date: string,
// contributors: [{contributor}], // any number of
// publisher: string,
// notes: string,
// }
