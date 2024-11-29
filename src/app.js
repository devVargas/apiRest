import "dotenv/config";
import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão feita com sucesso");
});

const app = express();
routes(app);

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Registro Criado");
});

app.put("livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].nome = req.body.nome;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Deletado");
});

export default app;