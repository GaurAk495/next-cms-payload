// collections/Pages.ts
import { GlobalConfig } from "payload";
import { Hero } from "../blocks/Hero";
import { Feature } from "../blocks/Feature";
import { Testimonial } from "../blocks/Testimonial";
import { CTA } from "../blocks/CTA";

export const Home: GlobalConfig = {
  slug: "home",
  label: "Home",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
      maxLength: 80,
    },
    {
      name: "description",
      type: "text",
      localized: true,
      required: true,
      maxLength: 160,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [Hero, Feature, Testimonial, CTA],
    },
  ],
};
