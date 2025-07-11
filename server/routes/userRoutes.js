import { Router } from "express";
import { addUserRating, getUserCourseProgress, getUserData, purchaseCourse, updateUserCourseProgress, userEnrolledCourses } from "../controllers/userController.js";

const userRouter=Router();

userRouter.get('/data',getUserData);
userRouter.get('/enrolled-courses',userEnrolledCourses);
userRouter.post('/purchase',purchaseCourse);
userRouter.post('/update-course-progress',updateUserCourseProgress);
userRouter.post('/get-course-progress',getUserCourseProgress);
userRouter.post('/add-rating',addUserRating);




export default userRouter;

