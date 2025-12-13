import { type Footer } from "@/app/payload-types";
import Image from "next/image";
import Link from "next/link";

function Footer({ footer, lang }: { footer: Footer; lang: string }) {
  return (
    <footer className="w-full border-t border-surface-border bg-[#0d1210] pt-16 pb-8 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5 mb-12">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 text-white mb-6">
              <span className="material-symbols-outlined text-primary">
                <Image
                  src="/comp_logo.png"
                  alt="Company Logo"
                  width={24}
                  height={24}
                />
              </span>
              <span className="text-xl font-bold">Nexus CMS</span>
            </div>
            <p className="text-text-subtle mb-6 max-w-xs">
              {footer.brand.description}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">
              {footer.sections.product.title}
            </h4>
            {footer.sections.product.items?.map((item) => (
              <Link
                key={item.id}
                className="text-sm text-text-subtle hover:text-primary transition-colors"
                href={lang + "#"}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">
              {footer.sections.resources.title}
            </h4>
            {footer.sections.resources.items?.map((item) => (
              <Link
                key={item.id}
                className="text-sm text-text-subtle hover:text-primary transition-colors"
                href={lang + "#"}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">
              {footer.sections.company.title}
            </h4>
            {footer.sections.company.items?.map((item) => (
              <Link
                key={item.id}
                className="text-sm text-text-subtle hover:text-primary transition-colors"
                href={lang + "#"}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-subtle">{footer.copyright}</p>
          <div className="flex gap-6">
            <Link
              className="text-xs text-text-subtle hover:text-white"
              href={lang + "#"}
            >
              {footer.legal?.[0].label}
            </Link>
            <Link
              className="text-xs text-text-subtle hover:text-white"
              href={lang + "#"}
            >
              {footer.legal?.[1].label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
