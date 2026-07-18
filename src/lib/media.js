// Static image manifest — all images live under /public/images

export const LOGO_URL = "/images/brand/logo.jpg";
export const HERO_BANNER_URL = "/images/brand/hero-banner.jpg";

const foodNames = [
  "Apple_Lettuce_Salad", "Assorted_Donuts", "BBQ_Grilled_Chicken", "Berry_Cheesecake",
  "Cappuccino", "Chicken_Caesar_Salad", "Chicken_Lasagna", "Chicken_Pasta_Salad",
  "Chicken_Popcorn", "Chicken_Roll", "Chicken_Satay_Skewers", "Chicken_Tikka_Taco",
  "Chicken_Tikka_with_Mint_Mayo", "Chocolate_Walnut_Brownie", "Chocolate_Walnut_Brownie_2",
  "Cream_of_Broccoli_Soup", "Cream_of_Mushroom_Soup", "Cream_of_Spinach_Soup",
  "Crispy_Cheese_Corn_Balls", "Crispy_Cheese_Corn_Balls_2", "Crispy_Chicken_Fingers",
  "Crispy_Chicken_Strips_with_Dip", "Crispy_Corn_Cheese_Balls", "Crispy_Fried_Prawns",
  "Dal_Curry_with_Rice", "Eggplant_Parmesan", "Farmhouse_Veg_Pizza", "French_Fries",
  "Fresh_Pineapple_Salad", "Fried_Cheese_Corn_Dumplings", "Grilled_Chicken_Wrap",
  "Grilled_Chicken_in_White_Sauce_with_Rice", "Honey_Chilli_Chicken_Wings",
  "Lemon_Coriander_Soup", "Paneer_Makhani_with_Rice", "Peri_Peri_Fries",
  "Pista_Cookies", "Sprouts_Chaat_with_Idli", "Strawberry_Cheesecake",
  "Veg_Hakka_Noodles", "Veg_Puff_Pastry",
];

export const FOODS = foodNames.map((id) => ({
  id,
  name: id.replace(/_/g, " ").replace(/\s\d+$/, ""),
  url: `/images/food/${id}.jpg`,
}));

const galleryFiles = [
  "013y2cl82q", "0sfj4vv2ii", "133ot4otwz", "6u4xpgq1gc", "9n9lyp3k4q",
  "affj33ot1g", "bslmgpj8dq", "bzdauzdczm", "clo6qi9dz8", "df0rw9aziw",
  "fgwqg8g0gb", "fgwqg8g0gb_1", "jg4afwxrxb",
];
export const GALLERY = galleryFiles.map(
  (id) => `/images/gallery/december-delights-hanamkonda-warangal-coffee-shops-${id}.jpg`,
);

const menuFiles = [
  "6d6fosto6l", "01mug5s1m4", "1w82a6zoh8", "2mzzh3m6mq", "4topq8ht2s",
  "72uz7forxz", "9zoaf6qr0o", "d9b6h3359d", "j5v4xlybad", "jcrpri2n7p",
  "jpqycnprmy", "k1y4k6w59o",
];
export const MENU_CARDS = menuFiles.map(
  (id) => `/images/menu/december-delights-hanamkonda-warangal-coffee-shops-${id}.jpg`,
);
