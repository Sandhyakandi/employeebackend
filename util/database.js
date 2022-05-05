import mongodb from "mongodb";
import { DATABASE_URL } from "../config/index.js";
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(DATABASE_URL)
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
export const getDb = () => {
  if (_db) return _db;
  throw "No Database Found";
};
export default mongoConnect;