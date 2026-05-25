import dns from 'dns';
import { MongoClient } from 'mongodb';

dns.setServers(['8.8.8.8', '1.1.1.1']);

const connectionString =
  process.env.ATLAS_URI ||
  'mongodb+srv://wasinee678678_db_user:JJBeT9SgUvLD9TmE@cluster0.uudjto1.mongodb.net/';
const client = new MongoClient(connectionString);
let clientPromise;

export async function getDb() {
  if (!clientPromise) clientPromise = client.connect();
  const connectedClient = await clientPromise;
  return connectedClient.db('sample_training');
}

