import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDatabase } from "./connection";
import User from "@/models/user.model";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name:"credentials",
      credentials:{
        email:{label: "Email", type: "text"},
        password:{label: "Password", type: "password"},
      },
      async authorize(credentials) {
        await connectDatabase();
        const user = await User.findOne({email:credentials?.email});
        return user;
      },
    }),
  ],
  callbacks: {
    async session({session}: any) {
      await connectDatabase();

      const isExistingUser=await User.findOne({
        email:session?.user?.email,
      });

      if (!isExistingUser) {
        const newUser=await User.create({
          email:session.user?.email,
          name:session.user?.name,
          username:session.user?.name?.replaceAll(" ", "-"),
          profilePhoto:session.user?.image,
        });

        session.currentUser = newUser;
      }

      session.currentUser = isExistingUser;

      return session;
    },
  },
  session:{strategy: "jwt"},
  jwt:{secret:process.env.NEXTAUTH_JWT_SECRET},
  secret:process.env.NEXTAUTH_SECRET,
};

export const getAuthServer = () => getServerSession(authOptions);