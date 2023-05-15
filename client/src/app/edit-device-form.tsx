import { PostDeviceResponse } from "../../../server/src/routes/devices/types/post-device-types";
import { AppMode } from "./page";

const EditDeviceForm = ({
  device,
  editDevice,
  setAppMode,
}: {
  device: PostDeviceResponse;
  editDevice: Function;
  setAppMode: Function;
}) => {
  return (
    <>
      <button onClick={() => setAppMode(AppMode.VIEWING)}>Cancel</button>
    </>
  );
};

export default EditDeviceForm;
