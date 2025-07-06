import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  //Selecting all todos where user_id is equal
  const getTodos = db.prepare(`SELECT * FROM todo WHERE user_id = ?`);
  const todos = getTodos.all(req.user_id);
  res.json(todos);
});

router.post("/", (req, res) => {
  const { task } = req.body;
  const insertTodo = db.prepare(
    `INSERT INTO todo (user_id, task) VALUES (?, ?)`
  );
  const result = insertTodo.run(req.user_id, task);

  res.json({ id: result.lastInsertRowid, task, completed: 0 });
});

router.put("/:id", (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;

  const updatedTodo = db.prepare(`UPDATE todo SET completed = ? WHERE id = ?`);

  updatedTodo.run(completed, id);

  res.json({ message: "Todo completed" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const user_id = req.user_id;
  const deleteTodo = db.prepare(
    `DELETE FROM todo WHERE id = ? AND user_id = ?`
  );

  deleteTodo.run(id, user_id);

  res.send({ message: "Todo deleted" });
});

export default router;
