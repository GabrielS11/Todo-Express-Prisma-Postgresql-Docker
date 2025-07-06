import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

const PORT = process.env.PORT || 5000;

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

app.use(express.json());

// ROTAS API PRIMEIRO
app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

// DEPOIS arquivos estáticos (públicos)
app.use(express.static(path.join(__dirname, "../public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Setup server with the appropiate PORT
app.listen(PORT, () => {
  console.log(`Server has started on port, ${PORT}`);
});
