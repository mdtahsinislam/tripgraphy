import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

const packages = [
  {
    title: "Dubai Tour Packages",
    desc: "Experience luxury, skyscrapers, deserts & shopping in the dazzling city of the future!",
    price: "$150",
    img: "/images/travel-visited-1.jpg",
  },
  {
    title: "Delhi Tour Packages",
    desc: "Discover rich history, vibrant markets, delicious street food & iconic monuments.",
    price: "$200",
    img: "/images/img-2.jpg",
  },
  {
    title: "Japan Tour Packages",
    desc: "Cherry blossoms, futuristic cities, ancient temples and world-class cuisine await!",
    price: "$230",
    img: "/images/img-3.jpg",
  },
  {
    title: "Australia Tour Packages",
    desc: "Beaches, wildlife, Sydney Opera House and the Great Barrier Reef adventure.",
    price: "$180",
    img: "/images/img-4.jpg",
  },
  {
    title: "China Tour Packages",
    desc: "Great Wall, modern skylines, pandas and thousands of years of culture.",
    price: "$220",
    img: "/images/img-5.jpg",
  },
  {
    title: "Singapore Tour Packages",
    desc: "Gardens by the Bay, Marina Bay Sands, Sentosa Island & amazing food scene.",
    price: "$140",
    img: "/images/img-6.jpg",
  },
  {
    title: "Spain Tour Packages",
    desc: "Flamenco, Gaudi architecture, sunny beaches and tapas culture.",
    price: "$150",
    img: "/images/img-7.jpg",
  },
  {
    title: "Canada Tour Packages",
    desc: "Stunning nature, Niagara Falls, Vancouver & Toronto city vibes.",
    price: "$400",
    img: "/images/img-8.jpg",
  },
  {
    title: "Bali Tour Packages",
    desc: "Tropical paradise with beaches, rice terraces, temples and wellness retreats.",
    price: "$200",
    img: "/images/img-9.jpg",
  },
  {
    title: "Nepal Tour Packages",
    desc: "Himalayas, Kathmandu heritage sites, adventure trekking & spiritual vibes.",
    price: "$4000",
    img: "/images/img-10.jpg",
  },
  {
    title: "Bangladesh Tour Packages",
    desc: "Explore your own beautiful country – Sundarbans, Cox’s Bazar, tea gardens & more!",
    price: "$270",
    img: "/images/img-11.jpg",
  },
  {
    title: "Japan Tour Packages",
    desc: "Second listing – perfect for extended holidays or seasonal cherry blossom tours.",
    price: "$420",
    img: "/images/img-12.jpg",
  },
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tripgraphy");

    await db.collection("packages").deleteMany({});
    await db.collection("packages").insertMany(packages);

    return NextResponse.json({
      message: "Packages seeded successfully",
      count: packages.length,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to seed packages" },
      { status: 500 }
    );
  }
}