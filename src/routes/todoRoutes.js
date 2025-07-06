import express from "express";
import prisma from "../prismaClient.js";

const router = express.Router();

router.get("/", async (req, res) => {
  //Selecting all todos where user_id is equal
  const todos = await prisma.todo.findMany({
    where: {
      user_id: req.user_id,
    },
  });

  res.json(todos);
});

router.post("/", async (req, res) => {
  const { task } = req.body;

  const todo = await prisma.todo.create({
    data: {
      task,
      user_id: req.user_id,
    },
  });

  res.json(todo);
});

router.put("/:id", async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;

  const updatedTodo = await prisma.todo.update({
    where: {
      id: parseInt(id),
      user_id: req.user_id,
    },
    data: {
      completed: !!completed,
    },
  });

  res.json(updatedTodo);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user_id = req.user_id;
  await prisma.todo.delete({
    where: {
      id: parseInt(id),
      user_id: user_id,
    },
  });

  res.send({ message: "Todo deleted" });
});

export default router;
