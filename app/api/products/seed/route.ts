import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

const products = [
  { title: "Explorer Backpack 40L", price: "$89", image: "/images/explore.jpg", alt: "40L adventure backpack in forest setting" },
  { title: "Waterproof Travel Journal", price: "$29", image: "/images/water.jpeg", alt: "Premium waterproof travel notebook" },
  { title: "Solar Power Bank 20000mAh", price: "$49", image: "/images/powerBank.webp", alt: "Rugged solar charger on hiking trail" },
  { title: "Compact Hiking Compass", price: "$19", image: "/images/compas1.jpg", alt: "Classic brass hiking compass" },
  { title: "All most fearless", price: "$19", image: "/images/book1.jpg", alt: "Travel guide book" },
  { title: "Distination", price: "$19", image: "/images/book2.jpg", alt: "Travel guide book" },
  { title: "Piramid", price: "$19", image: "/images/book3.jpg", alt: "Travel guide book" },
  { title: "Distination", price: "$19", image: "/images/book4.jpg", alt: "Travel guide book" },
  { title: "The Unusual knowledge", price: "$19", image: "/images/book5.jpg", alt: "Travel guide book" },
  { title: "Distination", price: "$19", image: "/images/book6.jpg", alt: "Travel guide book" },
  { title: "Distination", price: "$19", image: "/images/book7.jpg", alt: "Travel guide book" },
  { title: "Distination", price: "$19", image: "/images/sunGlass.jpg", alt: "Sun glass for travel" },
  { title: "Camera", price: "$19", image: "/images/tr2.png", alt: "Travel camera" },
  { title: "Airpot", price: "$19", image: "/images/airpot.jpg", alt: "Wireless airpods" },
  { title: "Travel Neck Pillow", price: "$25", image: "/images/neckpillow.jpg", alt: "Comfortable memory foam travel neck pillow" },
  { title: "Portable Camping Tent", price: "$120", image: "/images/tent.jpg", alt: "Lightweight camping tent for travelers" },
  { title: "Action Camera 4K", price: "$199", image: "/images/actioncam.jpg", alt: "Waterproof 4K action camera for adventure" },
  { title: "Travel Organizer Bag", price: "$35", image: "/images/organizer.jpg", alt: "Travel organizer bag for cables and gadgets" },
  { title: "Foldable Travel Backpack", price: "$39", image: "/images/foldbag.jpg", alt: "Foldable lightweight travel backpack" },
  { title: "Camping Cooking Set", price: "$55", image: "/images/cooking.jpg", alt: "Portable camping cooking kit" },
  { title: "Portable Water Filter", price: "$45", image: "/images/filter.jpg", alt: "Portable water filter for hiking trips" },
  { title: "Adventure Travel Map", price: "$22", image: "/images/map.jpg", alt: "Scratch off world travel map" },
  { title: "Travel First Aid Kit", price: "$30", image: "/images/firstaid.jpg", alt: "Compact travel first aid medical kit" },
  { title: "Bluetooth Travel Speaker", price: "$60", image: "/images/speaker.jpg", alt: "Portable bluetooth speaker for travel" },
  { title: "Lightweight Sleeping Bag", price: "$85", image: "/images/sleepbag.jpg", alt: "Compact sleeping bag for camping trips" },
  { title: "Drone Mini Camera", price: "$350", image: "/images/drone.jpg", alt: "Mini drone camera for travel photography" },
  { title: "Travel Laptop Sleeve", price: "$28", image: "/images/laptopbag.jpg", alt: "Protective laptop sleeve for travel" },
  { title: "Foldable Water Bottle", price: "$18", image: "/images/waterbottle.jpg", alt: "Foldable silicone water bottle for hiking" },
  { title: "Travel Tripod Stand", price: "$48", image: "/images/tripod.jpg", alt: "Portable tripod for cameras and phones" },
  { title: "Adventure Hiking Shoes", price: "$140", image: "/images/hikingshoes.jpg", alt: "Durable hiking shoes for mountain travel" },
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tripgraphy");

    await db.collection("products").deleteMany({});
    await db.collection("products").insertMany(products);

    return NextResponse.json({
      message: "Products seeded successfully",
      count: products.length,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to seed products" },
      { status: 500 }
    );
  }
}