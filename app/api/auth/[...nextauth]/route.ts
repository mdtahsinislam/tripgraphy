


// // // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\auth\[...nextauth]\route.ts
// // // // // // // import NextAuth from "next-auth";
// // // // // // // import CredentialsProvider from "next-auth/providers/credentials";
// // // // // // // import GoogleProvider from "next-auth/providers/google";
// // // // // // // import clientPromise from "@/lib/mongodb";
// // // // // // // import bcrypt from "bcryptjs";

// // // // // // // const handler = NextAuth({
// // // // // // //   providers: [

// // // // // // //     // Email + Password Login
// // // // // // //     CredentialsProvider({
// // // // // // //       name: "Credentials",
// // // // // // //       credentials: {
// // // // // // //         email: {},
// // // // // // //         password: {},
// // // // // // //       },

// // // // // // //       async authorize(credentials) {

// // // // // // //         const client = await clientPromise;
// // // // // // //         const db = client.db("tripgraphy");
// // // // // // //         const users = db.collection("users");

// // // // // // //         const user = await users.findOne({
// // // // // // //           email: credentials?.email,
// // // // // // //         });

// // // // // // //         if (!user) {
// // // // // // //           throw new Error("User not found");
// // // // // // //         }

// // // // // // //         const isValid = await bcrypt.compare(
// // // // // // //           credentials!.password,
// // // // // // //           user.password
// // // // // // //         );

// // // // // // //         if (!isValid) {
// // // // // // //           throw new Error("Invalid password");
// // // // // // //         }

// // // // // // //         return {
// // // // // // //           id: user._id.toString(),
// // // // // // //           name: user.name,
// // // // // // //           email: user.email,
// // // // // // //           image: user.photo,
// // // // // // //           role: user.role || "user", // ✅ include role
// // // // // // //         };
// // // // // // //       },
// // // // // // //     }),

// // // // // // //     // Google Login
// // // // // // //     GoogleProvider({
// // // // // // //       clientId: process.env.GOOGLE_CLIENT_ID!,
// // // // // // //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// // // // // // //     }),
// // // // // // //   ],

// // // // // // //   session: {
// // // // // // //     strategy: "jwt",
// // // // // // //   },

// // // // // // //   pages: {
// // // // // // //     signIn: "/login",
// // // // // // //   },

// // // // // // //   callbacks: {

// // // // // // //     async signIn({ user, account }) {

// // // // // // //       if (account?.provider === "google") {

// // // // // // //         const client = await clientPromise;
// // // // // // //         const db = client.db("tripgraphy");
// // // // // // //         const users = db.collection("users");

// // // // // // //         const existingUser = await users.findOne({
// // // // // // //           email: user.email,
// // // // // // //         });

// // // // // // //         if (!existingUser) {
// // // // // // //           await users.insertOne({
// // // // // // //             name: user.name,
// // // // // // //             email: user.email,
// // // // // // //             photo: user.image,
// // // // // // //             role: "user", // ✅ important
// // // // // // //             createdAt: new Date(),
// // // // // // //           });
// // // // // // //         }
// // // // // // //       }

// // // // // // //       return true;
// // // // // // //     },
// // // // // // //   },
// // // // // // // });

// // // // // // // export { handler as GET, handler as POST };



// // // // // // // app/api/auth/[...nextauth]/route.ts
// // // // // // import NextAuth from "next-auth";
// // // // // // import CredentialsProvider from "next-auth/providers/credentials";
// // // // // // import GoogleProvider from "next-auth/providers/google";
// // // // // // import clientPromise from "@/lib/mongodb";
// // // // // // import bcrypt from "bcryptjs";

// // // // // // const handler = NextAuth({
// // // // // //   providers: [
// // // // // //     // Email + Password Login
// // // // // //     CredentialsProvider({
// // // // // //       name: "Credentials",
// // // // // //       credentials: {
// // // // // //         email: {},
// // // // // //         password: {},
// // // // // //       },
// // // // // //       async authorize(credentials) {
// // // // // //         const client = await clientPromise;
// // // // // //         const db = client.db("tripgraphy");
// // // // // //         const users = db.collection("users");

// // // // // //         const user = await users.findOne({ email: credentials?.email });
// // // // // //         if (!user) throw new Error("User not found");

// // // // // //         const isValid = await bcrypt.compare(credentials!.password, user.password);
// // // // // //         if (!isValid) throw new Error("Invalid password");

