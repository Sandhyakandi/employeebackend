import { getDb } from "../util/database.js";
import {LOGIN_DETAIL_COLLECTION} from "../config/index.js";
const LoginDetailController = {
  async getAllLoginDetail(req, res) {
    let jsonResult = { status: "0", msg: "No detail Found", data: [] };
    const db = getDb();
    const data=await db
    .collection(LOGIN_DETAIL_COLLECTION)
    .find().toArray();
    console.log(data); 
    try {
      //const LoginDetail = [{  username: "Admin",password:"Admin123" }];
       if(data){
        jsonResult.data.push(...data);
        jsonResult.status = "1";
        jsonResult.msg="detail Found";
        }
 
    } catch (err) {
      console.log(err.message);
    }
    res.json(jsonResult);
  },
}
export default LoginDetailController;