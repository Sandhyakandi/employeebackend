import { getDb } from "../util/database.js";
import {REGISTER_DETAIL_COLLECTION} from "../config/index.js";
const AddemployeeController = {

    async storeEmployeeDetail(req,res){
        let jsonResult = { status: "0", msg: "No detail Found", data: [] };
      //console.log(req.query.name);
      try {
        const db = getDb();
        
        await db.collection(REGISTER_DETAIL_COLLECTION)
          .insertOne(req.body).then((response)=>{
              console.log(response);
              if(response.acknowledged){
                  jsonResult.status="1";
                  jsonResult.msg="record Inserted Successfully";
              }
          });
      } catch (err) {
        console.log(err.message);
      }
      console.log(jsonResult);
      res.json(jsonResult);
    }
}
export default AddemployeeController;