// // // import Stripe from "stripe";
// // // import { NextResponse } from "next/server";

// // // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// // // export async function POST(req: Request) {

// // //   const body = await req.json();
// // //   const { title, price, image, email } = body;

// // //   const session = await stripe.checkout.sessions.create({
// // //     payment_method_types: ["card"],

// // //     line_items: [
// // //       {
// // //         price_data: {
// // //           currency: "usd",
// // //           product_data: {
// // //             name: title,
// // //             images: [image],
// // //           },
// // //           unit_amount: Number(price) * 100,
// // //         },
// // //         quantity: 1,
// // //       },
// // //     ],

// // //     mode: "payment",

// // //     success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment-success?title=${title}&price=${price}&image=${image}&email=${email}`,

// // //     cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,
// // //   });

// // //   return NextResponse.json({ url: session.url });
// // // }



// // // import Stripe from "stripe";
// // // import { NextResponse } from "next/server";

// // // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// // // export async function POST(req: Request) {

// // //   try {

// // //     const body = await req.json();

// // //     const { title, price, image, email } = body;

// // //     const session = await stripe.checkout.sessions.create({

// // //       payment_method_types: ["card"],

// // //       line_items: [
// // //         {
// // //           price_data: {
// // //             currency: "usd",
// // //             product_data: {
// // //               name: title,
// // //               images: [`${process.env.NEXT_PUBLIC_SITE_URL}${image}`],
// // //             },
// // //             unit_amount: Number(price) * 100,
// // //           },
// // //           quantity: 1,
// // //         },
// // //       ],

// // //       mode: "payment",

// // //       success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
// // //       cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,

// // //     });

// // //     return NextResponse.json({
// // //       url: session.url,
// // //     });

// // //   } catch (error) {

// // //     console.error(error);

// // //     return NextResponse.json(
// // //       { error: "Stripe session failed" },
// // //       { status: 500 }
// // //     );

// // //   }

// // // }

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\create-checkout-session\route.ts
// // // import { NextRequest, NextResponse } from "next/server";
// // // import Stripe from "stripe";

// // // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// // // export async function POST(req: NextRequest) {
// // //   try {
// // //     const body = await req.json();

// // //     const session = await stripe.checkout.sessions.create({
// // //       payment_method_types: ["card"],

// // //       line_items: [
// // //         {
// // //           price_data: {
// // //             currency: "usd",
// // //             product_data: {
// // //               name: body.title,
// // //             },
// // //             unit_amount: body.price * 100,
// // //           },
// // //           quantity: 1,
// // //         },
// // //       ],

// // //       mode: "payment",

// // //       success_url: `http://localhost:3000/success`,
// // //       cancel_url: `http://localhost:3000/shop`,
// // //     });

// // //     return NextResponse.json({ url: session.url });
// // //   } catch (error) {
// // //     return NextResponse.json({ error: "Stripe error" });
// // //   }
// // // }


// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\create-checkout-session\route.ts
// // // import Stripe from "stripe";
// // // import { NextResponse } from "next/server";

// // // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
// // //   apiVersion: "2022-11-15",
// // // });

// // // export async function POST(req: Request) {
// // //   try {
// // //     const { title, price } = await req.json();
// // //     const amount = price * 100; // cents

// // //     const session = await stripe.checkout.sessions.create({
// // //       payment_method_types: ["card"],   // Card only
// // //       mode: "payment",
// // //       line_items: [
// // //         {
// // //           price_data: {
// // //             currency: "usd",
// // //             product_data: { name: title },
// // //             unit_amount: amount,
// // //           },
// // //           quantity: 1,
// // //         },
// // //       ],
// // //       success_url: `${process.env.NEXTAUTH_URL}/success`,
// // //       cancel_url: `${process.env.NEXTAUTH_URL}/shop`,
// // //     });

// // //     return NextResponse.json({ url: session.url });
// // //   } catch (err: any) {
// // //     console.log(err);
// // //     return NextResponse.json({ error: err.message }, { status: 500 });
// // //   }
// // // }


// // import { NextResponse } from "next/server";
// // import Stripe from "stripe";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// // export async function POST(req: Request) {
// //   try {
// //     const { title, price, userEmail } = await req.json();

// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ["card"],
// //       mode: "payment",

// //       line_items: [
// //         {
// //           price_data: {
// //             currency: "usd",
// //             product_data: {
// //               name: title,
// //             },
// //             unit_amount: price * 100,
// //           },
// //           quantity: 1,
// //         },
// //       ],

// //       success_url: `${process.env.NEXTAUTH_URL}/success?title=${title}&price=${price}&email=${userEmail}`,
// //       cancel_url: `${process.env.NEXTAUTH_URL}/shop`,
// //     });

// //     return NextResponse.json({ url: session.url });

// //   } catch (error) {
// //     return NextResponse.json({ error: "Stripe error" }, { status: 500 });
// //   }
// // }
  

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\create-checkout-session\route.ts

// import Stripe from "stripe";
// import { NextResponse } from "next/server";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export async function POST(req: Request) {
//   try {
//     const { title, price } = await req.json();

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",

//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: title,
//             },
//             unit_amount: price * 100,
//           },
//           quantity: 1,
//         },
//       ],

//       success_url: `${process.env.NEXTAUTH_URL}/success?title=${title}&price=${price}`,
//       cancel_url: `${process.env.NEXTAUTH_URL}/shop`,
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ error: "Stripe Error" });
//   }
// }



import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  const sessionUser = await getServerSession();

  const { title, price } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    payment_method_types: ["card"],

    customer_email: sessionUser?.user?.email || undefined,

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: title,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],

    success_url: `${process.env.NEXTAUTH_URL}/success?title=${title}&price=${price}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/shop`,
  });

  return NextResponse.json({ url: session.url });
}