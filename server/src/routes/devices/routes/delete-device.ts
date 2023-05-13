import { FastifyPluginAsync } from "fastify";
import {
  deleteDeviceBody,
  deleteDeviceResponse,
  DeleteDeviceRoute,
} from "../types/delete-device-types";
import { deviceService } from "../../../services/devices/device-service";

export const deleteDeviceRoute: FastifyPluginAsync = async (app) => {
  app.delete<DeleteDeviceRoute>(
    "/",
    {
      schema: {
        body: deleteDeviceBody,
        response: { 200: deleteDeviceResponse },
      },
    },
    async (req, res) => {
      const response = await deleteDevice(req.body.device_id);

      return res.status(200).send(response);
    }
  );
};

export const deleteDevice = async (deviceId: string) => {
  return await deviceService.deleteFull({ where: { device_id: deviceId } });
};
