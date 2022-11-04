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
    });
}

const findAllProducts = (req: Request, res: Response) => {
    ProdutoSchema.find((err, products) => {
        if(err) {
            res.status(404).send(err);
        }
        else res.status(200).send(products);
    });
}

const findProductById = (req: Request, res: Response) => {
    const productId = req.params.product_id;

    ProdutoSchema.findById(productId, (err, product) => {
        if(err) {
            res.status(404).send(err);
        }
        else res.status(200).send(product);
    });
}

const updateProduct = (req: Request, res: Response) => {
    const productId = req.params.product_id;
    const { nome, preco, descricao } = req.body;

    ProdutoSchema.findById(productId, (err, product) => {
        if(err) {
            res.status(404).send(err);
        }
        if (nome) product.nome = nome;
        if (preco) product.preco = preco;
        if (descricao) product.descricao = descricao;

        product.save((err) => {
            if(err) {
               res.status(400).send(err);
            }
            else res.status(200).send(product);
        });
    });
}

const deleteProduct = (req: Request, res: Response) => {
    const productId = req.params.product_id;

    ProdutoSchema.deleteOne({
        _id: productId
    }, (err) => {
        if(err) res.status(400).send(err);
        else res.status(202).json({ message: "Deleted" });
    })
}

export { working, newProduct, findAllProducts, findProductById, updateProduct, deleteProduct };