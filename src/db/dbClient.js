
const { MongoClient, ServerApiVersion } = require('mongodb');
//bachelorsHome
//jDAlQDHeHn8utj7g
const uri = "mongodb+srv://bachelorsHome:jDAlQDHeHn8utj7g@cluster0.vxlatcb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient =new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }

});

const dbClient = mongoClient.connect()

export default dbClient;