// // // // // //         return {
// // // // // //           id: user._id.toString(),
// // // // // //           name: user.name,
// // // // // //           email: user.email,
// // // // // //           image: user.photo,
// // // // // //           role: user.role || "user",
// // // // // //         };
// // // // // //       },
// // // // // //     }),

// // // // // //     // Google Login
// // // // // //     GoogleProvider({
// // // // // //       clientId: process.env.GOOGLE_CLIENT_ID!,
// // // // // //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// // // // // //     }),
// // // // // //   ],

// // // // // //   session: {
// // // // // //     strategy: "jwt",
// // // // // //   },

// // // // // //   pages: {
// // // // // //     signIn: "/login",
// // // // // //   },

// // // // // //   callbacks: {
// // // // // //     // Persist user in MongoDB on Google login
// // // // // //     async signIn({ user, account }) {
// // // // // //       if (account?.provider === "google") {
// // // // // //         const client = await clientPromise;
// // // // // //         const db = client.db("tripgraphy");
// // // // // //         const users = db.collection("users");

// // // // // //         const existingUser = await users.findOne({ email: user.email });
// // // // // //         if (!existingUser) {
// // // // // //           await users.insertOne({
// // // // // //             name: user.name,
// // // // // //             email: user.email,
// // // // // //             photo: user.image || "",
// // // // // //             role: "user",       // ✅ important: always store role
// // // // // //             createdAt: new Date(),
// // // // // //           });
// // // // // //         }
// // // // // //       }
// // // // // //       return true;
// // // // // //     },

// // // // // //     // Include role in JWT token
// // // // // //     async jwt({ token, user }) {
// // // // // //       if (user) {
// // // // // //         token.role = user.role || "user";
// // // // // //       }
// // // // // //       return token;
// // // // // //     },

// // // // // //     // Include role in session
// // // // // //     async session({ session, token }) {
// // // // // //       if (token) {
// // // // // //         session.user.role = token.role as string;
// // // // // //       }
// // // // // //       return session;
// // // // // //     },
// // // // // //   },
// // // // // // });

// // // // // // export { handler as GET, handler as POST };



// // // // // // app/api/auth/[...nextauth]/route.ts
// // // // // import NextAuth from "next-auth";
// // // // // import CredentialsProvider from "next-auth/providers/credentials";
// // // // // import GoogleProvider from "next-auth/providers/google";
// // // // // import clientPromise from "@/lib/mongodb";
// // // // // import bcrypt from "bcryptjs";

// // // // // const handler = NextAuth({
// // // // //   providers: [
// // // // //     CredentialsProvider({
// // // // //       name: "Credentials",
// // // // //       credentials: { email: {}, password: {} },
// // // // //       async authorize(credentials) {
// // // // //         const client = await clientPromise;
// // // // //         const db = client.db("tripgraphy");
// // // // //         const users = db.collection("users");

// // // // //         const user = await users.findOne({ email: credentials?.email });
// // // // //         if (!user) throw new Error("User not found");

// // // // //         const isValid = await bcrypt.compare(credentials!.password, user.password);
// // // // //         if (!isValid) throw new Error("Invalid password");

// // // // //         return {
// // // // //           id: user._id.toString(),
// // // // //           name: user.name,
// // // // //           email: user.email,
// // // // //           image: user.photo,
// // // // //           role: user.role || "user",
// // // // //         };
// // // // //       },
// // // // //     }),

// // // // //     GoogleProvider({
// // // // //       clientId: process.env.GOOGLE_CLIENT_ID!,
// // // // //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// // // // //     }),
// // // // //   ],

// // // // //   session: {
// // // // //     strategy: "jwt",
// // // // //   },

// // // // //   pages: {
// // // // //     signIn: "/login",
// // // // //   },

// // // // //   callbacks: {
// // // // //     async signIn({ user, account }) {
// // // // //       if (account?.provider === "google") {
// // // // //         const client = await clientPromise;
// // // // //         const db = client.db("tripgraphy");
// // // // //         const users = db.collection("users");

// // // // //         // Upsert: insert if not exist, keep role = "user"
// // // // //         await users.updateOne(
// // // // //           { email: user.email },
// // // // //           {
// // // // //             $setOnInsert: {
// // // // //               name: user.name,
// // // // //               email: user.email,
// // // // //               photo: user.image || "",
// // // // //               role: "user",
// // // // //               createdAt: new Date(),
// // // // //             },
// // // // //           },
// // // // //           { upsert: true }
// // // // //         );
// // // // //       }
// // // // //       return true;
// // // // //     },

