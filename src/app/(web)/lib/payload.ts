// apps/web/lib/payload.ts
import payload, { getPayload, GlobalSlug } from "payload";
import config from "@payload-config";
import { SupportedLanguages } from "../locales/getData";

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
