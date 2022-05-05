import { getDb } from "../util/database.js";
import {REGISTER_DETAIL_COLLECTION} from "../config/index.js";
const ReportsController = {
  async getAllEmployeeDetail(req, res) {
    let jsonResult = { status: "0", msg: "No detail Found", data: [] };
    const db = getDb();
    const data=await db
    .collection(REGISTER_DETAIL_COLLECTION)
    .find().toArray();
    console.log(data); 
    try {
      
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
export default ReportsController;