// // // // //     async jwt({ token, user }) {
// // // // //       const client = await clientPromise;
// // // // //       const db = client.db("tripgraphy");
// // // // //       const users = db.collection("users");

// // // // //       // If first login, user object exists
// // // // //       if (user) {
// // // // //         token.role = user.role || "user";
// // // // //         return token;
// // // // //       }

// // // // //       // For subsequent requests, fetch from DB using email in token
// // // // //       const dbUser = await users.findOne({ email: token.email });
// // // // //       if (dbUser) token.role = dbUser.role || "user";

// // // // //       return token;
// // // // //     },

// // // // //     async session({ session, token }) {
// // // // //       session.user.role = token.role as string;
// // // // //       return session;
// // // // //     },
// // // // //   },
// // // // // });

// // // // // export { handler as GET, handler as POST };


// // // // import NextAuth from "next-auth";
// // // // import CredentialsProvider from "next-auth/providers/credentials";
// // // // import GoogleProvider from "next-auth/providers/google";
// // // // import clientPromise from "@/lib/mongodb";
// // // // import bcrypt from "bcryptjs";

// // // // const handler = NextAuth({
// // // //   providers: [

// // // //     // ✅ Credentials Login
// // // //     CredentialsProvider({
// // // //       name: "Credentials",
// // // //       credentials: {
// // // //         email: {},
// // // //         password: {},
// // // //       },

// // // //       async authorize(credentials) {
// // // //         const client = await clientPromise;
// // // //         const db = client.db("tripgraphy");
// // // //         const users = db.collection("users");

// // // //         const user = await users.findOne({
// // // //           email: credentials?.email,
// // // //         });

// // // //         if (!user) {
// // // //           throw new Error("User not found");
// // // //         }

// // // //         const isValid = await bcrypt.compare(
// // // //           credentials!.password,
// // // //           user.password
// // // //         );

// // // //         if (!isValid) {
// // // //           throw new Error("Invalid password");
// // // //         }

// // // //         return {
// // // //           id: user._id.toString(),
// // // //           name: user.name,
// // // //           email: user.email,
// // // //           image: user.photo,
// // // //           role: user.role || "user",
// // // //         };
// // // //       },
// // // //     }),

// // // //     // ✅ Google Login
// // // //     GoogleProvider({
// // // //       clientId: process.env.GOOGLE_CLIENT_ID!,
// // // //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// // // //     }),
// // // //   ],

// // // //   session: {
// // // //     strategy: "jwt",
// // // //   },

// // // //   pages: {
// // // //     signIn: "/login",
// // // //   },

// // // //   callbacks: {

// // // //     // ✅ Google DB FIX
// // // //     async signIn({ user, account }) {

// // // //       if (account?.provider === "google") {

// // // //         const client = await clientPromise;
// // // //         const db = client.db("tripgraphy");
// // // //         const users = db.collection("users");

// // // //         const existingUser = await users.findOne({
// // // //           email: user.email,
// // // //         });

// // // //         if (!existingUser) {
// // // //           // নতুন user হলে insert
// // // //           await users.insertOne({
// // // //             name: user.name,
// // // //             email: user.email,
// // // //             photo: user.image,
// // // //             role: "user",
// // // //             createdAt: new Date(),
// // // //           });
// // // //         } else {
// // // //           // ⚠️ existing user হলে role ensure/update
// // // //           await users.updateOne(
// // // //             { email: user.email },
// // // //             {
// // // //               $set: {
// // // //                 role: existingUser.role || "user",
// // // //                 name: user.name,
// // // //                 photo: user.image,
// // // //               },
// // // //             }
// // // //           );
// // // //         }
// // // //       }

// // // //       return true;
// // // //     },

// // // //     // ✅ JWT এ role add
// // // //     async jwt({ token, user }) {
// // // //       if (user) {
// // // //         token.role = user.role;
// // // //       }

// // // //       // DB থেকে role load (Google case fix)
// // // //       if (!token.role) {
// // // //         const client = await clientPromise;
// // // //         const db = client.db("tripgraphy");
// // // //         const dbUser = await db.collection("users").findOne({
// // // //           email: token.email,
// // // //         });

// // // //         token.role = dbUser?.role || "user";
// // // //       }

// // // //       return token;
// // // //     },

// // // //     // ✅ Session এ role পাঠানো
// // // //     async session({ session, token }) {
// // // //       if (session.user) {
// // // //         session.user.role = token.role;
// // // //       }
// // // //       return session;
// // // //     },
// // // //   },
// // // // });

// // // // export { handler as GET, handler as POST };


