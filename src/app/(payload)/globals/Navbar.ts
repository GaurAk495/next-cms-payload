import { GlobalConfig } from "payload";

export const Navbar: GlobalConfig = {
  slug: "navbar",
  label: "Navbar",
  fields: [
    {
      name: "navItems",
      type: "array",
      minRows: 1,
      labels: {
        singular: "Nav Item",
        plural: "Nav Items",
      },
      fields: [
        {
          name: "label",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
      ],
    },

    /* =========================
       ACTION BUTTONS
    ========================== */
    {
      name: "buttons",
      type: "array",
      labels: {
        singular: "Button",
        plural: "Buttons",
      },
      fields: [
        {
          name: "label",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
        {
          name: "variant",
          type: "select",
          defaultValue: "secondary",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
      ],
    },
  ],
};
