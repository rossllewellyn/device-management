import fastify from "fastify";
import { routesIndex } from "./routes/routes-index";

const app = fastify();

app.register(routesIndex);

(async () => {
  try {
    await app.listen({ port: 3100 });
    console.log("Server listening ...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
