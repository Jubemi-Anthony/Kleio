import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        userName:{
            type: String
        },
        bio:{
            type: String
        },
        auth:{
            type: Boolean,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        password:{
            type: String
        },
        img:{
            type: String
        }
    }, {timestamps: true}
);

const User = models.User || mongoose.model("User", userSchema);

export default User;