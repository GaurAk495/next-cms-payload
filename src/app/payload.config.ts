import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { Users } from "./(payload)/collections/Users";
import { Media } from "./(payload)/collections/Media";
import { Footer } from "./(payload)/globals/Footer";
import { Home } from "./(payload)/globals/Home";
import { ContactPage } from "./(payload)/globals/Contact";
import { Navbar } from "./(payload)/globals/Navbar";
import { ContactSubmissions } from "./(payload)/collections/ContactSubmissions";
import Posts from "./(payload)/collections/Posts";
import Categories from "./(payload)/collections/Categories";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, ContactSubmissions, Posts, Categories, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  plugins: [
    // vercelBlobStorage({
    //   enabled: true,
    //   collections: {
    //     media: true,
    //   },
    //   token: process.env.BLOB_READ_WRITE_TOKEN,
    // }),
  ],
  globals: [Home, Footer, ContactPage, Navbar],
  localization: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
    fallback: true,
  },
  sharp,
});
