import express from 'express';

const AuthRouter = express.Router();

AuthRouter.get('/', (req, res) => {
    res.send("This is the User Auth Route");
});

AuthRouter.post('/login', (req, res) => {
    res.send("user signed in");
});

AuthRouter.post('/signup', (req, res) => {
    res.send("created new user");
});

export default AuthRouter;