// const { MongoClient } = require('mongodb');
// or as an es module:
import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "subway";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Full Set");
  let data = collection.find().toArray(); // TODO await? its still the wrong type, need to iterate over documents i think
  //
  // the following code examples can be pasted here...
  //
  return "done.";
}
//
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Full Set");
  return {
    post: collection,
    // post2: "now ur posting with gas",
  };
}
