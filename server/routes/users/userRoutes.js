import express from 'express';
const userRouter = express.Router();

const user = [
    {
        id: 1,
        firstName: "john",
        lastName: "doe",
        age: 42,
        email: "johndoe@email.com",
    }
]

userRouter.get('/', (req, res) => {
    res.status(200).send(user);
});

export default userRouter;