import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);           
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listaLivroPorId(req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);           
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }; 

    static async cadastraLivros (req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Registro Criado", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar item`});
        }
    };

    static async atualizarLIvro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro att" });           
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async excluirLIvro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).json({ message: "Livro excluido" });           
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };
};

export default LivroController;