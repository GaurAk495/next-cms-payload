import { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    defaultColumns: ["name", "email", "createdAt"],
  },
  access: {
    read: ({ req }) => !!req.user, // admin only
    create: () => true, // public form
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "subject", type: "text" },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
};
