export const LANGUAGES = [
  { name: "English", code: "en" },
  { name: "Spanish", code: "es" },
  { name: "German", code: "de" },
];

export type SupportedLanguages = "en" | "es" | "de";

/*

{
      title: "FastCMS — Build high-performance websites with a modern CMS",
      description:
        "FastCMS lets teams create SEO-optimized, multi-language websites that load fast. Headless CMS + Next.js — deploy in minutes.",
    };

{
  title: "FastCMS — Crea sitios web de alto rendimiento con un CMS moderno",
  description:
    "FastCMS permite a los equipos crear sitios web multilingües y optimizados para SEO que cargan rápidamente. CMS headless + Next.js — despliega en minutos.",
}

{
  title: "FastCMS — Erstelle leistungsstarke Websites mit einem modernen CMS",
  description:
    "FastCMS ermöglicht Teams die Erstellung SEO-optimierter, mehrsprachiger Websites mit schnellen Ladezeiten. Headless CMS + Next.js — in Minuten bereitgestellt.",
}

*/

// const localesHomeData = {
//   en: {
//     hero: {
//       badge: "Next.js 15 Compatible",
//       title: {
//         part1: "The Headless CMS for",
//         highlight: "High-Performance",
//         part2: "Teams",
//       },
//       description:
//         "Ship faster with an SEO-optimized, multi-language content engine built specifically for the modern web stack.",
//       buttons: {
//         primary: "Start Building",
//         secondary: "Read Docs",
//       },
//       trustedBy: "Trusted by 2,000+ developers",
//     },
//     feature: {
//       title: "Built for Speed and Scale",
//       description:
//         "Everything you need to build world-class web applications without the infrastructure headaches.",
//       cards: [
//         {
//           title: "Blazing Fast Edge Caching",
//           description:
//             "Content delivered from the edge for minimal latency. Your users get instant page loads, anywhere in the world.",
//         },
//         {
//           title: "Native Multi-Language",
//           description:
//             "Manage localized content effortlessly with built-in i18n routing. Translate fields, assets, and URLs with one click.",
//         },
//         {
//           title: "SEO Optimized",
//           description:
//             "Automatic sitemaps, meta tags, and open graph support. We handle the technical SEO so you can focus on content.",
//         },
//         {
//           title: "GraphQL & REST API",
//           description:
//             "Flexible data fetching. Use our strongly typed SDK, or connect via standard GraphQL and REST endpoints.",
//         },
//         {
//           title: "Enterprise Security",
//           description:
//             "SSO, role-based permissions, and audit logs. Built to meet the compliance needs of large organizations.",
//         },
//         {
//           title: "Real-time Webhooks",
//           description:
//             "Trigger builds and updates instantly. Integrate with Vercel, Netlify, or your custom CI/CD pipeline seamlessly.",
//         },
//       ],
//     },
//     testimonials: {
//       title: "Trusted by Engineering Teams",
//       quote:
//         '"Nexus CMS completely transformed our workflow. We migrated our entire marketing site to Next.js in record time. The type-safety features alone cut our deployment time by 50%."',
//       author: {
//         name: "Sarah Jenkins",
//         role: "CTO at TechFlow",
//       },
//     },
//     cta: {
//       title: "Ready to scale your content?",
//       description:
//         "Join thousands of developers building the future of the web. Get started for free today.",
//       buttons: {
//         primary: "Get Started for Free",
//         secondary: "Contact Sales",
//       },
//     },
//   },
//   es: {
//     hero: {
//       badge: "Compatible con Next.js 15",
//       title: {
//         part1: "El CMS headless para",
//         highlight: "Alto Rendimiento",
//         part2: "Equipos",
//       },
//       description:
//         "Lanza más rápido con un motor de contenido multilingüe y optimizado para SEO, creado específicamente para el stack web moderno.",
//       buttons: {
//         primary: "Comenzar a Construir",
//         secondary: "Leer Documentación",
//       },
//       trustedBy: "Confiado por más de 2,000 desarrolladores",
//     },