// // // import NextAuth from "next-auth";
// // // import CredentialsProvider from "next-auth/providers/credentials";
// // // import GoogleProvider from "next-auth/providers/google";
// // // import clientPromise from "@/lib/mongodb";
// // // import bcrypt from "bcryptjs";

// // // const handler = NextAuth({
// // //   providers: [
// // //     // ✅ Credentials Login
// // //     CredentialsProvider({
// // //       name: "Credentials",
// // //       credentials: {
// // //         email: {},
// // //         password: {},
// // //       },

// // //       async authorize(credentials) {
// // //         const client = await clientPromise;
// // //         const db = client.db("tripgraphy");
// // //         const users = db.collection("users");

// // //         const user = await users.findOne({
// // //           email: credentials?.email,
// // //         });

// // //         if (!user) {
// // //           throw new Error("User not found");
// // //         }

// // //         const isValid = await bcrypt.compare(
// // //           credentials!.password,
// // //           user.password
// // //         );

// // //         if (!isValid) {
// // //           throw new Error("Invalid password");
// // //         }

// // //         return {
// // //           id: user._id.toString(),
// // //           name: user.name,
// // //           email: user.email,
// // //           image: user.photo,
// // //           role: user.role || "user",
// // //         };
// // //       },
// // //     }),

// // //     // ✅ Google Login
// // //     GoogleProvider({
// // //       clientId: process.env.GOOGLE_CLIENT_ID!,
// // //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// // //     }),
// // //   ],

// // //   session: {
// // //     strategy: "jwt",
// // //   },

// // //   pages: {
// // //     signIn: "/login",
// // //   },

// // //   callbacks: {

// // //     // ✅ FIX 1: Google login → DB insert/update + role ensure
// // //     async signIn({ user, account }) {
// // //       if (account?.provider === "google") {
// // //         const client = await clientPromise;
// // //         const db = client.db("tripgraphy");
// // //         const users = db.collection("users");

// // //         const existingUser = await users.findOne({
// // //           email: user.email,
// // //         });

// // //         if (!existingUser) {
// // //           // 🔥 NEW USER → insert with role
// // //           await users.insertOne({
// // //             name: user.name,
// // //             email: user.email,
// // //             photo: user.image,
// // //             role: "user",
// // //             createdAt: new Date(),
// // //           });
// // //         } else {
// // //           // 🔥 EXISTING USER → ensure role exists
// // //           if (!existingUser.role) {
// // //             await users.updateOne(
// // //               { email: user.email },
// // //               {
// // //                 $set: { role: "user" },
// // //               }
// // //             );
// // //           }
// // //         }
// // //       }

// // //       return true;
// // //     },

// // //     // ✅ FIX 2: JWT → always fetch role from DB
// // //     async jwt({ token, user }) {
// // //       const client = await clientPromise;
// // //       const db = client.db("tripgraphy");
// // //       const users = db.collection("users");

// // //       const dbUser = await users.findOne({
// // //         email: token.email,
// // //       });

// // //       token.role = dbUser?.role || "user";

// // //       return token;
// // //     },

// // //     // ✅ FIX 3: Session → attach role
// // //     async session({ session, token }) {
// // //       if (session.user) {
// // //         session.user.role = token.role as string;
// // //       }
// // //       return session;
// // //     },
// // //   },
// // // });

// // // export { handler as GET, handler as POST };



// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\auth\[...nextauth]\route.ts
// // import NextAuth from "next-auth";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import GoogleProvider from "next-auth/providers/google";
// // import clientPromise from "@/lib/mongodb";
// // import bcrypt from "bcryptjs";

