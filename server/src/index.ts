import fastify from "fastify";
import cors from "@fastify/cors";
import { routesIndex } from "./routes/routes-index";

const app = fastify();

app.register(routesIndex);
app.register(cors);

const port = (process.env.SERVER_PORT as unknown as number) || 3100;
const environment = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";

(async () => {
  try {
    await app.listen({ port, host: environment });
    console.log("Server listening ...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
