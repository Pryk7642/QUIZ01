import { MongoClient } from 'mongodb';

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.DATABASE_URL);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
