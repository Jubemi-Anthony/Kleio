import { connectMongoDB } from "@/lib/mongodb";
import DataUsers from "@/models/DataUsers";
import { NextResponse } from "next/server";


export async function POST(req){
    const data = await req.json();
    const {editItem, email} = data;

    await connectMongoDB();
    let selected;

    switch (editItem) {
        case 'Full Name':
           selected = await DataUsers.findOneAndUpdate({email: email}, {$set: {name: data.name}}, {returnOriginal: false});
           console.log(`Successfully updated the ${editItem}`);
        break;
        case 'Bio': 
           selected = await DataUsers.findOneAndUpdate({email: email}, {$set: {bio: data.bio}}, {returnOriginal: false});
           console.log(`Successfully updated the ${editItem}`);
        break;
        case 'User Name': 
           selected = await DataUsers.findOneAndUpdate({email: email}, {$set: {userName: data.userName}}, {returnOriginal: false});
           console.log(`Successfully updated the ${editItem}`);
        break;
        case 'Password': 
           selected = await DataUsers.findOneAndUpdate({email: email}, {$set: {password: data.password}}, {returnOriginal: false});
           console.log(`Successfully updated the ${editItem}`);
        break;
        default:
        break;
    }
    
    return NextResponse.json({message: "UPDATE SUCCESSFUL", user: selected}, {status: 201});
}