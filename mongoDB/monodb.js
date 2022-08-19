const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('Actor');
    const actress = database.collection('Actress');
    // Query for a movie that has the title 'Back to the Future'
    
    const actres = await actress.insertOne({
        "name":"jenifer lawrance",
        "movie":"notebook",
        "age":36,
        "nominate":true
    });
    console.log(actres);
    const show_actress=await actress.find({"age":45})
    console.log(show_actress)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);