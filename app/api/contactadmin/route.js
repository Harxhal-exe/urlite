import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("urlite"); // change this to your DB name
    const collection = db.collection("contacts");

    // Insert into DB
    await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
