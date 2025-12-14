// apps/web/lib/payload.ts
import payload, { getPayload, GlobalSlug } from "payload";
import config from "@payload-config";
import { SupportedLanguages } from "../locales/data";

let payloadClient: typeof payload;

async function getPayloadClient() {
  if (!payloadClient) {
    payloadClient = await getPayload({
      config,
    });
  }
  return payloadClient;
}

export async function getData(slug: string, locale: SupportedLanguages) {
  const payload = await getPayloadClient();
  return await payload.findGlobal({
    slug: slug as GlobalSlug,
    locale,
  });
}

export async function getPosts(locale: SupportedLanguages) {
  const payload = await getPayloadClient();
  return await payload.find({
    collection: "posts",
    select: {
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      categories: true,
      author: true,
      publishedAt: true,
      createdAt: true,
    },
    where: {
      status: {
        equals: "published",
      },
    },
    locale,
    depth: 2,
    limit: 10,
  });
}

export async function getPostBySlug(slug: string, locale: SupportedLanguages) {
  const payload = await getPayloadClient();
  return await payload.find({
    collection: "posts",
    select: {
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      categories: true,
      author: true,
      publishedAt: true,
      createdAt: true,
      seo: true,
      content: true,
    },
    where: {
      status: {
        equals: "published",
      },
      slug: {
        equals: slug,
      },
    },
    locale,
    depth: 2,
    limit: 1,
  });
}
