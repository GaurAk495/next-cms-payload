import { Category, Media, User } from "@/app/payload-types";

export const isMedia = (value: unknown): value is Media =>
  typeof value === "object" && value !== null && "url" in value;

export const isCategory = (value: unknown): value is Category =>
  typeof value === "object" && value !== null && "title" in value;

export const isUser = (value: unknown): value is User =>
  typeof value === "object" && value !== null && "name" in value;
