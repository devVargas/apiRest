import livro from "../models/Livro.js";

class LivroController {

    static async listaLivros(req, res){
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    };

    static async cadastraLivros (req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Registro Criado", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar item`});
        };
    };
};

export default LivroController;