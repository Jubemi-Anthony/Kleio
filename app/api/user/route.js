import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";


export async function POST(req){
    const {name, email, img} = await req.json();
    await connectMongoDB();
    await User.create({name, email, img});
    return NextResponse.json({message: "User Created"}, {status: 201});
}