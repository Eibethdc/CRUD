import pool from "../config/config.js";

const create = async ( titulo, img, descripcion) => {
    const sql = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3) RETURNING*"
    const values = [titulo, img, descripcion]

    try {
        const response = await pool.query(sql, values)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

const getData = async () =>{
    const sql = 'SELECT * FROM posts'
    try{
        const response = await pool.query(sql)
        return response.rows
    }catch(error){
        console.log(error.message)
    }
}

const editPost = async (titulo, img, descripcion, id) =>{
    const sql = "UPDATE posts SET titulo = $1, img = $2, description= $3 WHERE id = $4 returning *"
    const values = [titulo, img, descripcion, id]
    try {
        const response = await pool.query(sql, values)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

const deletePost = async (id) =>{
    const sql = "DELETE FROM posts WHERE id = $1 RETURNING *";
    const values = [id];
    try {
        const response = await pool.query(sql, values)
        return response.rows
    } catch (error) {
        console.log(error)
    }
}

export const models ={
    create,
    getData,
    editPost,
    deletePost
}