import { FastifyPluginAsync } from "fastify";
import { postDeviceRoute } from "./routes/post-device";

export const devicesRoutes: FastifyPluginAsync = async (app) => {
  app.register(postDeviceRoute);

  // TODO:
  // patchDeviceRoute
  // postDeviceQueryRoute
  // deleteDeviceRoute
};
