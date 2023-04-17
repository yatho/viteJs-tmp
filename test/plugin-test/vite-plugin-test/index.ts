export default function testPlugin() {
  return {
    name: "vite-plugin-test",
    apply: "serve",
    transform(code) {
      return code.replace(
        /<footer>(.*?)<\/footer>/,
        `<footer>Version de développement</footer>`
      );
    },
  };
}
