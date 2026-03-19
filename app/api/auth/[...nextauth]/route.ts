


//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\auth\[...nextauth]\route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [

    // Email + Password Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {

        const client = await clientPromise;
        const db = client.db("tripgraphy");
        const users = db.collection("users");

        const user = await users.findOne({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.photo,
        };
      },
    }),

    // Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {

    async signIn({ user, account }) {

      if (account?.provider === "google") {

        const client = await clientPromise;
        const db = client.db("tripgraphy");
        const users = db.collection("users");

        const existingUser = await users.findOne({
          email: user.email,
        });

        if (!existingUser) {
          await users.insertOne({
            name: user.name,
            email: user.email,
            photo: user.image,
            createdAt: new Date(),
          });
        }
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };