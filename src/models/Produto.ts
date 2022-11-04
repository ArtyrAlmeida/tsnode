import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProdutoSchema = mongoose.model('Produto', new Schema({
    id: String,
    nome: String,
    preco: Number,
    descricao: String,
}));

export default ProdutoSchema;