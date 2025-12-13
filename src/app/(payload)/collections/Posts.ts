import { CollectionConfig } from "payload";
import slugify from "slugify";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt"],
  },
  access: {
    read: () => true, // public access
  },
  versions: {
    drafts: true, // enable draft/publish
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
        },
        {
          name: "metaDescription",
          type: "textarea",
        },
      ],
    },
    {
      name: "title",
      type: "text",
      required: true,
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
              return slugify(data.title, { lower: true });
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
    },
    {
      name: "content",
      type: "richText",
      required: true,
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
