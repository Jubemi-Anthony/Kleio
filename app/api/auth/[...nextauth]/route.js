import { CURRENTURL } from "@/app/CONSTANTS";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({user, account}){
            if(account.provider === 'google'){
                const {name, email, image} = user;
                try {
                    const res = await fetch(`http://${CURRENTURL}/api/createUser`, {
                        method: 'POST',
                        headers: {
                            "Content-Type" : "application/json"
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            img: image,
                            auth: true
                        })
                    })
                    if (res.ok){
                        const data = await res.json();
                        console.log(data.user);
                        return `/home/${data.user}`;
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            return user;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };