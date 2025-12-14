// packages/db/models/Post.ts
import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  slug: String,
  updatedAt: Date,
});

export const Post = models.Post || model("Post", PostSchema);
