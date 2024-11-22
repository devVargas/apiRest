import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        "id": 1,
        "nome": "O Senhor dos Aneis"
    },
    {
        "id": 2,
        "nome": "Ninho de Dragões"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Inicio do Servidor");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Registro Criado");
})

app.put("livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].nome = req.body.nome;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Deletado");
})

export default app;