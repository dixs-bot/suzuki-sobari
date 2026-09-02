export const products = [
  {
    id: 'xl7',
    name: 'New Suzuki XL7',
    category: 'passenger',
    tagline: '7-Seater SUV Hybrid',
    description: 'SUV 7 penumpang dengan teknologi Smart Hybrid, ground clearance tinggi, dan desain maskulin. Cocok untuk keluarga aktif yang butuh kenyamanan dan efisiensi BBM.',
    image: 'newxl7.png',
    gallery: [
      'xl7-kuro1.png',
    ],
    variants: [
      // XL7 REGULER
      { name: 'XL7 New Zeta MT', price: 245350000 },
      { name: 'XL7 New Zeta AT', price: 256450000 },
      { name: 'XL7 New Beta MT Hybrid', price: 273100000 },
      { name: 'XL7 New Beta AT Hybrid', price: 284100000 },
      { name: 'XL7 New Alpha MT Hybrid', price: 284100000 },
      { name: 'XL7 New Alpha MT Hybrid 2 Tone', price: 286100000 },
      { name: 'XL7 New Alpha AT Hybrid', price: 295550000 },
      { name: 'XL7 New Alpha AT Hybrid 2 Tone', price: 297550000 },
      { name: 'XL7 New Alpha AT Hybrid Kuro', price: 301700000 },
      { name: 'XL7 New Alpha AT Hybrid 2 Tone Kuro', price: 303700000 },
      // XL7 MC NIK 2026
      { name: 'XL7 Zeta MT MC', price: 257200000 },
      { name: 'XL7 Zeta AT MC', price: 268200000 },
      { name: 'XL7 Beta MT Hybrid MC', price: 284900000 },
      { name: 'XL7 Beta AT Hybrid MC', price: 296000000 },
      { name: 'XL7 Alpha AT Hybrid MC', price: 310800000 },
      { name: 'XL7 Alpha AT Hybrid 2 Tone MC', price: 312800000 }
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Prime Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Smart Hybrid', '7-Seater', 'Ground Clearance 200mm', 'Cruise Control', 'LED Headlamp'],
    specs: {
      'Mesin': 'K15B 1.5L Dualjet Hybrid',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '138 Nm @ 4.400 rpm',
      'Transmisi': '4AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '45 Liter',
      'Dimensi (P x L x T)': '4.450 x 1.775 x 1.710 mm',
      'Wheelbase': '2.740 mm',
      'Ground Clearance': '200 mm',
      'Kapasitas Penumpang': '7 Orang',
      'Keselamatan': 'Dual SRS Airbag, ABS, EBD, ESP',
      'Hiburan': '8" Touchscreen, Bluetooth, USB'
    }
  },
  {
    id: 'ertiga',
    name: 'Suzuki Ertiga',
    category: 'passenger',
    tagline: 'MPV Keluarga Hybrid',
    description: 'MPV keluarga terlaris dengan Smart Hybrid Technology. Irit BBM, kabin luas, dan berkarakter elegan untuk mobilitas keluarga sehari-hari.',
    image: 'SUZUKI_ERTIGA.png',
    gallery: [
      'SUZUKI_ERTIGA1.png',
    ],
    variants: [
      // HANYA NIK 2026 (NIK 2025 TELAH DIHAPUS)
      { name: 'All New Ertiga MC GL MT (2026)', price: 236900000 },
      { name: 'All New Ertiga MC GL AT (2026)', price: 247600000 },
      { name: 'All New Ertiga MC GX MT (2026)', price: 264400000 },
      { name: 'All New Ertiga MC GX AT (2026)', price: 275400000 },
      { name: 'All New Ertiga Cruise MT (2026)', price: 277300000 },
      { name: 'All New Ertiga Cruise MT 2 Tone (2026)', price: 279300000 },
      { name: 'All New Ertiga Cruise AT (2026)', price: 288400000 },
      { name: 'All New Ertiga Cruise AT 2 Tone (2026)', price: 290400000 }
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Prime Black', hex: '#1A1A1A' },
      { name: 'Metallic Blue', hex: '#1E3A5F' }
    ],
    briefSpecs: ['Smart Hybrid', '7-Seater', 'Irit BBM', 'Kabin Luas', 'ABS + EBD'],
    specs: {
      'Mesin': 'K15B 1.5L Dualjet Hybrid',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '138 Nm @ 4.400 rpm',
      'Transmisi': '4AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '45 Liter',
      'Dimensi (P x L x T)': '4.395 x 1.735 x 1.690 mm',
      'Wheelbase': '2.740 mm',
      'Kapasitas Penumpang': '7 Orang',
      'Keselamatan': 'Dual Airbag, ABS, EBD, ISOFIX',
      'Hiburan': '8" Touchscreen, 4 Speaker'
    }
  },
  {
    id: 'carry',
    name: 'Suzuki Carry',
    category: 'commercial',
    tagline: 'Raja Niaga Indonesia',
    description: 'Pick up terlaris di Indonesia dengan daya angkut maksimal, mesin bandel, dan biaya operasional rendah. Pilihan tepat untuk usaha Anda.',
    image: 'carry-pu.png',
    gallery: [
      'carry-pu1.png',
    ],
    variants: [
      { name: 'New Carry PU FD', price: 152950000 },
      { name: 'New Carry PU FD AC PS', price: 159850000 },
      { name: 'New Carry PU WD', price: 153950000 },
      { name: 'New Carry PU WD AC PS', price: 160750000 }
    ],
    colors: [
      { name: 'Super White', hex: '#F5F5F0' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Daya Angkut 1 Ton', 'Mesin Bandel', 'Rangka Kuat', 'Flat & Wide Deck', 'PS & AC'],
    specs: {
      'Mesin': 'K15B 1.5L',
      'Tenaga': '96 HP @ 6.000 rpm',
      'Torsi': '135 Nm @ 4.400 rpm',
      'Transmisi': '5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '42 Liter',
      'Dimensi (P x L x T)': '4.195 x 1.765 x 1.910 mm',
      'Wheelbase': '2.530 mm',
      'Daya Angkut': '± 1.000 kg',
      'Fitur': 'Power Steering, AC (tipe tertentu)'
    }
  },
 {
  id: 'carry-box',
  name: 'Suzuki Carry Box',
  category: 'commercial',
  tagline: 'Solusi Angkutan Bisnis Modern',
  description: 'Kendaraan niaga box andal dengan kapasitas besar, cocok untuk logistik, distribusi, kuliner, dan operasional bisnis harian. Irit, tangguh, dan siap mendukung usaha Anda.',
  image: 'carry-box.png',
  gallery: [
    'carry-box1.png',
    'carry-box2.png'
  ],
  variants: [
    { name: 'Carry Box Standard', price: 227300000 }, // PERLU VERIFIKASI HARGA
    { name: 'Carry Box AC PS', price: 227300000 }, // PERLU VERIFIKASI HARGA
    { name: 'Carry Refrigerated Box', price: 227300000 }, // PERLU VERIFIKASI HARGA
    { name: 'Carry Box Custom Fleet', price: 227300000 } // PERLU VERIFIKASI HARGA
  ],
  colors: [
    { name: 'Superior White', hex: '#F5F5F5' },
    { name: 'Silky Silver', hex: '#B8B8B8' },
    { name: 'Jet Black', hex: '#1A1A1A' }
  ],
  briefSpecs: [
    'Box Besar & Luas',
    'Cocok Untuk Logistik',
    'Mesin 1.5L Irit',
    'Rangka Kokoh',
    'AC & Power Steering'
  ],
  specs: {
    'Mesin': 'K15B 1.5L',
    'Tenaga': '96 HP @ 6.000 rpm',
    'Torsi': '135 Nm @ 4.400 rpm',
    'Transmisi': '5MT',
    'Bahan Bakar': 'Bensin RON 90+',
    'Kapasitas Tangki': '42 Liter',
    'Dimensi (P x L x T)': '4.350 x 1.765 x 2.200 mm',
    'Wheelbase': '2.530 mm',
    'Kapasitas Box': '± 6 Kubik',
    'Daya Angkut': '± 1 Ton',
    'Fitur': 'Power Steering, AC, Central Lock'
  }
},
   {
    id: 'jimny-3door',
    name: 'Suzuki Jimny 3 Door',
    category: 'passenger',
    tagline: 'Legendary 4x4 Compact',
    description: 'Ikon off-road legendaris dengan desain retro-modern. Jimny 3 Door yang compact dan agile, siap taklukkan segala medan.',
    image: 'jimny1.png',
    gallery: [
      'jimny3-1.png',
    ],
    variants: [
      // NIK 2025
      { name: 'Jimny 3 Door MT', price: 471550000 },
      { name: 'Jimny 3 Door AT', price: 484000000 },
      { name: 'Jimny 3 Door MT 2 Tone', price: 474850000 },
      { name: 'Jimny 3 Door AT 2 Tone', price: 487300000 },
      // KHUSUS FLEET NIK 2025
      { name: 'Jimny 3 Door MT (Khusus Fleet)', price: 451550000 },
      { name: 'Jimny 3 Door AT (Khusus Fleet)', price: 464000000 },
      { name: 'Jimny 3 Door MT 2 Tone (Khusus Fleet)', price: 454850000 },
      { name: 'Jimny 3 Door AT 2 Tone (Khusus Fleet)', price: 467300000 }
    ],
    colors: [
      { name: 'Kinetic Yellow', hex: '#E8D44D' },
      { name: 'Jungle Green', hex: '#2E5A2E' },
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Brisk Blue', hex: '#2255AA' },
      { name: 'Sizzling Red', hex: '#C41E3A' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['4WD Ladder Frame', '3 Door', 'Part-time 4WD', 'Differential Lock', 'Retro Modern'],
    specs: {
      'Mesin': 'K15B 1.5L',
      'Tenaga': '102 HP @ 6.000 rpm',
      'Torsi': '130 Nm @ 4.000 rpm',
      'Transmisi': '4AT / 5MT',
      'Penggerak': 'Part-time 4WD',
      'Bahan Bakar': 'Bensin RON 90+',
      'Dimensi (P x L x T)': '3.645 x 1.645 x 1.720 mm',
      'Wheelbase': '2.250 mm',
      'Ground Clearance': '210 mm',
      'Kapasitas Penumpang': '4 Orang',
      'Off-Road': '4H, 4L, Diff Lock'
    }
  },
  {
    id: 'jimny-5door',
    name: 'Suzuki Jimny 5 Door',
    category: 'passenger',
    tagline: 'Legendary 4x4 Family',
    description: 'Jimny legendaris kini hadir dengan 5 pintu untuk kenyamanan keluarga. Tetap tangguh di segala medan dengan kapasitas penumpang lebih banyak.',
    image: 'jimny5.png',
    gallery: [
      'jimny5-1.png',
    ],
    variants: [
      // NIK 2025
      { name: 'Jimny 5 Door MT', price: 471100000 },
      { name: 'Jimny 5 Door AT', price: 483700000 },
      { name: 'Jimny 5 Door MT 2 Tone', price: 474350000 },
      { name: 'Jimny 5 Door AT 2 Tone', price: 486900000 },
      // KHUSUS FLEET NIK 2025
      { name: 'Jimny 5 Door MT (Khusus Fleet)', price: 451100000 },
      { name: 'Jimny 5 Door AT (Khusus Fleet)', price: 463700000 },
      { name: 'Jimny 5 Door MT 2 Tone (Khusus Fleet)', price: 454350000 },
      { name: 'Jimny 5 Door AT 2 Tone (Khusus Fleet)', price: 466900000 }
    ],
    colors: [
      { name: 'Kinetic Yellow', hex: '#E8D44D' },
      { name: 'Jungle Green', hex: '#2E5A2E' },
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Brisk Blue', hex: '#2255AA' },
      { name: 'Sizzling Red', hex: '#C41E3A' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['4WD Ladder Frame', '5 Door', 'Part-time 4WD', 'Differential Lock', 'Keluarga Petualang'],
    specs: {
      'Mesin': 'K15B 1.5L',
      'Tenaga': '102 HP @ 6.000 rpm',
      'Torsi': '130 Nm @ 4.000 rpm',
      'Transmisi': '4AT / 5MT',
      'Penggerak': 'Part-time 4WD',
      'Bahan Bakar': 'Bensin RON 90+',
      'Dimensi (P x L x T)': '3.985 x 1.645 x 1.720 mm',
      'Wheelbase': '2.590 mm',
      'Ground Clearance': '210 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Off-Road': '4H, 4L, Diff Lock'
    }
  },
  {
    id: 'grand-vitara',
    name: 'Suzuki Grand Vitara',
    category: 'passenger',
    tagline: 'SUV Hybrid Premium',
    description: 'SUV premium dengan teknologi ALLGRIP intelligent AWD dan Smart Hybrid. Desain mewah, berkendara nyaman di segala medan.',
    image: 'grand-vitara.png',
    gallery: [
      'grand-vitara1.png',
    ],
    variants: [
      { name: 'Grand Vitara GX MC AT', price: 366900000 },
      { name: 'Grand Vitara GX MC AT 2 Tone (Silver)', price: 369900000 },
      { name: 'Grand Vitara GX MC AT 2 Tone (White)', price: 364900000 }
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Sapphire Blue', hex: '#1E3A5F' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Premium Silver', hex: '#B8B8B8' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['ALLGRIP AWD', 'Smart Hybrid', 'Tectonic Body', 'Head-up Display', '360° Camera'],
    specs: {
      'Mesin': 'K15B 1.5L Dualjet Hybrid',
      'Tenaga': '103 HP @ 6.000 rpm',
      'Torsi': '134 Nm @ 4.400 rpm',
      'Transmisi': '6AT',
      'Penggerak': 'ALLGRIP (Alpha) / FWD',
      'Bahan Bakar': 'Bensin RON 90+',
      'Dimensi (P x L x T)': '4.345 x 1.785 x 1.645 mm',
      'Wheelbase': '2.600 mm',
      'Ground Clearance': '210 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Keselamatan': '6 Airbag, ABS, EBD, ESP, Hill Descent'
    }
  },
  {
    id: 'spresso',
    name: 'Suzuki S-Presso',
    category: 'passenger',
    tagline: 'City Car Irit & Praktis',
    description: 'City car compact dengan ground clearance tinggi, irit BBM, dan harga terjangkau. Pilihan tepat untuk mobilitas harian di kota.',
    image: 'spresso.png',
    gallery: [
      'spresso1.png',
    ],
    variants: [
      // NIK 2025
      { name: 'S-Presso MT (2025)', price: 160600000 },
      { name: 'S-Presso AT (2025)', price: 170600000 },
      // NIK 2026
      { name: 'S-Presso MT (2026)', price: 168150000 },
      { name: 'S-Presso AT (2026)', price: 179550000 }
    ],
    colors: [
      { name: 'Sapphire Blue', hex: '#1E3A5F' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Fire Red', hex: '#C41E3A' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Ground Clearance 180mm', 'Irit BBM', 'AT Available', 'Compact', 'Harga Terjangkau'],
    specs: {
      'Mesin': 'K10B 1.0L',
      'Tenaga': '66 HP @ 5.500 rpm',
      'Torsi': '90 Nm @ 3.500 rpm',
      'Transmisi': 'AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '27 Liter',
      'Dimensi (P x L x T)': '3.565 x 1.520 x 1.565 mm',
      'Wheelbase': '2.380 mm',
      'Ground Clearance': '180 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Fitur': 'Touchscreen, LED DRL'
    }
  },
  {
    id: 'fronx',
    name: 'Suzuki Fronx',
    category: 'passenger',
    tagline: 'Crossover Compact Stylish',
    description: 'Crossover compact dengan desain futuristik, fitur canggih, dan berkendara menyenangkan. Cocok untuk generasi muda yang berani tampil beda.',
    image: 'fronx.png',
    gallery: [
      'fronx1.png',
    ],
    variants: [
      // NIK 2025
      { name: 'Fronx GL MT', price: 242250000 },
      { name: 'Fronx GX MT', price: 275650000 },
      { name: 'Fronx GX AT', price: 293750000 },
      { name: 'Fronx SGX AT 1 Tone', price: 315950000 },
      { name: 'Fronx SGX AT 2 Tone', price: 317950000 },
      // NIK 2026
      { name: 'Fronx GL MT (2026)', price: 257750000 },
      { name: 'Fronx GL AT (2026)', price: 264350000 },
      { name: 'Fronx GX MT (2026)', price: 285100000 },
      { name: 'Fronx GX AT (2026)', price: 303200000 },
      { name: 'Fronx SGX AT 1 Tone (2026)', price: 335400000 },
      { name: 'Fronx SGX AT 2 Tone (2026)', price: 337400000 },
      { name: 'Fronx SGX AT Kuro (2026)', price: 336400000 },
      // Variant Lama (Tidak ada di price list baru)
      { name: 'Fronx GL AT', price: 275300000 }, // PERLU VERIFIKASI HARGA
      { name: 'Fronx SGX AT (Ivory & Putih)', price: 331000000 } // PERLU VERIFIKASI HARGA
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Sapphire Blue', hex: '#1E3A5F' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Turbo Engine', 'HUD Display', 'LED Headlamp', 'Cruise Control', '9" Touchscreen'],
    specs: {
      'Mesin': 'K15B 1.5L Turbo',
      'Tenaga': '140 HP @ 5.500 rpm',
      'Torsi': '200 Nm @ 1.500-3.000 rpm',
      'Transmisi': '6AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '44 Liter',
      'Dimensi (P x L x T)': '4.315 x 1.765 x 1.640 mm',
      'Wheelbase': '2.600 mm',
      'Ground Clearance': '195 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Keselamatan': '6 Airbag, ABS, EBD, ESP',
      'Hiburan': '9" Touchscreen, Wireless Charging'
    }
  },
    {
    id: 'apv',
    name: 'Suzuki APV',
    category: 'passenger',
    tagline: 'MPV Keluarga Tangguh',
    description: 'MPV legendaris yang tangguh untuk segala kebutuhan keluarga. Kabin luas, mesin bandel, dan harga terjangkau untuk mobilitas harian.',
    image: 'apv.png',
    gallery: [
      'apv1.png',
    ],
    variants: [
      { name: 'APV GE PS MT AB', price: 215600000 },
      { name: 'APV GL MT AB', price: 228800000 },
      { name: 'APV GX MT AB', price: 242800000 },
      { name: 'APV SGX MT AB', price: 246750000 }
    ],
    colors: [
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Super White', hex: '#F5F5F0' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Blue', hex: '#1E3A5F' }
    ],
    briefSpecs: ['Kabin Luas', 'Mesin Bandel', '8 Penumpang', 'Harga Terjangkau', 'AC Double Blower'],
    specs: {
      'Mesin': 'G15A 1.5L',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '134 Nm @ 3.000 rpm',
      'Transmisi': '5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '43 Liter',
      'Dimensi (P x L x T)': '4.150 x 1.655 x 1.855 mm',
      'Wheelbase': '2.625 mm',
      'Kapasitas Penumpang': '8 Orang',
      'Fitur': 'AC Double Blower, Power Window'
    }
  },
  {
    id: 'apv-blind-van',
    name: 'Suzuki APV Blind Van',
    category: 'commercial',
    tagline: 'Van Niaga Andalan',
    description: 'APV Blind Van adalah solusi niaga terpercaya untuk pengiriman barang. Kabin tertutup tanpa jendela, muat banyak barang dengan biaya operasional rendah.',
    image: 'blindvan.jpg',
    gallery: [
      'apv-blind-van1.png',
    ],
    variants: [
      { name: 'APV Blind Van', price: 174300000 }
    ],
    colors: [
      { name: 'Super White', hex: '#F5F5F0' },
      { name: 'Silky Silver', hex: '#B8B8B8' }
    ],
    briefSpecs: ['Kabin Tertutup', 'Daya Angkut Besar', 'Biaya Operasional Rendah', 'Mesin Bandel', 'Harga Terjangkau'],
    specs: {
      'Mesin': 'G15A 1.5L',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '134 Nm @ 3.000 rpm',
      'Transmisi': '5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '43 Liter',
      'Dimensi (P x L x T)': '4.150 x 1.655 x 1.855 mm',
      'Wheelbase': '2.625 mm',
      'Tipe': 'Blind Van (Tanpa Jendela Samping)',
      'Fitur': 'Kabin Tertutup, Rak Muatan'
    }
  }
];
