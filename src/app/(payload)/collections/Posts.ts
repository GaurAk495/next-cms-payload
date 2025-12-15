import { revalidatePath } from "next/cache";
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
          required: true,
          localized: true,
        },
        {
          name: "metaDescription",
          type: "textarea",
          required: true,
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
      required: true,

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
      required: true,
      relationTo: "media",
    },

    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      required: true,
      hasMany: true,
    },

    {
      name: "author",
      type: "relationship",
      required: true,
      relationTo: "users",
    },

    {
      name: "publishedAt",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "visiblity",
      type: "select",
      options: ["live", "hidden"],
      defaultValue: "live",
      admin: {
        position: "sidebar",
      },
    },
  ],

  trash: true,
  hooks: {
    afterChange: [
      async ({ doc, req, previousDoc, operation }) => {
        if (operation == "create") {
          console.log("opeartion is creating");
          revalidatePath(`/en/blog`);
          revalidatePath(`/de/blog`);
          revalidatePath(`/es/blog`);
          return;
        }
        if (doc._status === "draft") {
          console.log("doc is draft");
          console.log("No invalidation needed for draft");
          return;
        }

        if (doc.visiblity !== previousDoc.visiblity) {
          console.log("visiblity of the post is changed");
          revalidatePath(`/en/blog`);
          revalidatePath(`/de/blog`);
          revalidatePath(`/es/blog`);
          revalidatePath(`/en/blog/${doc.slug}`);
          revalidatePath(`/de/blog/${doc.slug}`);
          revalidatePath(`/es/blog/${doc.slug}`);
          return;
        }

        const locale = new URL(
          req.url || "http://localhost:3000"
        ).searchParams.get("locale");

        revalidatePath(`/${locale}/blog/${doc.slug}`);
        revalidatePath(`/${locale}/blog`);
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        revalidatePath(`/en/blog`);
        revalidatePath(`/de/blog`);
        revalidatePath(`/es/blog`);
        revalidatePath(`/en/blog/${doc.slug}`);
        revalidatePath(`/de/blog/${doc.slug}`);
        revalidatePath(`/es/blog/${doc.slug}`);
      },
    ],
  },
};

export default Posts;
