import { PostDeviceResponse } from "../../../server/src/routes/devices/types/post-device-types";

const EditDeviceForm = ({
  device,
  editDevice,
  setAppMode,
}: {
  device: PostDeviceResponse;
  editDevice: Function;
  setAppMode: Function;
}) => {
  return <>Edit Device</>;
};

export default EditDeviceForm;
