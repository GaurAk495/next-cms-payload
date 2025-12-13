// globals/ContactPage.ts
import { GlobalConfig } from "payload";

export const ContactPage: GlobalConfig = {
  slug: "contact-page",
  label: "Contact Page",
  fields: [
    {
      name: "metadata",
      type: "group",
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
      ],
    },

    {
      name: "hero",
      type: "group",
      fields: [
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
          ],
        },
        {
          name: "description",
          type: "textarea",
          localized: true,
        },
      ],
    },

    {
      name: "form",
      type: "group",
      fields: [
        {
          name: "name",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
            },
            {
              name: "placeholder",
              type: "text",
              localized: true,
            },
          ],
        },
        {
          name: "email",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
            },
            {
              name: "placeholder",
              type: "text",
              localized: true,
            },
          ],
        },
        {
          name: "subject",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
            },
            {
              name: "options",
              type: "array",
              minRows: 1,
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
          name: "message",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
            },
            {
              name: "placeholder",
              type: "textarea",
              localized: true,
            },
          ],
        },
        {
          name: "submit",
          type: "text",
          localized: true,
          required: true,
        },
      ],
    },
    {
      name: "info",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          localized: true,
        },
        {
          name: "email",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
            },
            {
              name: "value",
              type: "email",
            },
          ],
        },
        {
          name: "phone",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
            },
            {
              name: "value",
              type: "text",
            },
            {
              name: "subtitle",
              type: "text",
              localized: true,
            },
          ],
        },
        {
          name: "visit",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
            },
            {
              name: "value",
              type: "textarea",
            },
          ],
        },
      ],
    },
  ],
};
