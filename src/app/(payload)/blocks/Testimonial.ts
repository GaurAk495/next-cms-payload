// blocks/Testimonial.ts
import { Block } from "payload";

export const Testimonial: Block = {
  slug: "testimonial",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "quote",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "author",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "role",
          type: "text",
          localized: true,
        },
      ],
    },
  ],
};
