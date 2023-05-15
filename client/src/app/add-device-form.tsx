import { AppMode } from "./page";

const AddDeviceForm = ({
  addDevice,
  setAppMode,
}: {
  addDevice: Function;
  setAppMode: Function;
}) => {
  return (
    <>
      <button onClick={() => setAppMode(AppMode.VIEWING)}>Cancel</button>
    </>
  );
};

export default AddDeviceForm;
