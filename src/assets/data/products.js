
const products = [
  {
    id: "01",
    productName: "Wokong Robot ",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/tshirt01.jpg',
    category: "Tshirt",
    price: 400,
    shortDesc:
      "Extra Deep Down Filled Couch W, 89 Sofa, Cream",
    description:
      "The Kong Robot Shirt is a unique and eye-catching t-shirt that features a vibrant and detailed print of a giant gorilla-like robot on the front. The t-shirt is made from high-quality, soft, and comfortable fabric that is breathable and durable, making it perfect for everyday wear. ",
    reviews: [
      {
        rating: 4.7,
        text: "Stylish, and comfortable I love this shirt.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Astronaut",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/tshirt02.jpg',
    category: "Tshirt",
    price: 353,
    shortDesc:
      "Modern high-quality fabric that is both comfortable and durable",
    description:
      "The design features a highly-detailed print of the astronaut wearing a futuristic spacesuit. The t-shirt itself is made from soft, high-quality fabric that is both comfortable and durable, making it perfect for everyday wear. This shirt is a great choice for anyone who loves space exploration, science fiction, or just wants to make a bold fashion statement.  ",
    reviews: [
      {
        rating: 4.8,
        text: "The t-shirt itself is made from soft",
      },
      {
        rating: 4.8,
        text: "Perfect for everyday wear",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "MotoBots",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/tshirt03.jpg',
    category: "Tshirt",
    price: 473,
    shortDesc:
      "Rivet Aiden Mid-Century Modern Sofa Couch (86.6 W) - Wathet Blue",
    description:
      "This sleek, mid-Century inspired sofa is designed to impress. A tufted bench seat cushion, plush back cushions, tapered wood legs, and tidy bolster pillows provide just the right mix of comfort and contemporary edge. Solid hardwood frame, tapered wood legs and foam padding with fabric upholstery.",
    reviews: [
      {
        rating: 4.8,
        text: "I love the design",
      },
      {
        rating: 4.9,
        text: "Perfect for everyday wear.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Berserker",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/tshirt04.jpg',
    category: "Tshirt",
    price: 253,
    shortDesc:
      "Velvet & Antique Platinum",
    description:
      "The sofa with an antique platinum finish will create an elegant, warm, and traditional taste in your living room. The sofa reflects a highly decorative base with scrolled feet, and the upholstered seats with the deep button tufted and nailhead trim accents add classic character and represent luxurious detailing.",
    reviews: [
      {
        rating: 4.9,
        text: "Its perfect.",
      },
      {
        rating: 4.8,
        text: "Vintage and futuristic style",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "One Piece Sabo",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/mug01.jpg',
    category: "Mug",
    price: 150,
    shortDesc:
      "Genuine Sheepskin Rug Linen Real Australia Sheepskin Natural Luxury Fluffy Lambskin ",
    description:
      "Genuine PREMIUM 100% New Zealand & Australian Wool, Eco-friendly:Contains no harsh chemicals or dyes, just all natural fur that is safe for everyone in your home. Nontoxic, skin-friendly, Eco-friendly, perfect for baby and pregnancy. PERFECT GIFT IDEA: Warm in winter and cool in summer. ",
    reviews: [
      {
        rating: 5.0,
        text: "I am anime fanatic",
      },
      {
        rating: 4.9,
        text: " Its very perfect.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "One Piece Zoro",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/mug02.jpg',
    category: "Mug",
    price: 150,
    shortDesc:
      "Amazon Brand - Faux Velvet Sofa Contemporary Velvet Sofa Couch",
    description:
      "Sleek, bench seat design combines with modern touches for a vesatile, elegant sofa. A solid-wood frame and strong brass legs offer durability and comfort that will stand the test of time. Solid-wood frame with brass metal legs and glam velvet upholstery. Bench seat cushion with removable back cushions",
    reviews: [
      {
        rating: 4.6,
        text: "The sofa also has some elegant lines. I like the gold/bronze feet, and the curved sides.",
      },
      {
        rating: 4.9,
        text: "I do like the sofa. It’s good for a smaller space and is 5-10 inches shorter than most full size sofas.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "07",
    productName: "Luffy One Piece",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/mug03.jpg',
    category: "Mug",
    price: 150,
    shortDesc:
      "Genuine Sheepskin Rug Linen Real Australia Sheepskin Natural Luxury Fluffy Lambskin",
    description:
      "Genuine PREMIUM 100% New Zealand & Australian Wool, Eco-friendly:Contains no harsh chemicals or dyes, just all natural fur that is safe for everyone in your home. Nontoxic, skin-friendly, Eco-friendly, perfect for baby and pregnancy. PERFECT GIFT IDEA: Warm in winter and cool in summer.",
    reviews: [
      {
        rating: 4.6,
        text: "The color and craftmanship of this sheepskin rug is superb. Soft yet fluffy. Goes perfectly",
      },
      {
        rating: 4.9,
        text: "Soft, thick, great length, perfect soft beige-cream color. Its perfect.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Ace One Piece",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/mug04.jpg',
    category: "Mug",
    price: 150,
    shortDesc:
      "Century Modern Fabric Arm Chair",
    description:
      "Blending together iconic splayed legs with beautifully tufted upholstery, our club chair offers a mid-century look to your lounge space. With its clean lines and understated look, this chair uses new materials to reimagine a traditional design. This chair is supported by beautifully tapered birch wood legs which offer an attractive look and durable structure. Its fine grain takes stains well, giving this piece a gorgeous finish.",
    reviews: [
      {
        rating: 4.6,
        text: "I ordered this chair during Prime Days. It was a good buy and had some excellent reviews.",
      },
      {
        rating: 4.9,
        text: "I like it so much I’m going to buy another one!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Kidd One Piece",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jacket01.jpg',
    category: "Jacket",
    price: 899,
    shortDesc:
      "Loveseat/Sofa/Couch with Armrest Pockets",
    description:
      "STYLE IN MINUTES with a timeless modern sofa to fit any room with the versatility you want. It's the perfect size for small spaces including college dorms, office spaces and smaller apartments. TOOL-FREE ASSEMBLY guarantees you'll have your sofa in 4 simple steps. TOOL-FREE ASSEMBLY guarantees you'll have your sofa in 4 simple steps ",
    reviews: [
      {
        rating: 4.6,
        text: "Easy assembly, no tools required, comfortable clean and great value for the price. Using it in my private practice office.",
      },
      {
        rating: 4.9,
        text: "Good couch in good price :) Super easy to assemble (took less than 20 min) and comfortable.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Luffy One Piece",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jacket02.jpg' ,
    category: "Jacket",
    price: 899,
    shortDesc:
      "LeatherSoft Executive Swivel",
    description:
      "To ensure proper assembly, please follow all steps provided in the installation manual provided in pdf below. Give yourself and office a boost with this stylish mid-back white LeatherSoft desk chair. This chair is easy on the eyes and offers plenty of comfort with its thickly padded seat and waterfall seat edge. Assembly required .Our chair conforms to ANSI/BIFMA standard X5.1-17.",
    reviews: [
      {
        rating: 4.6,
        text: "I read a lot of reviews prior to buying.",
      },
      {
        rating: 4.9,
        text: "Really nice chair. Great purchase!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "11",
    productName: "Trafalgar One Piece",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jacket03.jpg',
    category: "Jacket",
    price: 899,
    shortDesc:
      "Extra Wide Arms,Back Support 14 Angles Adjustable Comfortable Double Mesh Fabric",
    description:
      "High backrest is capable of providing comfortable support to your tired body, relieving your back muscle fatigue and enabling a better relaxation. Compared with armless floor chair, it delicately equipped with armrest shall take the comfortableness to the next level. Also, it will perfectly fit well with your body curve thanks to its ergonomic design. This fabric does not absorb water and is dry in no time or minutes.The material is also tear-resistant, and does not lose any fuzz at rubbing points.The mesh fabric features excellent breathability and soft tactility, that’s why this lazy soft chair adopts such material instead of others. Plus, filled with premium high resilience sponge inside, it is not easy to sag while avoid discomfort even sitting there for long time.",
    reviews: [
      {
        rating: 4.6,
        text: "Chairs nice but backrest is too small",
      },
      {
        rating: 4.9,
        text: "Really nice chair. Great purchase!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "12",
    productName: "One Piece Jacket",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jacket04.jpg',
    category: "Jacket",
    price: 899,
    shortDesc:
      "Apple iPhone 12 Pro, 128GB, Pacific Blue - Unlocked (Renewed Premium)",
    description:
      "Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity. ncludes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card. Backed by a one-year satisfaction guarantee.",
    reviews: [
      {
        rating: 4.8,
        text: "Very pleased with my Renewed Premium iPhone 12 Pro purchase",
      },
      {
        rating: 4.9,
        text: "Phone as described 100% battery health …",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Jersy Design1",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jersey01.jpg',
    category: "Jersey",
    price: 1120,
    shortDesc:
      "Century Modern Fabric Arm Chair",
    description:
      "Blending together iconic splayed legs with beautifully tufted upholstery, our club chair offers a mid-century look to your lounge space. With its clean lines and understated look, this chair uses new materials to reimagine a traditional design. This chair is supported by beautifully tapered birch wood legs which offer an attractive look and durable structure. Its fine grain takes stains well, giving this piece a gorgeous finish.",
    reviews: [
      {
        rating: 4.6,
        text: "I ordered this chair during Prime Days. It was a good buy and had some excellent reviews.",
      },
      {
        rating: 4.9,
        text: "I like it so much I’m going to buy another one!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "14",
    productName: "Jersy Design2",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jersey02.jpg',
    category: "Jersey",
    price: 1120,
    shortDesc:
      "Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium)",
    description:
      "Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity. Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information. ncludes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card. ",
    reviews: [
      {
        rating: 4.8,
        text: "Overall good phone so far",
      },
      {
        rating: 4.9,
        text: "Perfect condition!! As it says like new!! I’m really happy with it. The packaging, the condition 100%",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Jersy Design3",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jersey03.jpg',
    category: "Jersey",
    price: 1120,
    shortDesc:
      "realme 8 5G + 4G Volte GSM Unlocked Global USA Latin Europe Octa Core 48MP Triple Camera",
    description:
      "Octa-core, up to 2.2 GHz GPU ARM Mali-G57 / 18 W fast charging connector 5000mAh high-capacity battery. 6.5 inch full screen display High refresh rate of 90 Hz Resolution: 1080 × 2400 FHD + 48MP Triple camera with night photo mode + 16Mp front Camera. Bluetooth 5.1 / NFC / wifi 2.4 / 5 GHz GPS / A-GPS / BEIDOU / GALILEO / QZSS / GLONASS ",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent rapport qualité/performance/prix",
      },
      {
        rating: 4.9,
        text: "Excellent smartphone ",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Jersy Design4",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/jersey04.jpg',
    category: "Jersey",
    price: 1120,
    shortDesc:
      "OnePlus Nord N200 | 5G Unlocked Android Smartphone U.S Version | 6.49 Full HD+LCD Screen",
    description:
      "5G Unlocked for T-mobile and Google Fi. 4G Compatible with T-Mobile, AT&T, Verizon and Google Fi. Powered by the latest Qualcomm 5G chipset, the OnePlus Nord N200 5G allows you to download or stream your favorite TV shows, connect with your social media, and play online multiplayer at blazing fast speeds. Large 5000mAh battery - The OnePlus Nord N200 5G is powered by a massive 5000mAh battery, providing all the power required to get you through the day. Watch hours of TV, play graphically intense games, or browse the internet non-stop without fear of your device dying. ",
    reviews: [
      {
        rating: 4.8,
        text: "Extremely durable phone",
      },
      {
        rating: 4.9,
        text: "Thanks as discriber. I need a phone for traveling this one does the job.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "17",
    productName: "One Piece Cap",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/cap01.jpg',
    category: "Cap",
    price: 299,
    shortDesc:
      "Timex Easy Reader Day-Date Expansion Band Watch",
    description:
      "mported. Easy-to-Read White Dial with Full Arabic Numerals. Brushed Silver-Tone Stainless Steel Expansion Band. Polished Silver-Tone Case. Day & Date Window. Water resistant to 30 M",
    reviews: [
      {
        rating: 4.8,
        text: "Nice Watch",
      },
      {
        rating: 4.9,
        text: "Very affortable",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "PlayBoy Cap",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/cap02.jpg',
    category: "Cap",
    price: 299,
    shortDesc:
      "Rolex ROLEX GMT Master 126710BLRO Black Dial Watch Men's (W224631) [Parallel Import], Bracelet",
    description:
      "Materials: Stainless steel, ceramic, stainless steel. Water Resistance: Water resistant to 328.4 ft (100 m). Accessories: Includes official box, instruction manual (English language not guaranteed). Product Condition: Brand new. Store display item. Please contact us for details. Product Description: 2018 model. GMT Master II 126710BLRO Stainless Steel Blue Red Bezel Jubilee Bracelet. The bezel is also known as the Pepsi color, and has a dignified gimsy reminiscent of the GMT of yesteryear.",
    reviews: [
      {
        rating: 4.8,
        text: "Great purchase! Don’t hesitate to buy!",
      },
      {
        rating: 4.9,
        text: "Really cool my wife loves it",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Zombie Cap",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/cap03.jpg',
    category: "Cap",
    price: 399,
    shortDesc:
      "Apple Watch SE (2nd Gen) [GPS 44mm] Smart Watch w/Midnight Aluminum Case & Midnight Sport Band - S/M. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant",
    description:
      "Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into. All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent smart watch",
      },
      {
        rating: 4.9,
        text: "Really cool my wife loves it",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "BlackBalls Cap",
    imgUrl: 'https://rilbesib.sirv.com/Images/Print%20Studio/cap04.jpg',
    category: "Cap",
    price: 199,
    shortDesc:
      "Beats by Dr. Dre Studio 3 Wireless Over-Ear Headphones with Built-in Mic - White (Renewed)",
    description:
      "Pure Adaptive Noise Cancelling (Pure ANC) blocks out distractions, so you can get closer to your music. Designed for a long-term wear. Soft Over Ear Cushions feature advanced venting and ergonomic. CHARGE IN MINUTES WITH FAST FUEL: With Fast Fuel, it only takes a few minutes of charging to get up to 3 hours of play, so you can be on your way quicker",
    reviews: [
      {
        rating: 4.8,
        text: "The battery life is insane!",
      },
      {
        rating: 4.9,
        text: "Great deal on a good product, in good condition.",
      },
    ],
    avgRating: 4.8,
  },

];

export default products;
