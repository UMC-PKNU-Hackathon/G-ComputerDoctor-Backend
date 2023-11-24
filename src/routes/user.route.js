// user.route.js

import express from "express";

import asyncHandler from 'express-async-handler';

import { userSignin } from "file:///C:/UMC-Node.js/test_folder/src/controllers/user.controllers.js";
import { userlogin } from "file:///C:/UMC-Node.js/test_folder/src/controllers/user.controllers.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/login', asyncHandler(userlogin));