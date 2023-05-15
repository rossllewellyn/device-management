import { ChangeEvent, useState } from "react";
import { AppMode } from "./page";

const AddDeviceForm = ({
  addDevice,
  setAppMode,
}: {
  addDevice: Function;
  setAppMode: Function;
}) => {
  const [formData, setFormData] = useState({});

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <button onClick={() => setAppMode(AppMode.VIEWING)}>Cancel</button>
    </form>
  );
};

export default AddDeviceForm;
