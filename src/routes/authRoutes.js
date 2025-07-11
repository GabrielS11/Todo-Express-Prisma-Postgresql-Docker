import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";

const router = express.Router();

//Register new user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    //ADDINg a default todo
    const defaultTodo = `Hello write your first todo!!`;
    await prisma.todo.create({
      data: {
        task: defaultTodo,
        user_id: user.id,
      },
    });

    //create a token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    //Checks the existance of the user
    if (!user) {
      return res.status(404).json({ message: "User doesnt exist" });
    }
    //Compares the password with the encrypt method
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }
    console.log(user);
    //Successfull auth
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

export default router;
