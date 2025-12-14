import { CollectionConfig } from "payload";
import slugify from "slugify";

const Posts: CollectionConfig = {
  slug: "posts",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt"],
  },

  access: {
    read: () => true,
  },

  versions: {
    drafts: true,
  },

  timestamps: true,

  fields: [
    {
      name: "seo",
      type: "group",
      fields: [
        {
          name: "metaTitle",
          type: "text",
          localized: true,
        },
        {
          name: "metaDescription",
          type: "textarea",
          localized: true,
        },
      ],
    },

    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },

    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return slugify(data.title, {
                lower: true,
                strict: true, // removes : , . ! ? etc
                trim: true,
              });
            }
            return value;
          },
        ],
      },
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "excerpt",
      type: "textarea",
      localized: true,
    },

    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
    },

    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },

    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },

    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },

    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Posts;
