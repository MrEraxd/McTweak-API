import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017/MCTweak'
let db

const connectToServer = async () => {
  const client = new MongoClient(url)
  await client.connect()
  db = client.db('MCTweak')
}

export { connectToServer, db }