//     feature: {
//       title: "Construido para Velocidad y Escala",
//       description:
//         "Todo lo que necesitas para crear aplicaciones web de clase mundial sin los dolores de cabeza de la infraestructura.",
//       cards: [
//         {
//           title: "Caché en el Borde Súper Rápida",
//           description:
//             "Contenido entregado desde el edge para una latencia mínima. Tus usuarios obtienen cargas instantáneas en cualquier lugar del mundo.",
//         },
//         {
//           title: "Multilenguaje Nativo",
//           description:
//             "Gestiona contenido localizado sin esfuerzo con enrutamiento i18n integrado. Traduce campos, recursos y URLs con un solo clic.",
//         },
//         {
//           title: "Optimizado para SEO",
//           description:
//             "Sitemaps automáticos, meta tags y soporte para Open Graph. Nosotros manejamos el SEO técnico para que tú te enfoques en el contenido.",
//         },
//         {
//           title: "API GraphQL y REST",
//           description:
//             "Obtención de datos flexible. Usa nuestro SDK con tipado fuerte o conéctate mediante endpoints estándar GraphQL y REST.",
//         },
//         {
//           title: "Seguridad Empresarial",
//           description:
//             "SSO, permisos basados en roles y registros de auditoría. Diseñado para cumplir con los requisitos de grandes organizaciones.",
//         },
//         {
//           title: "Webhooks en Tiempo Real",
//           description:
//             "Activa builds y actualizaciones al instante. Integra con Vercel, Netlify o tu pipeline CI/CD personalizado sin complicaciones.",
//         },
//       ],
//     },

//     testimonials: {
//       title: "Confiado por Equipos de Ingeniería",
//       quote:
//         '"Nexus CMS transformó por completo nuestro flujo de trabajo. Migramos todo nuestro sitio de marketing a Next.js en un tiempo récord. Solo las funciones de tipado redujeron nuestro tiempo de despliegue en un 50%."',
//       author: {
//         name: "Sarah Jenkins",
//         role: "CTO en TechFlow",
//       },
//     },

//     cta: {
//       title: "¿Listo para escalar tu contenido?",
//       description:
//         "Únete a miles de desarrolladores que construyen el futuro de la web. Comienza gratis hoy.",
//       buttons: {
//         primary: "Comenzar Gratis",
//         secondary: "Contactar Ventas",
//       },
//     },
//   },
//   de: {
//     hero: {
//       badge: "Next.js 15 Kompatibel",
//       title: {
//         part1: "Das Headless CMS für",
//         highlight: "Hochleistungs",
//         part2: "-Teams",
//       },
//       description:
//         "Entwickeln Sie schneller mit einer SEO-optimierten, mehrsprachigen Content-Engine, die speziell für den modernen Web-Stack entwickelt wurde.",
//       buttons: {
//         primary: "Jetzt starten",
//         secondary: "Doku lesen",
//       },
//       trustedBy: "Vertraut von 2.000+ Entwicklern",
//     },
//     feature: {
//       title: "Gebaut für Geschwindigkeit und Skalierung",
//       description:
//         "Alles, was Sie brauchen, um erstklassige Webanwendungen ohne Infrastruktur-Probleme zu erstellen.",
//       cards: [
//         {
//           title: "Blitzschnelles Edge-Caching",
//           description:
//             "Inhalte werden für minimale Latenz von der Edge geliefert. Ihre Nutzer erhalten sofortige Seitenladezeiten, überall auf der Welt.",
//         },
//         {
//           title: "Native Mehrsprachigkeit",
//           description:
//             "Verwalten Sie lokalisierte Inhalte mühelos mit integriertem i18n-Routing. Übersetzen Sie Felder, Assets und URLs mit einem Klick.",
//         },
//         {
//           title: "SEO-optimiert",
//           description:
//             "Automatische Sitemaps, Meta-Tags und Open-Graph-Unterstützung. Wir kümmern uns um die technische SEO, damit Sie sich auf den Inhalt konzentrieren können.",
//         },
//         {
//           title: "GraphQL & REST API",
//           description:
//             "Flexibler Datenabruf. Nutzen Sie unser streng typisiertes SDK oder verbinden Sie sich über Standard-GraphQL- und REST-Endpunkte.",
//         },
//         {
//           title: "Unternehmenssicherheit",
//           description:
//             "SSO, rollenbasierte Berechtigungen und Audit-Logs. Entwickelt, um die Compliance-Anforderungen großer Organisationen zu erfüllen.",
//         },
//         {
//           title: "Echtzeit-Webhooks",
//           description:
//             "Builds und Updates sofort auslösen. Nahtlose Integration mit Vercel, Netlify oder Ihrer benutzerdefinierten CI/CD-Pipeline.",
//         },
//       ],
//     },
//     testimonials: {
//       title: "Vertraut von Engineering-Teams",
//       quote:
//         '"Nexus CMS hat unseren Workflow komplett verändert. Wir haben unsere gesamte Marketing-Website in Rekordzeit auf Next.js migriert. Allein die Typsicherheitsfunktionen haben unsere Bereitstellungszeit um 50% verkürzt."',
//       author: {
//         name: "Sarah Jenkins",
//         role: "CTO bei TechFlow",
//       },
//     },
//     cta: {
//       title: "Bereit, Ihre Inhalte zu skalieren?",
//       description:
//         "Schließen Sie sich Tausenden von Entwicklern an, die die Zukunft des Webs bauen. Starten Sie heute kostenlos.",
//       buttons: {
//         primary: "Kostenlos starten",
//         secondary: "Vertrieb kontaktieren",
//       },
//     },
//   },
// };

