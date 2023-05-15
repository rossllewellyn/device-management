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

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <label>
        Device Id:
        <input name="device_id" onChange={handleFormChange} />
      </label>
      <label>
        Brand:
        <input name="device_make" onChange={handleFormChange} />
      </label>
      <label>
        Model:
        <input name="device_model" onChange={handleFormChange} />
      </label>
      <label>
        OS:
        <input name="device_os_version" onChange={handleFormChange} />
      </label>
      <label>Status Code:</label>
      <select name="device_status_code" onChange={handleFormChange}>
        <option value="NEW">NEW</option>
        <option value="USED">USED</option>
        <option value="REFURBISHED">REFURBISHED</option>
        <option value="BROKEN">BROKEN</option>
      </select>
      <label>
        Tenant Id:
        <input name="tenant_id" onChange={handleFormChange} />
      </label>
      <label>
        App Identifier:
        <input name="app_identifier" onChange={handleFormChange} />
      </label>
      <label>
        App Version:
        <input name="app_version" onChange={handleFormChange} />
      </label>
      <button
        type="submit"
        onClick={() => {
          // these are batched together
          setAppMode(AppMode.VIEWING);
          addDevice({
            ...formData,
          });
        }}
      >
        Save
      </button>
      <button onClick={() => setAppMode(AppMode.VIEWING)}>Cancel</button>
    </form>
  );
};

export default AddDeviceForm;
