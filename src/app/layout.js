import "./globals.css";
import { siteConfig } from "../data/siteConfig";

const siteUrl = "https://suzukiinfobandung.com";

export const viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `Dealer Suzuki Bandung Jawa Barat | ${siteConfig.businessName}`,
    template: `%s | ${siteConfig.businessName}`,
  },

  description:
    "Dealer Suzuki Nusantara Jaya Sentosa Ahmad Yani melayani pembelian mobil Suzuki baru, promo, kredit, tukar tambah, test drive, servis, dan spare part resmi untuk wilayah Bandung, Cimahi, dan Jawa Barat.",

  keywords:
    "Dealer Suzuki Bandung, Dealer Suzuki Cimahi, Dealer Suzuki Ahmad Yani, Suzuki Bandung, Suzuki Cimahi, kredit mobil Suzuki, promo Suzuki Bandung, mobil Suzuki Bandung, harga mobil Suzuki, dealer mobil Suzuki, Suzuki Jawa Barat",

  authors: [
    {
      name: siteConfig.businessName,
    },
  ],

  creator: siteConfig.businessName,

  publisher: siteConfig.businessName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "6N-Mfe4cyHyY-Fl9Fo4-iOUfmIVjc_IebHSCy8PsuRA",
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",

    locale: "id_ID",

    url: siteUrl,

    siteName: siteConfig.businessName,

    title: `Dealer Suzuki Bandung Jawa Barat | ${siteConfig.businessName}`,

    description:
      `Dealer Suzuki di Bandung dan Jawa Barat. Promo mobil Suzuki baru, kredit DP ringan, tukar tambah, test drive, dan konsultasi bersama ${siteConfig.salesName}.` ,

    images: [
      {
        url: `${siteUrl}/images/profil.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} - Dealer Suzuki Bandung Jawa Barat`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `Dealer Suzuki Bandung Jawa Barat | ${siteConfig.businessName}`,

    description:
      "Promo dan kredit mobil baru Suzuki dengan DP ringan di Bandung, Cimahi, dan Jawa Barat.",

    images: [`${siteUrl}/images/profil.png`],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",

    name: siteConfig.dealerName,

    description:
      "Dealer Suzuki di Bandung Jawa Barat yang melayani penjualan mobil Suzuki baru, promo, kredit, tukar tambah, test drive, servis, dan spare part.",

    url: siteUrl,

    telephone: siteConfig.phone,

    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      postalCode: "40114",
      addressCountry: "ID",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.dealerCoords.lat,
      longitude: siteConfig.dealerCoords.lng,
    },

    areaServed: [
      {
        "@type": "City",
        name: "Bandung",
      },
      {
        "@type": "City",
        name: "Cimahi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Jawa Barat",
      },
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],

        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name:
          "Berapa DP minimal mobil Suzuki di Bandung dan Cimahi?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            `DP minimal mengikuti ketentuan leasing dan program yang sedang berlaku. ` +
            `Untuk informasi promo dan simulasi kredit terbaru, silakan hubungi ` +
            `${siteConfig.salesName} melalui WhatsApp ${siteConfig.phone}.`,
        },
      },

      {
        "@type": "Question",

        name:
          "Apakah bisa tukar tambah mobil lama dengan mobil Suzuki baru?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Bisa. Konsumen dapat berkonsultasi mengenai proses tukar tambah mobil lama dengan mobil Suzuki baru, termasuk proses appraisal dan pengurusan dokumen.",
        },
      },

      {
        "@type": "Question",

        name:
          `Apakah ${siteConfig.dealerName} melayani konsumen di luar Kota Bandung?`,

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Ya. Kami melayani konsumen dari Bandung, Cimahi, Kabupaten Bandung, Bandung Barat, dan wilayah Jawa Barat lainnya.",
        },
      },

      {
        "@type": "Question",

        name:
          `Di mana lokasi dealer ${siteConfig.dealerName}?`,

        acceptedAnswer: {
          "@type": "Answer",

          text:
            `Dealer berlokasi di ${siteConfig.address}. ` +
            "Konsumen dapat datang langsung untuk konsultasi, melihat unit, atau melakukan test drive.",
        },
      },
    ],
  };

  return (
    <html lang="id">
      <head>

        {/* GOOGLE FONTS */}

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* AUTO DEALER STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* FAQ STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />

      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
