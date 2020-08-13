import express from "express";

const app = express();

app.use(express.json());

const port = process.env.PORT || 3333;

app.get("/users", (req, res) => {
  return res.send('Acessou a rota "get:users"');
});

app.post("/users", (req, res) => {
  console.log(req.body);
  return res.send('Acessou a rota "post:users"');
});

app.listen(port);
