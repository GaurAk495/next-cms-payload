import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
    mimeTypes: ["image/*"],
  },
  admin: {
    description: "Images uploaded here go directly to Cloudinary",
  },
  fields: [
    {
      name: "url",
      type: "text",
      required: true,
    },
    {
      name: "publicId",
      type: "text",
    },
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
