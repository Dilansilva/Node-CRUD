import express from "express";

const router = express.Router();

const users = [
    {
        firstName : "Dilan",
        lastName : "Niko",
        age : 24
    },
    {
        firstName : "jhon",
        lastName : "Silva",
        age : 25
    }
]

router.get('/',(req,res) => {
    res.send(users);
})

router.post('/', (req,res) => {
    users.push(req.body)
    res.send("Data Added!");
});

export default router;