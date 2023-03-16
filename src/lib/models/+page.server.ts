import { collections, connectToDatabase } from "$lib/db";
// import type Artifact from "$lib/models/artifact";
import type { Collection } from "mongodb";
import type { Artifact } from "$lib/models/artifact";

export const load = async ({}) => {
  connectToDatabase();
  const collection<Artifact> = collections.fullSet;
  const data = (await (collection as Collection).find({})
    .toArray()) as Artifact[];
  return {
    data: data,
  };
};

// export async function GET() {
//   const data = await db.collection("Full Set").find().toArray();
//   return {
//     status: 200,
//     body: { data },
//   };
// }
