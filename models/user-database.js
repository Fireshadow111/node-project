import {pool} from '../config/config.js'

const getUsers= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM users`)
    return result
  }
  
  const getUser= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE user_ID = ?`,[id])
    return result
  }
  
  const addUser= async(first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile)=>{
    const [user] = await pool.query(`
        INSERT INTO users(first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile) VALUES (?,?,?,?,?,?,?,?)
    `,[first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile])
    return getUsers(user.InsertId)
  }
  
  const deleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE user_ID = ?
    `,[id])
    return getUsers(user.DeleteId)
  } 
  
  const editUser = async(first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile, user_ID)=>{
    await pool.query(`
        UPDATE users
        SET first_Name = ?, last_Name = ?, user_Age = ?, gender = ?, user_Role =?, email_Add = ?, user_Pass = ?, user_Profile = ?
        WHERE user_ID = ?
    `,[first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile, user_ID])
    return getUsers()
  }



  const newUser = async(first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile)=> {
    await pool.query(`
    INSERT INTO users (first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile)
    VALUES (?,?,?,?,?,?,?,?,?);
    `, [first_Name, last_Name, user_Age, gender, user_Role, email_Add, user_Pass, user_Profile])
}

  const checkUser = async(first_Name)=> {
    const [[{password}]] = await pool.query(`
    SELECT user_Pass FROM users WHERE first_Name = ?
    `, [first_Name])
    return password
}
 
  
  
  export {getUsers,getUser,addUser,deleteUser,editUser, newUser,checkUser}