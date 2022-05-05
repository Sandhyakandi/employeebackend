import express from "express";
import ReportsController from "../controllers/ReportsController.js";
import LoginDetailController from "../controllers/LoginDetailController.js";
import AddemployeeController from "../controllers/AddemployeeController.js"
const router = express.Router();

router.post("/Login/get", LoginDetailController.getAllLoginDetail);//http://localhost:4000/api/Login/gett
router.post("/Register/new", AddemployeeController.storeEmployeeDetail);//http://localhost:4000/api/Register/post
router.post("/Reports/get", ReportsController.getAllEmployeeDetail);//http://localhost:4000/api/

export default router;




/*
 



*/

/*




import express from "express";
import postController from "../controllers/postController.js";
import rootController from "../controllers/rootController.js";
import getController from "./../controllers/getController.js";
import deleteController from "./../controllers/deleteController.js";
import putController from "./../controllers/putController.js";

//post is not a request here,post is  method assigning some route to using post method
const router = express.Router();
router.post("/",rootController.baseUrl)
router.post("/courses/get", getController.getAllCourseDetail);
router.post("/courses/post",postController.postCourseData);
router.put("/courses/post",putController.putCourseData);

router.delete("/courses/post",deleteController.deleteCourseData);
//router.post("/courses/get", getController.getAllCourseDetail);
export default router;

*/




/*



April -6  


import express from "express";
import getController from "./../controllers/getController.js";
import deleteController from './../controllers/deleteController';
import putController from './../controllers/putController';
import ReportsController from './../controllers/ReportsController';

const router = express.Router();
router.get("/courses/get", getController.getAllCourseDetail);
router.post("/courses/get", getController.getAllCourseDetail);
export default router;




*/





