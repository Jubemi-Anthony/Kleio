import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

//USER NOT FOUND: 0
//WRONG SIGNIN OPTION: 1
//WRONG PASSWORD: 2

export async function POST(req){
    const {email, password} = await req.json();
    await connectMongoDB();
    try {
        const selected = await User.findOne({email: email})
        if(!selected){
            console.log('USER NOT FOUND');
            return NextResponse.json({message: "0", message1: 'USER NOT FOUND'}, {status: 400});
        }else if(!selected.password){
            console.log('WRONG SIGN IN OPTION');
            return NextResponse.json({message: "1", message1: 'WRONG SIGN IN OPTION'}, {status: 400});
        }else if(selected.password !== password){
            console.log('WRONG PASSWORD');
            return NextResponse.json({message: "2", message1: 'WRONG PASSWORD'}, {status: 400});
        }else if(selected.password === password){
            console.log('SUCCESS');
            return NextResponse.json({message: "SUCCESS", user: selected}, {status: 201});
        }else{
            console.log('WTF?');
            return NextResponse.json({message: "SOMETHING WENT WRONG"}, {status: 400});
        }
    } catch (error) {
            console.log(`There was an error ${error}`);
            return NextResponse.json({message: "SOMETHING WENT WRONG"}, {status: 500});
    }
}