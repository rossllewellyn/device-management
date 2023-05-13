import { Prisma } from "@prisma/client";
import { orm } from "../orm";
import { DeviceInstance } from "./device-instance";

export const deviceService = Object.assign(orm.device, {
  createNew: async <T extends Prisma.DeviceCreateInput>(createArgs: T) => {
    const newDevice = await orm.device.create({ data: createArgs });

    return new DeviceInstance(newDevice).apiFormat;
  },

  findManyFull: async <T extends Prisma.DeviceFindManyArgs>(findManyArgs: T) => {
    const devices = await orm.device.findMany(findManyArgs);

    return devices.map((device) => new DeviceInstance(device).apiFormat);
  },

  deleteOne: async (deviceId: string) => {
    const deletedDevice = await orm.device.delete({ where: { device_id: deviceId } });

    return new DeviceInstance(deletedDevice).apiFormat;
  },
});
