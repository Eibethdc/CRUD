import { models } from "../models/queries.js";

const create = async (req, res) =>{
    try {
        const { titulo, img, descripcion } = req.body;
        const response = await models.create(titulo, img, descripcion)
        res.status(201).json('Post creado con exito')
    } catch (error) {
        res.status(500).json(error);
    }
    
}
const getData = async (req, res) =>{
    try {
        const response = await models.getData();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const editPost = async (req, res) =>{
    try {
        const { id } = req.params
        const { titulo, img, descripcion } = req.body
        const response = await models.editProduct(titulo, img, descripcion, id)
        res.status(200).json('Post editado')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deletePost = async (req, res) =>{
    try {
        const id = req.params.id
        const response = await models.deletePost(id)
        res.status(200).json('Post eliminado')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const controllers = {
    create,
    getData,
    editPost,
    deletePost
}