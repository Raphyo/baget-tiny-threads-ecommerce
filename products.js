// Product Catalog - 70 SKUs across 6 categories
const products = [
    // ==================== BODYSUITS (12 items) ====================
    {
        id: 1,
        name: "Classic White Bodysuit",
        category: "bodysuits",
        price: 24.99,
        emoji: "👶",
        description: "Timeless white bodysuit perfect for layering or everyday wear",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "BODY-001",
        inventory: 25
    },
    {
        id: 2,
        name: "Soft Pink Bodysuit",
        category: "bodysuits",
        price: 24.99,
        emoji: "💕",
        description: "Gentle pink color, perfect for little girls",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "BODY-002",
        inventory: 20
    },
    {
        id: 3,
        name: "Light Blue Bodysuit",
        category: "bodysuits",
        price: 24.99,
        emoji: "💙",
        description: "Soft blue bodysuit, great for little boys",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "BODY-003",
        inventory: 22
    },
    {
        id: 4,
        name: "Striped Bodysuit",
        category: "bodysuits",
        price: 27.99,
        emoji: "🎨",
        description: "Fun striped pattern, neutral colors perfect for all babies",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)"],
        sku: "BODY-004",
        inventory: 18
    },
    {
        id: 5,
        name: "Floral Print Bodysuit",
        category: "bodysuits",
        price: 28.99,
        emoji: "🌸",
        description: "Adorable floral pattern, perfect for special occasions",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "BODY-005",
        inventory: 15
    },
    {
        id: 6,
        name: "Polka Dot Bodysuit",
        category: "bodysuits",
        price: 26.99,
        emoji: "🔴",
        description: "Cute polka dot design on neutral background",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)"],
        sku: "BODY-006",
        inventory: 19
    },
    {
        id: 7,
        name: "Cloud Print Bodysuit",
        category: "bodysuits",
        price: 27.99,
        emoji: "☁️",
        description: "Dreamy cloud print bodysuit, soft and cozy",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "BODY-007",
        inventory: 21
    },
    {
        id: 8,
        name: "Rainbow Bodysuit",
        category: "bodysuits",
        price: 29.99,
        emoji: "🌈",
        description: "Vibrant rainbow colors, brings joy to any day",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "BODY-008",
        inventory: 17
    },
    {
        id: 9,
        name: "Woodland Animal Bodysuit",
        category: "bodysuits",
        price: 28.99,
        emoji: "🦊",
        description: "Adorable woodland animals pattern",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "BODY-009",
        inventory: 16
    },
    {
        id: 10,
        name: "Star Print Bodysuit",
        category: "bodysuits",
        price: 26.99,
        emoji: "⭐",
        description: "Sweet stars pattern for dreamy babies",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "BODY-010",
        inventory: 23
    },
    {
        id: 11,
        name: "Heart Pattern Bodysuit",
        category: "bodysuits",
        price: 27.99,
        emoji: "❤️",
        description: "Filled with hearts, perfect for loving babies",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "BODY-011",
        inventory: 18
    },
    {
        id: 12,
        name: "Pastel Rainbow Bodysuit",
        category: "bodysuits",
        price: 29.99,
        emoji: "🎀",
        description: "Soft pastel colors in rainbow pattern",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)"],
        sku: "BODY-012",
        inventory: 14
    },

    // ==================== TOPS (12 items) ====================
    {
        id: 13,
        name: "White Short Sleeve Tee",
        category: "tops",
        price: 22.99,
        emoji: "👕",
        description: "Classic white t-shirt for everyday comfort",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "TOP-001",
        inventory: 28
    },
    {
        id: 14,
        name: "Soft Gray T-Shirt",
        category: "tops",
        price: 22.99,
        emoji: "👔",
        description: "Neutral gray tee, versatile for any outfit",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "TOP-002",
        inventory: 25
    },
    {
        id: 15,
        name: "Printed Animal Top",
        category: "tops",
        price: 25.99,
        emoji: "🐻",
        description: "Fun animal print t-shirt for playful babies",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "TOP-003",
        inventory: 20
    },
    {
        id: 16,
        name: "Long Sleeve Thermal Top",
        category: "tops",
        price: 28.99,
        emoji: "🧥",
        description: "Warm long sleeve for cooler weather",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "TOP-004",
        inventory: 22
    },
    {
        id: 17,
        name: "Striped Organic Cotton Top",
        category: "tops",
        price: 26.99,
        emoji: "🎪",
        description: "Classic stripes in organic cotton",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "TOP-005",
        inventory: 24
    },
    {
        id: 18,
        name: "Buttercup Yellow Top",
        category: "tops",
        price: 24.99,
        emoji: "🌼",
        description: "Bright and cheerful yellow tee",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "TOP-006",
        inventory: 19
    },
    {
        id: 19,
        name: "Mint Green Baby Top",
        category: "tops",
        price: 23.99,
        emoji: "🌿",
        description: "Refreshing mint green, perfect for spring",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "TOP-007",
        inventory: 21
    },
    {
        id: 20,
        name: "Peach Knit Top",
        category: "tops",
        price: 27.99,
        emoji: "🍑",
        description: "Soft knit material in peachy tone",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "TOP-008",
        inventory: 17
    },
    {
        id: 21,
        name: "Graphic Dinosaur Top",
        category: "tops",
        price: 26.99,
        emoji: "🦕",
        description: "Cute dinosaur graphic, boys love it!",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "TOP-009",
        inventory: 16
    },
    {
        id: 22,
        name: "Ruffled Sleeve Top",
        category: "tops",
        price: 28.99,
        emoji: "👗",
        description: "Adorable ruffled sleeves for little girls",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "TOP-010",
        inventory: 15
    },
    {
        id: 23,
        name: "Organic Cream Top",
        category: "tops",
        price: 23.99,
        emoji: "🥛",
        description: "Simple cream colored organic cotton top",
        sizes: ["XS (0-3M)", "S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "TOP-011",
        inventory: 26
    },
    {
        id: 24,
        name: "Reversible Print Top",
        category: "tops",
        price: 31.99,
        emoji: "🔄",
        description: "Two prints in one! Reversible design",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "TOP-012",
        inventory: 13
    },

    // ==================== PANTS (12 items) ====================
    {
        id: 25,
        name: "Organic Cotton Leggings",
        category: "pants",
        price: 26.99,
        emoji: "👖",
        description: "Soft leggings perfect for active babies",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-001",
        inventory: 24
    },
    {
        id: 26,
        name: "Navy Sweatpants",
        category: "pants",
        price: 28.99,
        emoji: "🏃",
        description: "Cozy sweatpants for comfort and play",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-002",
        inventory: 20
    },
    {
        id: 27,
        name: "Pink Corduroy Pants",
        category: "pants",
        price: 32.99,
        emoji: "🌸",
        description: "Adorable corduroy with a rosy hue",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "PANT-003",
        inventory: 18
    },
    {
        id: 28,
        name: "Gray Joggers",
        category: "pants",
        price: 29.99,
        emoji: "🏃‍♂️",
        description: "Modern jogger style for toddlers",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-004",
        inventory: 22
    },
    {
        id: 29,
        name: "Striped Knit Pants",
        category: "pants",
        price: 27.99,
        emoji: "🎪",
        description: "Comfortable knit with stripe pattern",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-005",
        inventory: 19
    },
    {
        id: 30,
        name: "White Organic Pants",
        category: "pants",
        price: 26.99,
        emoji: "⚪",
        description: "Clean white pants, goes with everything",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "PANT-006",
        inventory: 21
    },
    {
        id: 31,
        name: "Cream Velvet Pants",
        category: "pants",
        price: 33.99,
        emoji: "🧴",
        description: "Soft velvet texture, luxurious feel",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "PANT-007",
        inventory: 14
    },
    {
        id: 32,
        name: "Green Chino Pants",
        category: "pants",
        price: 30.99,
        emoji: "🌿",
        description: "Cute chino style for little ones",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-008",
        inventory: 16
    },
    {
        id: 33,
        name: "Floral Print Leggings",
        category: "pants",
        price: 28.99,
        emoji: "🌺",
        description: "Pretty floral design leggings",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-009",
        inventory: 17
    },
    {
        id: 34,
        name: "Camel Wool Blend Pants",
        category: "pants",
        price: 34.99,
        emoji: "🐫",
        description: "Warm wool blend for winter",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-010",
        inventory: 12
    },
    {
        id: 35,
        name: "Rainbow Striped Leggings",
        category: "pants",
        price: 29.99,
        emoji: "🌈",
        description: "Colorful rainbow stripes",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "PANT-011",
        inventory: 15
    },
    {
        id: 36,
        name: "Blue Denim-Style Pants",
        category: "pants",
        price: 31.99,
        emoji: "👖",
        description: "Soft denim-look for baby boys",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "PANT-012",
        inventory: 18
    },

    // ==================== DRESSES (12 items) ====================
    {
        id: 37,
        name: "White Cotton Dress",
        category: "dresses",
        price: 34.99,
        emoji: "👗",
        description: "Classic white dress for special occasions",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "DRESS-001",
        inventory: 16
    },
    {
        id: 38,
        name: "Pink Sundress",
        category: "dresses",
        price: 36.99,
        emoji: "☀️",
        description: "Perfect for summer, light and breezy",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "DRESS-002",
        inventory: 14
    },
    {
        id: 39,
        name: "Floral Garden Dress",
        category: "dresses",
        price: 38.99,
        emoji: "🌹",
        description: "Beautiful floral print dress",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "DRESS-003",
        inventory: 12
    },
    {
        id: 40,
        name: "Vintage Lace Dress",
        category: "dresses",
        price: 39.99,
        emoji: "👰",
        description: "Elegant lace detailing for special events",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "DRESS-004",
        inventory: 10
    },
    {
        id: 41,
        name: "Rainbow Twirl Dress",
        category: "dresses",
        price: 37.99,
        emoji: "🎨",
        description: "Fun rainbow colors with twirl skirt",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "DRESS-005",
        inventory: 11
    },
    {
        id: 42,
        name: "Soft Blue Party Dress",
        category: "dresses",
        price: 35.99,
        emoji: "💎",
        description: "Elegant blue dress for celebrations",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "DRESS-006",
        inventory: 13
    },
    {
        id: 43,
        name: "Strawberry Print Dress",
        category: "dresses",
        price: 36.99,
        emoji: "🍓",
        description: "Cute strawberry pattern",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "DRESS-007",
        inventory: 15
    },
    {
        id: 44,
        name: "Polka Dot Occasion Dress",
        category: "dresses",
        price: 37.99,
        emoji: "🔴",
        description: "Polka dots with sweet details",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "DRESS-008",
        inventory: 12
    },
    {
        id: 45,
        name: "Spring Green Dress",
        category: "dresses",
        price: 35.99,
        emoji: "🌿",
        description: "Fresh spring green color",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "DRESS-009",
        inventory: 14
    },
    {
        id: 46,
        name: "Butterfly Print Dress",
        category: "dresses",
        price: 38.99,
        emoji: "🦋",
        description: "Adorable butterflies on soft fabric",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "DRESS-010",
        inventory: 11
    },
    {
        id: 47,
        name: "Peach Velvet Dress",
        category: "dresses",
        price: 39.99,
        emoji: "🍑",
        description: "Soft velvet texture dress",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "DRESS-011",
        inventory: 9
    },
    {
        id: 48,
        name: "Lavender Tulle Dress",
        category: "dresses",
        price: 40.99,
        emoji: "💜",
        description: "Dreamy lavender with tulle skirt",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "DRESS-012",
        inventory: 8
    },

    // ==================== ACCESSORIES (12 items) ====================
    {
        id: 49,
        name: "Soft Cotton Socks Set",
        category: "accessories",
        price: 12.99,
        emoji: "🧦",
        description: "Pack of 6 cozy socks",
        sizes: ["One Size"],
        sku: "ACC-001",
        inventory: 35
    },
    {
        id: 50,
        name: "Baby Bonnet Hat",
        category: "accessories",
        price: 16.99,
        emoji: "🎀",
        description: "Cute bonnet for sun protection",
        sizes: ["One Size"],
        sku: "ACC-002",
        inventory: 22
    },
    {
        id: 51,
        name: "Knit Winter Beanie",
        category: "accessories",
        price: 18.99,
        emoji: "❄️",
        description: "Warm beanie for cold weather",
        sizes: ["One Size"],
        sku: "ACC-003",
        inventory: 18
    },
    {
        id: 52,
        name: "Organic Mittens Pair",
        category: "accessories",
        price: 14.99,
        emoji: "🧤",
        description: "Soft mittens to keep little hands warm",
        sizes: ["One Size"],
        sku: "ACC-004",
        inventory: 25
    },
    {
        id: 53,
        name: "Printed Headband",
        category: "accessories",
        price: 11.99,
        emoji: "👶",
        description: "Cute printed headband for baby girls",
        sizes: ["One Size"],
        sku: "ACC-005",
        inventory: 28
    },
    {
        id: 54,
        name: "Cotton Bibs Set",
        category: "accessories",
        price: 15.99,
        emoji: "🍼",
        description: "Pack of 3 adorable bibs",
        sizes: ["One Size"],
        sku: "ACC-006",
        inventory: 32
    },
    {
        id: 55,
        name: "Soft Burp Cloth",
        category: "accessories",
        price: 13.99,
        emoji: "🧻",
        description: "Muslin burp cloths, super soft",
        sizes: ["One Size"],
        sku: "ACC-007",
        inventory: 30
    },
    {
        id: 56,
        name: "Hair Bow Clips Set",
        category: "accessories",
        price: 12.99,
        emoji: "🎀",
        description: "Pack of 5 colorful bow clips",
        sizes: ["One Size"],
        sku: "ACC-008",
        inventory: 26
    },
    {
        id: 57,
        name: "Bamboo Pacifier Holder",
        category: "accessories",
        price: 17.99,
        emoji: "🍃",
        description: "Eco-friendly pacifier holder",
        sizes: ["One Size"],
        sku: "ACC-009",
        inventory: 19
    },
    {
        id: 58,
        name: "Organic Sleep Sack",
        category: "accessories",
        price: 39.99,
        emoji: "😴",
        description: "Safe sleep sack for cozy nights",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "ACC-010",
        inventory: 11
    },
    {
        id: 59,
        name: "Swaddle Wrap Set",
        category: "accessories",
        price: 29.99,
        emoji: "🎁",
        description: "Pack of 2 soft swaddle wraps",
        sizes: ["One Size"],
        sku: "ACC-011",
        inventory: 16
    },
    {
        id: 60,
        name: "Baby Booties Set",
        category: "accessories",
        price: 19.99,
        emoji: "👣",
        description: "Pack of 3 cute booties",
        sizes: ["One Size"],
        sku: "ACC-012",
        inventory: 23
    },

    // ==================== SEASONAL ITEMS (10 items) ====================
    {
        id: 61,
        name: "Summer Beach Set",
        category: "seasonal",
        price: 44.99,
        emoji: "🏖️",
        description: "Beach outfit set for summer",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "SEASON-001",
        inventory: 12
    },
    {
        id: 62,
        name: "Winter Snowsuit",
        category: "seasonal",
        price: 54.99,
        emoji: "⛄",
        description: "Warm snowsuit for winter play",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "SEASON-002",
        inventory: 10
    },
    {
        id: 63,
        name: "Spring Easter Outfit",
        category: "seasonal",
        price: 49.99,
        emoji: "🐰",
        description: "Cute Easter themed outfit",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "SEASON-003",
        inventory: 9
    },
    {
        id: 64,
        name: "Fall Pumpkin Shirt",
        category: "seasonal",
        price: 27.99,
        emoji: "🎃",
        description: "Adorable pumpkin print shirt",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "SEASON-004",
        inventory: 15
    },
    {
        id: 65,
        name: "Holiday Red Dress",
        category: "seasonal",
        price: 42.99,
        emoji: "🎄",
        description: "Festive red dress for holidays",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "SEASON-005",
        inventory: 11
    },
    {
        id: 66,
        name: "Valentine's Day Outfit",
        category: "seasonal",
        price: 44.99,
        emoji: "💕",
        description: "Sweet valentine themed set",
        sizes: ["M (6-12M)", "L (12-24M)"],
        sku: "SEASON-006",
        inventory: 8
    },
    {
        id: 67,
        name: "Summer Lightweight Set",
        category: "seasonal",
        price: 38.99,
        emoji: "☀️",
        description: "Breathable outfit for hot weather",
        sizes: ["L (12-24M)", "XL (2-3Y)"],
        sku: "SEASON-007",
        inventory: 13
    },
    {
        id: 68,
        name: "Winter Thermal Layers",
        category: "seasonal",
        price: 35.99,
        emoji: "🧊",
        description: "Warm thermal layer set",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "SEASON-008",
        inventory: 14
    },
    {
        id: 69,
        name: "Spring Baby Bunny Set",
        category: "seasonal",
        price: 41.99,
        emoji: "🐇",
        description: "Cute bunny themed spring outfit",
        sizes: ["S (3-6M)", "M (6-12M)", "L (12-24M)"],
        sku: "SEASON-009",
        inventory: 10
    },
    {
        id: 70,
        name: "Christmas Sweater Outfit",
        category: "seasonal",
        price: 48.99,
        emoji: "🎅",
        description: "Festive Christmas sweater and pants set",
        sizes: ["M (6-12M)", "L (12-24M)", "XL (2-3Y)"],
        sku: "SEASON-010",
        inventory: 7
    }
];

// Category information
const categories = {
    bodysuits: {
        name: "Bodysuits",
        description: "Essential bodysuits for layering and everyday wear"
    },
    tops: {
        name: "Tops",
        description: "T-shirts and tops for every season"
    },
    pants: {
        name: "Pants",
        description: "Comfortable pants and leggings"
    },
    dresses: {
        name: "Dresses",
        description: "Pretty dresses for special occasions"
    },
    accessories: {
        name: "Accessories",
        description: "Hats, socks, bibs, and more"
    },
    seasonal: {
        name: "Seasonal Items",
        description: "Collections for every season and holiday"
    }
};
