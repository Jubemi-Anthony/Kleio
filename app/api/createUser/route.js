import { connectMongoDB } from "@/lib/mongodb";
import DataUsers from "@/models/DataUsers";
import { NextResponse } from "next/server";


export async function POST(req){
    const data = await req.json();
    const {name, email, img, auth} = data;
    await connectMongoDB();
    let selected = await DataUsers.findOne({email: email})
    if(!selected){
        await DataUsers.create({name, email, img, auth});
        selected = await DataUsers.findOne({email: email});
    }else{
        console.log('USER ALREADY EXISTS!!');
    }
    return NextResponse.json({message: "User Created", user: selected.id}, {status: 201});
}