import { connectMongoDB } from "@/lib/mongodb";
import DataUsers from "@/models/DataUsers";
import { NextResponse } from "next/server";


export async function POST(req){
    const {id} = await req.json();
    await connectMongoDB();
    const selected = await DataUsers.findOne({_id: id})
    return NextResponse.json({message: "User Found", user: selected}, {status: 201});
}