import { Type as T } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { devicesRoutes } from "./devices/devices-routes";

export const routesIndex: FastifyPluginAsync = async (app) => {
  const config = { schema: { response: { 200: T.String() } } };

  app.get("/health", config, async (_req, res) => {
    res.status(200).send("Looking healthy!");
  });

  app.register(devicesRoutes, { prefix: "devices" });
};