// // const handler = NextAuth({
// //   providers: [
// //     // Email + Password Login
// //     CredentialsProvider({
// //       name: "Credentials",
// //       credentials: {
// //         email: {},
// //         password: {},
// //       },
// //       async authorize(credentials) {
// //         const client = await clientPromise;
// //         const db = client.db("tripgraphy");
// //         const users = db.collection("users");
// //         const user = await users.findOne({
// //           email: credentials?.email,
// //         });
// //         if (!user) {
// //           throw new Error("User not found");
// //         }
// //         const isValid = await bcrypt.compare(
// //           credentials!.password,
// //           user.password
// //         );
// //         if (!isValid) {
// //           throw new Error("Invalid password");
// //         }
// //         return {
// //           id: user._id.toString(),
// //           name: user.name,
// //           email: user.email,
// //           image: user.photo,
// //           role: user.role || "user", // ✅ include role
// //         };
// //       },
// //     }),
// //     // Google Login
// //     GoogleProvider({
// //       clientId: process.env.GOOGLE_CLIENT_ID!,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// //     }),
// //   ],
// //   session: {
// //     strategy: "jwt",
// //   },
// //   pages: {
// //     signIn: "/login",
// //   },
// //   callbacks: {
// //     async signIn({ user, account }) {
// //       if (account?.provider === "google") {
// //         const client = await clientPromise;
// //         const db = client.db("tripgraphy");
// //         const users = db.collection("users");
// //         const existingUser = await users.findOne({
// //           email: user.email,
// //         });
// //         if (!existingUser) {
// //           await users.insertOne({
// //             name: user.name,
// //             email: user.email,
// //             photo: user.image,
// //             role: "user", // ✅ This is already correct - it will store "user"
// //             createdAt: new Date(),
// //           });
// //         }
// //       }
// //       return true;
// //     },
// //     // ✅ Add this callback to ensure role is included in the session
// //     async jwt({ token, user }) {
// //       if (user) {
// //         token.role = user.role;
// //       }
// //       return token;
// //     },
// //     async session({ session, token }) {
// //       if (session.user) {
// //         session.user.role = token.role as string;
// //       }
// //       return session;
// //     },
// //   },
// // });

// // export { handler as GET, handler as POST };


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\auth\[...nextauth]\route.ts

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import clientPromise from "@/lib/mongodb";
// import bcrypt from "bcryptjs";

// const handler = NextAuth({
//   providers: [

//     // ✅ Credentials Login
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {},
//         password: {},
//       },

//       async authorize(credentials) {
//         const client = await clientPromise;
//         const db = client.db("tripgraphy");
//         const users = db.collection("users");

//         const user = await users.findOne({
//           email: credentials?.email,
//         });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(
//           credentials!.password,
//           user.password
//         );

//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return {
//           id: user._id.toString(),
//           name: user.name,
//           email: user.email,
//           image: user.photo,
//           role: user.role || "user",
//         };
//       },
//     }),

//     // ✅ Google Login
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   pages: {
//     signIn: "/login",
//   },

//   callbacks: {

//     // ✅ Google DB sync
//     async signIn({ user, account }) {
//       if (account?.provider === "google") {

//         const client = await clientPromise;
//         const db = client.db("tripgraphy");
//         const users = db.collection("users");

//         const existingUser = await users.findOne({
//           email: user.email,
//         });

//         if (!existingUser) {
//           await users.insertOne({
//             name: user.name,
//             email: user.email,
//             photo: user.image,
//             role: "user",
//             createdAt: new Date(),
//           });
//         } else {
//           // ensure role exists
//           await users.updateOne(
//             { email: user.email },
//             {
//               $set: {
//                 role: existingUser.role || "user",
//               },
//             }
//           );
//         }
//       }

//       return true;
//     },

//     // ✅ JWT → load role from DB every time
//     async jwt({ token }) {
//       const client = await clientPromise;
//       const db = client.db("tripgraphy");

//       const dbUser = await db.collection("users").findOne({
//         email: token.email,
//       });

//       token.role = dbUser?.role || "user";

//       return token;
//     },

//     // ✅ Session → expose role to frontend
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\auth\[...nextauth]\route.ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [

    // ✅ Credentials Login
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
          role: user.role || "user",
        };
      },
    }),

    // ✅ Google Login
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

    // ✅ Google DB sync (MAIN FIX)
    async signIn({ user, account }) {
      if (account?.provider === "google") {

        const client = await clientPromise;
        const db = client.db("tripgraphy");
        const users = db.collection("users");

        const existingUser = await users.findOne({
          email: user.email,
        });

        if (!existingUser) {
          // 🆕 New user → insert
          await users.insertOne({
            name: user.name,
            email: user.email,
            photo: user.image,
            role: "user",
            createdAt: new Date(),
          });
        } else {
          // 🔥 Existing user → ensure role exists
          await users.updateOne(
            { email: user.email },
            {
              $set: {
                role: existingUser.role || "user",
                name: user.name,
                photo: user.image,
              },
            }
          );
        }
      }

      return true;
    },

    // ✅ JWT → always fetch role from DB
    async jwt({ token, user }) {
      const client = await clientPromise;
      const db = client.db("tripgraphy");

      const dbUser = await db.collection("users").findOne({
        email: token.email,
      });

      token.role = dbUser?.role || "user";

      if (user) {
        token.id = user.id;
      }

      return token;
    },

    // ✅ Session → expose role to frontend
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };