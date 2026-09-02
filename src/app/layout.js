import "./globals.css";
import { siteConfig } from "../data/siteConfig";

export const viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1.0,
};

export const metadata = {
  // ============================================================
  // BASE URL
  // ============================================================

  metadataBase: new URL(siteConfig.siteUrl),

  // ============================================================
  // SEO TITLE
  // ============================================================

  title: `Dealer Suzuki Bandung & Cimahi | ${siteConfig.businessName} – Kredit Mobil Baru DP Ringan`,

  // ============================================================
  // SEO DESCRIPTION
  // ============================================================

  description:
    "Dealer Suzuki Nusantara Jaya Sentosa Ahmad Yani melayani pembelian, servis, dan spare part mobil Suzuki di wilayah Bandung Raya, Subang, Sumedang, Garut, Tasikmalaya, Ciamis, Banjar, dan Pangandaran.",

  // ============================================================
  // SEO KEYWORDS
  // ============================================================

  keywords:
    "Dealer Suzuki Bandung, Dealer Suzuki Cimahi, Dealer Suzuki Ahmad Yani, Suzuki Bandung, Suzuki Cimahi, kredit mobil Suzuki, promo Suzuki Bandung, mobil Suzuki Bandung, harga mobil Suzuki, dealer mobil Suzuki",

  // ============================================================
  // AUTHOR
  // ============================================================

  authors: [
    {
      name: siteConfig.businessName,
    },
  ],

  // ============================================================
  // GOOGLE SEARCH ENGINE
  // ============================================================

  robots: {
    index: true,
    follow: true,
  },

  // ============================================================
  // GOOGLE SEARCH CONSOLE VERIFICATION
  // ============================================================

  verification: {
    google: "6N-Mfe4cyHyY-Fl9Fo4-iOUfmIVjc_IebHSCy8PsuRA",
  },

  // ============================================================
  // CANONICAL URL
  // ============================================================

  alternates: {
    canonical: siteConfig.siteUrl,
  },

  // ============================================================
  // OPEN GRAPH
  // ============================================================

  openGraph: {
    title: `Dealer Suzuki Bandung & Cimahi | ${siteConfig.businessName} – Kredit Mobil Baru DP Ringan`,

    description:
      `Dealer resmi Suzuki di Bandung & Cimahi. Promo mobil baru, kredit DP ringan, proses cepat, dan layanan after sales. Hubungi ${siteConfig.salesName} - Sales Consultant Suzuki.`,

    type: "website",

    url: siteConfig.siteUrl,

    siteName: siteConfig.businessName,

    locale: "id_ID",
  },

  // ============================================================
  // TWITTER / SOCIAL MEDIA
  // ============================================================

  twitter: {
    card: "summary_large_image",

    title: `Dealer Suzuki Bandung & Cimahi – ${siteConfig.businessName}`,

    description:
      "Promo & kredit mobil baru Suzuki dengan DP ringan di Bandung & Cimahi.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* =====================================================
            GOOGLE FONTS
        ====================================================== */}

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

        {/* =====================================================
            AUTO DEALER STRUCTURED DATA
        ====================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",

              name: siteConfig.dealerName,

              telephone: siteConfig.phone,

              priceRange: "$$",

              url: siteConfig.siteUrl,

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "Jl. A. Yani No.259, Cihapit, Kec. Bandung Wetan",

                addressLocality: "Kota Bandung",

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
                "Bandung",
                "Cimahi",
                "Soekarno Hatta Bandung",
                "Gedebage",
                "Ahmad Yani",
                "Jawa Barat",
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
            }),
          }}
        />

        {/* =====================================================
            FAQ STRUCTURED DATA
        ====================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name:
                    "Berapa DP minimal mobil Suzuki di Bandung & Cimahi?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: `DP minimal mengikuti ketentuan leasing, namun banyak paket promo DP ringan mulai dari belasan juta untuk tipe tertentu. Hubungi ${siteConfig.salesName} via WhatsApp (${siteConfig.phone}) untuk cek promo terbaru yang sesuai dengan profil Anda.`,
                  },
                },

                {
                  "@type": "Question",

                  name:
                    "Apakah bisa tukar tambah mobil lama dengan mobil Suzuki baru?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text:
                      "Bisa. Kami melayani tukar tambah mobil lama Anda ke mobil Suzuki baru, proses dibantu sampai selesai termasuk appraisal unit lama dan pengurusan berkas.",
                  },
                },

                {
                  "@type": "Question",

                  name: `Apakah ${siteConfig.dealerName} melayani luar kota Bandung?`,

                  acceptedAnswer: {
                    "@type": "Answer",

                    text:
                      "Ya, kami melayani konsumen dari Bandung, Cimahi, dan sekitarnya seperti Padalarang, Lembang, Rancaekek, hingga Kabupaten Bandung.",
                  },
                },

                {
                  "@type": "Question",

                  name: `Di mana lokasi dealer ${siteConfig.dealerName}?`,

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: `Dealer berlokasi di ${siteConfig.address}. Anda bisa datang langsung atau janjian test drive terlebih dahulu dengan sales.`,
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
