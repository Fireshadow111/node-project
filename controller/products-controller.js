import { getProducts, getProduct, addProduct , deleteProduct, editProduct} from "../models/products-database.js";


export default{
    getProducts: async(req,res)=>{
        try{
            res.send(await getProducts())
        } catch(error){
            console.error('Error getting products');
            res.status(500).json({msg: "Internal Server Error"});
        }
   
    },

    getProduct: async(req,res)=>{

        try{
            res.send(await getProduct(+req.params.id))
        } catch(error){

            console.error('Error getting products');
            res.status(404).json({msg: "Product not found"});
        }

       
    },

    addProduct: async(req,res)=>{

        try{
            const { prod_Name, quantity, amount, category, prod_URL } = req.body;
            await addProduct(prod_Name, quantity, amount, category, prod_URL);
            res.send(await getProducts())

        } catch(error){
            console.error('Error adding product');
            res.status(404).json({msg: "Could not add product"});
        }

      
    },

    deleteProduct: async(req,res)=>{
        res.send(await deleteProduct(req.params.id));   
    },

    editProduct: async(req,res)=>{
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
  