// const localeContactData = {
//   en: {
//     metadata: {
//       title: "Contact Us — FastCMS",
//       description:
//         "Get in touch with the FastCMS team. Whether you need support, sales info, or partnership opportunities, we're here to help.",
//     },
//     hero: {
//       title: {
//         part1: "Let's start a",
//         highlight: "conversation.",
//       },
//       description:
//         "Have a question about our services or need technical support? Fill out the form below and our team will get back to you within 24 hours.",
//     },
//     form: {
//       name: { label: "Name", placeholder: "Jane Doe" },
//       email: { label: "Email", placeholder: "jane@example.com" },
//       subject: {
//         label: "Subject",
//         options: [
//           "General Inquiry",
//           "Technical Support",
//           "Billing Question",
//           "Partnership",
//         ],
//       },
//       message: {
//         label: "Message",
//         placeholder: "Write your message here...",
//       },
//       submit: "Send Message",
//     },
//     info: {
//       title: "Contact Information",
//       email: { label: "Email us", value: "hello@techbrand.com" },
//       phone: {
//         label: "Call us",
//         value: "+1 (555) 000-0000",
//         subtitle: "Mon-Fri from 8am to 5pm.",
//       },
//       visit: {
//         label: "Visit us",
//         value: "123 Startup Blvd, Tech City, TC 90210",
//       },
//     },
//   },
//   de: {
//     metadata: {
//       title: "Kontaktieren Sie uns — FastCMS",
//       description:
//         "Nehmen Sie Kontakt mit dem FastCMS-Team auf. Egal, ob Sie Unterstützung, Verkaufsinformationen oder Partnerschaftsmöglichkeiten benötigen, wir sind hier, um zu helfen.",
//     },
//     hero: {
//       title: {
//         part1: "Lassen Sie uns ein",
//         highlight: "Gespräch beginnen.",
//       },
//       description:
//         "Haben Sie Fragen zu unseren Dienstleistungen oder benötigen Sie technischen Support? Füllen Sie das folgende Formular aus und unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
//     },
//     form: {
//       name: { label: "Name", placeholder: "Max Mustermann" },
//       email: { label: "E-Mail", placeholder: "max@beispiel.de" },
//       subject: {
//         label: "Betreff",
//         options: [
//           "Allgemeine Anfrage",
//           "Technischer Support",
//           "Rechnungsfrage",
//           "Partnerschaft",
//         ],
//       },
//       message: {
//         label: "Nachricht",
//         placeholder: "Schreiben Sie Ihre Nachricht hier...",
//       },
//       submit: "Nachricht senden",
//     },
//     info: {
//       title: "Kontaktinformationen",
//       email: { label: "Schreiben Sie uns", value: "hello@techbrand.com" },
//       phone: {
//         label: "Rufen Sie uns an",
//         value: "+1 (555) 000-0000",
//         subtitle: "Mo-Fr von 8 bis 17 Uhr.",
//       },
//       visit: {
//         label: "Besuchen Sie uns",
//         value: "123 Startup Blvd, Tech City, TC 90210",
//       },
//     },
//   },
//   es: {
//     metadata: {
//       title: "Contáctanos — FastCMS",
//       description:
//         "Ponte en contacto con el equipo de FastCMS. Ya sea que necesites soporte, información de ventas o oportunidades de colaboración, estamos aquí para ayudarte.",
//     },
//     hero: {
//       title: {
//         part1: "Comencemos una",
//         highlight: "conversación.",
//       },
//       description:
//         "¿Tienes alguna pregunta sobre nuestros servicios o necesitas soporte técnico? Completa el formulario a continuación y nuestro equipo te responderá dentro de 24 horas.",
//     },
//     form: {
//       name: { label: "Nombre", placeholder: "Juan Pérez" },
//       email: { label: "Correo electrónico", placeholder: "juan@ejemplo.com" },
//       subject: {
//         label: "Asunto",
//         options: [
//           "Consulta general",
//           "Soporte técnico",
//           "Pregunta de facturación",
//           "Colaboración",
//         ],
//       },
//       message: {
//         label: "Mensaje",
//         placeholder: "Escribe tu mensaje aquí...",
//       },
//       submit: "Enviar mensaje",
//     },
//     info: {
//       title: "Información de contacto",
//       email: { label: "Escríbenos", value: "hello@techbrand.com" },
//       phone: {
//         label: "Llámanos",
//         value: "+1 (555) 000-0000",
//         subtitle: "Lun-Vie de 8 a.m. a 5 p.m.",
//       },
//       visit: {
//         label: "Visítanos",
//         value: "123 Startup Blvd, Tech City, TC 90210",
//       },
//     },
//   },
// };

