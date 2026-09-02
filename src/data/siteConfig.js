export const siteConfig = {
  businessName: "Sobari NJS Ahmad Yani",
  dealerName: "Dealer Resmi Mobil Suzuki NJS Ahmad Yani Bandung",
  salesName: "Sobari",
  salesRole: "Sales Consultant Suzuki NJS Ahmad Yani Bandung",
  phone: "+6282295095740",
  phoneNumberFormatted: "0822-9509-5740",
  whatsappNumber: "6282295095740",
  email: "sobarisuzuki.bandung@gmail.com",
  address: "Jl. A. Yani No.259, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40114, Indonesia",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.535!2d107.6316605!3d-6.9147128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e781f491aa2d%3A0x1eabdb84d1cee61b!2sSuzuki%20Ahmad%20Yani%20PT%20Nusantara%20Jaya%20Sentosa!5e0!3m2!1sen!2sid!4v1750000000000",
  siteUrl: "https://suzuki-sobari.vercel.app/",
  dealerCoords: {
    lat: -6.9147128,
    lng: 107.6316605
  }
};

export function getWhatsAppLink(message = "Halo, saya tertarik dengan produk Suzuki. Mohon informasi lebih lanjut.") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const deliveryPhotos = [
{ src: "image1.jpg", caption: "" },
{ src: "image2.jpg", caption: "" },
{ src: "image3.jpg", caption: "" },
{ src: "image4.jpg", caption: "" },
{ src: "image5.jpg", caption: "" },
{ src: "image6.jpg", caption: "" },
{ src: "image7.jpg", caption: "" },
{ src: "image8.jpg", caption: "" },
{ src: "image9.jpg", caption: "" },
{ src: "image10.jpg", caption: "" },
{ src: "image11.jpg", caption: "" },
{ src: "image12.jpg", caption: "" },
{ src: "image13.jpg", caption: "" },
{ src: "image14.jpg", caption: "" },
{ src: "image15.jpg", caption: "" },
{ src: "image16.jpg", caption: "" },
{ src: "image17.jpg", caption: "" },
{ src: "image18.jpg", caption: "" },
{ src: "image19.jpg", caption: "" },
{ src: "image20.jpg", caption: "" },
{ src: "image21.jpg", caption: "" },
{ src: "image22.jpg", caption: "" },
{ src: "image23.jpg", caption: "" },
{ src: "image24.jpg", caption: "" },
];
