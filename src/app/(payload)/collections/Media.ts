import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
  },
  admin: {
    description: "Images uploaded here go directly to Cloudinary",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
