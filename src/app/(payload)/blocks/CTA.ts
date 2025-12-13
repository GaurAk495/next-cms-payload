// blocks/CTA.ts
import { Block } from "payload";

export const CTA: Block = {
  slug: "cta",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "buttons",
      type: "group",
      fields: [
        {
          name: "primary",
          type: "text",
          localized: true,
        },
        {
          name: "secondary",
          type: "text",
          localized: true,
        },
      ],
    },
  ],
};
