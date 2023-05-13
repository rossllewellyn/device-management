import { FastifyPluginAsync } from "fastify";
import { postDeviceRoute } from "./routes/post-device";
import { postDeviceQueryRoute } from "./routes/post-device-query";

export const devicesRoutes: FastifyPluginAsync = async (app) => {
  app.register(postDeviceRoute);

  app.register(postDeviceQueryRoute);

  // TODO:
  // patchDeviceRoute
  // deleteDeviceRoute
};
