import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbname = process.env.MONGODB_DB;
const cachedDb =null;
const cachedClient = null;
//const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
if(!uri){
  throw new Error('Defina a Variavel MONGODB_URI no ambiente')
}
if(!dbname){
  throw new Error('Defina a Variavel MONGODB_DB no ambiente')
}
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db(dbname);
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
//   return database
// }
// run().catch(console.dir);

export async function connectToDatabase(){
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbname)
  
  
  return { client: client, db: db}
  
}

export default connectToDatabase;