// const localeLayoutData = {
//   en: {
//     footer: {
//       brand: {
//         description:
//           "The modern headless CMS for high-performance teams. Built for the future of the web.",
//       },
//       sections: {
//         product: {
//           title: "Product",
//           items: ["Features", "Pricing", "Enterprise", "Changelog"],
//         },
//         resources: {
//           title: "Resources",
//           items: ["Documentation", "API Reference", "Community", "Blog"],
//         },
//         company: {
//           title: "Company",
//           items: ["About", "Careers", "Contact", "Legal"],
//         },
//       },
//       copyright: "© 2024 Nexus CMS Inc. All rights reserved.",
//       legal: ["Privacy Policy", "Terms of Service"],
//     },
//   },
//   es: {
//     footer: {
//       brand: {
//         description:
//           "El headless CMS moderno para equipos de alto rendimiento. Construido para el futuro de la web.",
//       },
//       sections: {
//         product: {
//           title: "Producto",
//           items: ["Características", "Precios", "Enterprise", "Changelog"],
//         },
//         resources: {
//           title: "Recursos",
//           items: ["Documentación", "Referencia API", "Comunidad", "Blog"],
//         },
//         company: {
//           title: "Compañía",
//           items: ["Acerca de", "Empleos", "Contacto", "Legal"],
//         },
//       },
//       copyright: "© 2024 Nexus CMS Inc. Todos los derechos reservados.",
//       legal: ["Política de Privacidad", "Términos de Servicio"],
//     },
//   },
//   de: {
//     footer: {
//       brand: {
//         description:
//           "Das moderne Headless CMS für Hochleistungsteams. Gebaut für die Zukunft des Webs.",
//       },
//       sections: {
//         product: {
//           title: "Produkt",
//           items: ["Funktionen", "Preise", "Enterprise", "Änderungsprotokoll"],
//         },
//         resources: {
//           title: "Ressourcen",
//           items: ["Dokumentation", "API-Referenz", "Community", "Blog"],
//         },
//         company: {
//           title: "Unternehmen",
//           items: ["Über uns", "Karriere", "Kontakt", "Rechtliches"],
//         },
//       },
//       copyright: "© 2024 Nexus CMS Inc. Alle Rechte vorbehalten.",
//       legal: ["Datenschutzrichtlinie", "Nutzungsbedingungen"],
//     },
//   },
// };
