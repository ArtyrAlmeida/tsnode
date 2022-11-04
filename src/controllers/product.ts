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
            res.status(400).send(err);
        }
        else res.status(201).json({ message: "Produto cadastrado com sucesso" });
    })
}

const findAllProducts = (req: Request, res: Response) => {
    ProdutoSchema.find((err, products) => {
        if(err) {
            res.status(404).send(err)
        }
        else res.status(200).send(products);
    })
}

export { working, newProduct, findAllProducts };