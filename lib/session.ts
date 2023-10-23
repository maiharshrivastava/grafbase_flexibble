import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { Adapter, AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import  JsonWebToken  from "jsonwebtoken";
import { JWT } from 'next-auth/jwt';
import { Session } from "inspector";
import { SessionInterface } from "@/common.types";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  // jwt: {
  //   encode: ({ secret, token }) => {
  //     // Implement your own JWT encoding logic if needed
  //   },
  //   decode: async ({ secret, token }) => {
  //     // Implement your own JWT decoding logic if needed
  //   }
  // },
  theme: {
    colorScheme: 'light',
    logo: './logo.png'
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        // You can implement custom signIn logic here
        
        return true; // Return true if sign-in is successful
      } catch (error: any) {
        console.log(error);
        return false; // Return false if there's an error during sign-in
      }
    }
  }
};

export async function getCurrentUser(){
  const session = await getServerSession(authOptions)as SessionInterface

  return session;

}
