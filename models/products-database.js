import {pool} from '../config/config.js'

const getProducts= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM products`)
    return result
}

const getProduct= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM products
    WHERE prod_ID = ?`,[id])
    return result
}

const addProduct= async(prod_Name, quantity, amount, category, prod_URL)=>{
    const [product] = await pool.query(`
        INSERT INTO products(prod_Name, quantity, amount, category, prod_URL) VALUES (?,?,?,?,?)
    `,[prod_Name, quantity, amount, category, prod_URL])
    return getProducts(product.InsertId)
}

const deleteProduct = async(id)=>{
    const [product] = await pool.query(`
        DELETE FROM products
        WHERE prod_ID = ?
    `,[id])
    return getProducts(product.DeleteId)
} 

const editProduct = async(prod_Name, quantity, amount, category,prod_URL,prod_ID)=>{
    await pool.query(`
        UPDATE products
        SET prod_Name = ?, quantity = ?, amount = ?, category = ?, prod_URL=?
        WHERE prod_ID = ?
    `,[prod_Name, quantity, amount, category,prod_URL, prod_ID])
    return getProducts()
}



export {getProducts,getProduct,addProduct,deleteProduct,editProduct}