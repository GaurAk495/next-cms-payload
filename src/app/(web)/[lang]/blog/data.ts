const proseClass = `
prose prose-invert prose-lg max-w-none

/* paragraphs */
prose-p:my-6
prose-p:leading-8
prose-p:text-[#e5e5e5]
prose-p:font-light

/* first paragraph = lead */
prose-p:first:text-xl
prose-p:first:md:text-2xl
prose-p:first:text-secondary-text
prose-p:first:italic
prose-p:first:font-normal
prose-p:first:mb-8

/* headings */
prose-headings:font-display
prose-headings:font-bold
prose-h2:text-3xl
prose-h2:mb-6
prose-h3:text-2xl
prose-h3:mt-8
prose-h3:mb-4

/* links */
prose-a:text-primary
prose-a:no-underline
hover:prose-a:underline

/* strong */
prose-strong:text-white

/* blockquote */
prose-blockquote:border-l-4
prose-blockquote:border-primary
prose-blockquote:pl-6
prose-blockquote:my-8
prose-blockquote:italic
prose-blockquote:text-xl
prose-blockquote:text-white
prose-blockquote:bg-surface-dark
prose-blockquote:py-4
prose-blockquote:pr-4
prose-blockquote:rounded-r-lg

/* lists */
prose-ul:list-disc
prose-ul:pl-6
prose-ul:space-y-2
prose-ul:my-6
prose-li:text-[#e5e5e5]

/* figures */
prose-figure:my-10
prose-img:rounded-lg
prose-figcaption:text-center
prose-figcaption:text-sm
prose-figcaption:text-secondary-text
prose-figcaption:mt-3

/* hr */
prose-hr:border-primary
prose-hr:my-4

  `;

export const data = {
  en: {
    title: {
      primary: "Insights &",
      part2: "Stories",
    },
    subtitle:
      "Thoughts, lessons, and ideas from building for the web and beyond.",
    seo: {
      metaTitle:
        "Insights & Stories – Thoughts and Ideas on Building for the Web",
      metaDescription:
        "Read thoughts, lessons, and stories about building for the web, technology, and digital experiences in a simple and approachable way.",
    },
  },
  de: {
    title: {
      primary: "Einblicke &",
      part2: "Geschichten",
    },
    subtitle:
      "Gedanken, Erfahrungen und Ideen rund um das Bauen für das Web und darüber hinaus.",
    seo: {
      metaTitle: "Einblicke & Geschichten – Gedanken zum Bauen für das Web",
      metaDescription:
        "Geschichten, Erfahrungen und Gedanken über das Gestalten digitaler Erlebnisse und das Bauen für das Web – einfach und verständlich.",
    },
  },
  es: {
    title: {
      primary: "Ideas &",
      part2: "Historias",
    },
    subtitle:
      "Reflexiones, aprendizajes e ideas sobre crear para la web y más allá.",
    seo: {
      metaTitle: "Ideas & Historias – Pensamientos sobre Crear para la Web",
      metaDescription:
        "Lee historias, aprendizajes e ideas sobre crear para la web, tecnología y experiencias digitales de forma cercana y sencilla.",
    },
  },
};

export { proseClass };
