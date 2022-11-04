import { Request, Response } from "express";
import ProdutoSchema from "../models/produto";

const working = (req: Request, res: Response) => {
    res.json({ message: "Working!" });
}

const newProduct = (req: Request, res: Response) => {
    const produto = new ProdutoSchema();

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.descricao = req.body.descricao;

    produto.save((err) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: "Produto cadastrado com sucesso" })
    })
}

export { working, newProduct };