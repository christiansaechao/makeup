import express from 'express'; 
import AuthRouter from './userAuthentication.js';
import UserRouter from './userRoutes.js';

const UsersRoutes = express.Router();

UsersRoutes.use('/user', UserRouter);
UsersRoutes.use('/auth', AuthRouter);

export default UsersRoutes;