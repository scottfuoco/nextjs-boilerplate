import { MongoClient, ObjectId } from 'mongodb';

const host = process.env.MONGODB_HOST;
const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const port = process.env.MONGODB_PORT;
const options = '?poolSize=20&writeConcern=majority&authSource=dev_db';

const connectionString = `mongodb://${user}:${password}@${host}:${port
}`;

const client = new MongoClient(`${connectionString}/${options}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { connectionString, ObjectId };
export default client;
