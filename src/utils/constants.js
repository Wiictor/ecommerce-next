export const ENV = {
  //SERVER_HOST: "http://localhost:1337",
  //API_URL: "http://localhost:1337/api",
  SERVER_HOST: "https://ecommerce-strapi-wiictor.up.railway.app",
  API_URL: "https://ecommerce-strapi-wiictor.up.railway.app/api",
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/local/register",
      LOGIN: "auth/local",
    },
    USERS_ME: "users/me",
    USERS: "users",
    PLATFORM: "platforms",
    ADDRESS: "addresses",
    GAME: "games",
    WISHLIST: "wishlists",
    PAYMENT_ORDER: "payment-order",
    ORDER: "orders",
  },
  TOKEN: "token",
  CART: "cart",
  STRIPE_TOKEN:
    "pk_test_51OL1v6Hlgjd0AMTjKB39TQerhHDRazudImpvZj7Tq41FT4ADq34rcgR0RFlETRQOMTo8GQL7Af0shix1cHUdpCGM00WE7B7rOs",
};
