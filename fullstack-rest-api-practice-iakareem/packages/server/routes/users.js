import { Router } from 'express';
import data from "../data.js";

const router = Router();

let users = data.map((item, i) => ({ ...item, userIndex: i }))


router.route("/").get((req, res) => {
  res.json(users);
});

router.route("/").post((req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({
      msg: "All field are required"
    })
    return;
  }

  const checkPass = users.find((user) => user.password === password)
  
  if (checkPass) {
    res.status(400).json({
      msg: "user already exist"
    })
    return;
  }

  users.push({
    username,
    password,
    userIndex: (users.length),
  })

  res.status(201).json('New user added')
});

router.route("/:userIndex").put((req, res) => {

  const { username, password } = req.body

  let index = users.findIndex((user) => user.userIndex == +req.params.userIndex);

  users[index] = {
    ...users[index],
    username : username,
    password : password
  }

  res.status(200).json("Success changed");

});

router.route("/:userIndex").delete((req, res) => {
  let delUser = users.filter((user) => user.userIndex != +req.params.userIndex)

  users = delUser
  res.status(200).json("Succes deleted");
});


export default router;