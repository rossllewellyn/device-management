import { FastifyPluginAsync } from "fastify";
import {
  postDeviceBody,
  PostDeviceBody,
  postDeviceResponse,
  PostDeviceRoute,
} from "../types/post-device-types";
import { deviceService } from "../../../services/devices/device-service";

export const postDeviceRoute: FastifyPluginAsync = async (app) => {
  app.post<PostDeviceRoute>(
    "/",
    {
      schema: {
        body: postDeviceBody,
        response: { 201: postDeviceResponse },
      },
    },
    async (req, res) => {
      const response = await postDevice(req.body);

      return res.status(201).send(response);
    }
  );
};

export const postDevice = async (body: PostDeviceBody) => {
  return await deviceService.createNew(body);
};
