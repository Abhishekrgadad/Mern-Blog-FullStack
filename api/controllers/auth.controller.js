import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const signup = async (req,res,next) =>{ //added next here to use Middleware
    const {username ,email , password} = req.body;

    //Check the input values of usernmae ,email , password with different way of conditions
    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required'));
    }

    //Password Encryption using bcryptjs
    const hashedPassword = bcryptjs.hashSync(password,10);

    //User imported from the user.model.js
    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });
    
    try {
        await newUser.save();
    res.json('Signup successful');
    } catch (error) {
        next(error); //Middleware used here
        
    }
    

};
