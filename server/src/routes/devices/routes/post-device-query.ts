import { FastifyPluginAsync } from "fastify";
import {
  PostDeviceQueryBody,
  postDeviceQueryBody,
  postDeviceQueryResponse,
  PostDeviceQueryRoute,
} from "../types/post-device-query-types";
import { deviceService } from "../../../services/devices/device-service";

export const postDeviceQueryRoute: FastifyPluginAsync = async (app) => {
  app.post<PostDeviceQueryRoute>(
    "/query",
    {
      schema: {
        body: postDeviceQueryBody,
        response: { 200: postDeviceQueryResponse },
      },
    },
    async (req, res) => {
      const response = await postDeviceQuery(req.body);

      return res.status(200).send(response);
    }
  );
};

export const postDeviceQuery = async (body: PostDeviceQueryBody) => {
  return deviceService.findManyFull({
    where: {
      OR: [
        { device_id: { contains: body.search_text } },
        { device_activation_code: { contains: body.search_text } },
        { tenant_id: { contains: body.search_text } },
        { device_make: { contains: body.search_text } },
        { device_model: { contains: body.search_text } },
        { device_activation_code: { contains: body.search_text } },
        { device_os_version: { contains: body.search_text } },
        { device_settings_json: { string_contains: body.search_text } },
        { device_projects_json: { string_contains: body.search_text } },
        { app_identifier: { contains: body.search_text } },
        { app_version: { contains: body.search_text } },
        { last_updated_ip: { contains: body.search_text } },
        // TODO: split up above with multiple search text inputs
        // TODO: search by created/last updated
      ],
    },
  });
};
