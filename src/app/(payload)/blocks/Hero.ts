// blocks/Hero.ts
import { Block } from "payload";

export const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "badge",
      type: "text",
      localized: true,
    },
    {
      name: "title",
      type: "group",
      fields: [
        {
          name: "part1",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "highlight",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "part2",
          type: "text",
          localized: true,
        },
      ],
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
    {
      name: "trustedBy",
      type: "text",
      localized: true,
    },
  ],
};
