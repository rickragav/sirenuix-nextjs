import { MongoClient } from 'mongodb';

let client;

export async function connectToDatabase() {
  try {
    if (!client || !client.isConnected) {
      const uri = process.env.MONGODB_URI;
      const dbName = 'sirenuix'; // Replace with your actual database name

      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await client.connect();
      console.log('Connected to MongoDB');
    }

    return client.db('sirenuix'); // Specify the database name here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error; // Rethrow the error to handle it at the higher level if needed
  }
}
