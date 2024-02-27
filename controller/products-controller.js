import { getProducts, getProduct, addProduct , deleteProduct, editProduct} from "../models/products-database.js";

export default{
    getMany: async(req,res)=>{
        res.send(await getProducts())
    },

    getMan: async(req,res)=>{
        res.send(await getProduct(+req.params.id))
    },

    addProd: async(req,res)=>{
        const { prod_Name, quantity, amount, category, prod_URL } = req.body;
        await addProduct(prod_Name, quantity, amount, category, prod_URL);
        res.send(await getProducts())
    },

    deleteProd: async(req,res)=>{
        res.send(await deleteProduct(req.params.id));   
    },

    editProd: async(req,res)=>{
        const [product] = await getProduct(+req.params.id)

        let {prod_Name, quantity, amount, category, prod_URL} = req.body

        prod_Name ? prod_Name=prod_Name: {prod_Name}=product

        quantity ? quantity= quantity: {quantity}=product

        amount ? amount= amount: {amount}=product

        category ? category= category: {category}=product

        prod_URL ? prod_URL= prod_URL: {prod_URL}=product

        await editProduct(prod_Name, quantity, amount, category, prod_URL,+req.params.id)
        
        res.json(await getProducts())
    }
}
  