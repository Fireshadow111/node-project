import {getUsers,getUser,addUser,deleteUser,editUser} from '../models/user-database.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.SECRET_KEY

export default{

    getUsers: async(req,res)=>{
      res.send(await getUsers())
  },
  
  getUser: async(req,res)=>{
      res.send(await getUser(+req.params.id))
  },
  
  addUser: async (req, res) => {
    const { first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile } = req.body;
    bcrypt.hash(user_Pass, 10, async (err, hash) => {
        if (err) throw err;
        await addUser(first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile);
        res.send(await getUsers());

        const token = jwt.sign({ email: email_Add, SECRET_KEY }, { expiresIn: '1h' });

        res.cookie('token', token, {httpOnly: true});

        res.send({
            msg: "Your account has been created successfully"
        })
    });
},
  
  deleteUser: async(req,res)=>{
      res.send(await deleteUser(req.params.id));   
  },
  
  editUser: async(req,res)=>{
      const [user] = await getUser(+req.params.id)
  
      let {first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile} = req.body
  
      first_Name ? first_Name=first_Name: {first_Name}=user
  
      last_Name ? last_Name= last_Name: {last_Name}=user
  
      user_Age ? user_Age= user_Age: {user_Age}=user
  
      gender ? gender = gender : {gender }=user
  
      user_Role ? user_Role= user_Role: {user_Role}= user
  
      email_Add ? email_Add = email_Add: {email_Add} = user
  
      user_Pass ? user_Pass = user_Pass: {user_Pass} = user
  
      user_Profile ? user_Profile = user_Profile : {user_Profile} = user
  
      await editUser(first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile, +req.params.id)
      
      res.json(await getUsers())
  },

  // hash password
// signUpUser:('/users',(req,res)=>{
//     const {first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile} = req.body
//     bcrypt.hash(user_Pass, 10, async(err, hash)=> {
//         if(err) throw err
//         await newUser(first_Name, last_Name, user_Age, gender, user_Role, email_Add, hash, user_Profile)
//         res.send({
//             msg: "You have created an account"
//         })
//     })
// })
  
  
  
  }
  
  
  