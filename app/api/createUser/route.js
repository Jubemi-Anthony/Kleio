import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";


export async function POST(req){
    const {name, email, img, auth} = await req.json();
    await connectMongoDB();
    let selected = await User.findOne({email: email})
    if(!selected){
        await User.create({name, email, img});
        selected = await User.findOne({email: email});
    }else{
        console.log('USER ALREADY EXISTS!!');
    }
    return NextResponse.json({message: "User Verified", user: selected.id}, {status: 201});
}