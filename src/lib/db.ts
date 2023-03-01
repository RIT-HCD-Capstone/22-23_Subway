// External Dependencies
// import { MongoClient } from "mongodb";
import * as mongoDB from "mongodb";
import { COLLECTION_NAME, DB_NAME, DB_URI } from "$env/static/private";
// import type { Artifact } from "./models/artifact";
// const client = new mongoDB.MongoClient(DB_URI);
// await client.connect();
// export default client.db("Subway"); // select database

// Global Variables
export const collections: { fullSet?: mongoDB.Collection } = {};

// Initialize Connection
export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_URI);

  await client.connect();

  const db: mongoDB.Db = client.db(DB_NAME);

  const fullSetCollection: mongoDB.Collection = db.collection(
    COLLECTION_NAME,
  );

  collections.fullSet = fullSetCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${fullSetCollection.collectionName}`,
  );
}
