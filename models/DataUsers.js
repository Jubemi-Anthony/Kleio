import mongoose, { Schema, models } from "mongoose";

const dataUsersSchema = new Schema(
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

const DataUsers = models.DataUsers || mongoose.model("DataUsers", dataUsersSchema);

export default DataUsers;