// globals/Footer.ts
import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  fields: [
    // Brand section
    {
      name: "brand",
      type: "group",
      fields: [
        {
          name: "description",
          type: "textarea",
          localized: true,
          required: true,
        },
      ],
    },

    // Navigation sections
    {
      name: "sections",
      type: "group",
      fields: [
        {
          name: "product",
          type: "group",
          fields: [
            {
              name: "title",
              type: "text",
              localized: true,
              required: true,
            },
            {
              name: "items",
              type: "array",
              fields: [
                {
                  name: "label",
                  type: "text",
                  localized: true,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "resources",
          type: "group",
          fields: [
            {
              name: "title",
              type: "text",
              localized: true,
              required: true,
            },
            {
              name: "items",
              type: "array",
              fields: [
                {
                  name: "label",
                  type: "text",
                  localized: true,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "company",
          type: "group",
          fields: [
            {
              name: "title",
              type: "text",
              localized: true,
              required: true,
            },
            {
              name: "items",
              type: "array",
              fields: [
                {
                  name: "label",
                  type: "text",
                  localized: true,
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },

    // Copyright
    {
      name: "copyright",
      type: "text",
      localized: true,
      required: true,
    },

    // Legal links
    {
      name: "legal",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          localized: true,
          required: true,
        },
      ],
    },
  ],
};
