import { Prisma } from "@prisma/client";
import { orm } from "../orm";
import { DeviceInstance } from "./device-instance";

export const deviceService = Object.assign(orm.device, {
  createNew: async <T extends Prisma.DeviceCreateInput>(createArgs: T) => {
    const newDevice = await orm.device.create({ data: createArgs });

    return new DeviceInstance(newDevice).apiFormat;
  },
});
