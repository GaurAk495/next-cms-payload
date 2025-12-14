// blocks/Feature.ts
import { Block } from "payload";

export const Feature: Block = {
  slug: "feature",
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
      name: "cards",
      type: "array",
      minRows: 1,
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
          name: "icon",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
