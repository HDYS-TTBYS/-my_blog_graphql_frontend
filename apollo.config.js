module.exports = {
  client: {
    service: {
      name: "tatehide-blog",
      url: "https://my-blog-api-01.herokuapp.com/graphql",
    },
    includes: ["./queries/**/*.graphql"],
    excludes: ["**/__tests__/**", "**/.next/**", "**/node_modules/**"],
  },
};
