import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
         username:{
            type : String,
            unique: true,
            required: true
         },
         email:{
            type: String,
            required:true,
            unique:true,
         },
         password:{
            type: String,
            required:true,
         },
         profilePicture:{
            type:String,
            default:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Yaficbwe3N2MjD2Sg0J9OgHaHa%26pid%3DApi&f=1&,ipt=dc3f76e26120730f7a6514ded141555978e9471240181da8b43485c4b209ec88&ipo=images"
         }
}, {timestamps:true}
);

const User = mongoose.model('User',userSchema);

export default User;