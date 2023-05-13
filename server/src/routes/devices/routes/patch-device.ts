import { FastifyPluginAsync } from "fastify";
import {
  PatchDeviceBody,
  patchDeviceBody,
  patchDeviceResponse,
  PatchDeviceRoute,
} from "../types/patch-device-types";
import { deviceService } from "../../../services/devices/device-service";

export const patchDeviceRoute: FastifyPluginAsync = async (app) => {
  app.patch<PatchDeviceRoute>(
    "/",
    {
      schema: {
        body: patchDeviceBody,
        response: { 200: patchDeviceResponse },
      },
    },
    async (req, res) => {
      const response = await patchDevice(req.body);

      return res.status(200).send(response);
    }
  );
};

export const patchDevice = async (body: PatchDeviceBody) => {
  const { device_id: deviceId, ...updateFields } = body;

  return await deviceService.updateOne({ where: { device_id: deviceId }, data: updateFields });
};
