import { FastifyPluginAsync } from "fastify";
import { postDeviceRoute } from "./routes/post-device";
import { postDeviceQueryRoute } from "./routes/post-device-query";
import { deleteDeviceRoute } from "./routes/delete-device";
import { patchDeviceRoute } from "./routes/patch-device";

export const devicesRoutes: FastifyPluginAsync = async (app) => {
  app.register(postDeviceRoute);

  app.register(postDeviceQueryRoute);

  app.register(deleteDeviceRoute);

  app.register(patchDeviceRoute);
};
