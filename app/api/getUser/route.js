import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";


export async function POST(req){
    const {id} = await req.json();
    await connectMongoDB();
    const selected = await User.findOne({_id: id})
    return NextResponse.json({message: "User Found", user: selected}, {status: 201});
}