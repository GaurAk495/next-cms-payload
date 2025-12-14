// packages/db/mongo.ts
import mongoose from "mongoose";

const DATABASE_URI = process.env.DATABASE_URI!;

if (!DATABASE_URI) {
  throw new Error("DATABASE_URI missing");
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(DATABASE_URI);
}
