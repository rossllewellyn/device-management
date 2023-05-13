import fastify from "fastify";

const app = fastify();

(async () => {
  try {
    await app.listen({ port: 3100 });
    console.log("Server listening ...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
