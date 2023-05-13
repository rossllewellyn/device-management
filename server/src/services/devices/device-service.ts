import { Prisma } from "@prisma/client";
import { orm } from "../orm";
import { DeviceInstance } from "./device-instance";

export const deviceService = Object.assign(orm.device, {
  createFull: async <T extends Prisma.DeviceCreateArgs>(createArgs: T) => {
    const newDevice = await orm.device.create(createArgs);

    return new DeviceInstance(newDevice).apiFormat;
  },

  findManyFull: async <T extends Prisma.DeviceFindManyArgs>(findManyArgs: T) => {
    const devices = await orm.device.findMany(findManyArgs);

    return devices.map((device) => new DeviceInstance(device).apiFormat);
  },

  deleteFull: async <T extends Prisma.DeviceDeleteArgs>(deleteArgs: T) => {
    const deletedDevice = await orm.device.delete(deleteArgs);

    return new DeviceInstance(deletedDevice).apiFormat;
  },

  updateFull: async <T extends Prisma.DeviceUpdateArgs>(updateArgs: T) => {
    const updatedDevice = await orm.device.update(updateArgs);

    return new DeviceInstance(updatedDevice).apiFormat;
  },
});
