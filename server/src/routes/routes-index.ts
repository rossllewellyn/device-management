import { Type as T } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";

export const routesIndex: FastifyPluginAsync = async (app) => {
  const config = { schema: { response: { 200: T.String() } } };
  app.get("/health", config, async (_req, res) => {
    res.status(200).send("Looking healthy!");
  });

  app.register(async (app) => {
    // TODO: add routes
  });
};
