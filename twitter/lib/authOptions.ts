import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions:AuthOptions={
    providers:[
        CredentialsProvider({
        name:"credentials",
        credentials:{
            email:{label:"Email",type:"text"},
            password:{label:"Password",type:"password"}
        },
        async authorize(credentials){
            
            }
        })
    ],
}