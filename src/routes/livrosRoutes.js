import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listaLivroPorId);
routes.post("/livros", LivroController.cadastraLivros);
routes.put("/livros/:id", LivroController.atualizarLIvro);
routes.delete("/livros/:id", LivroController.excluirLIvro);

export default routes;