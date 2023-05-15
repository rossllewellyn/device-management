import styles from "./page.module.css";
import { ChangeEvent, useState } from "react";
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
  const [formData, setFormData] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={styles.form}>
      <label>
        Brand:
        <input
          type="text"
          name="device_make"
          defaultValue={device.device_make}
          onChange={handleChange}
        />
      </label>
      <label>
        Model:
        <input
          type="text"
          name="device_model"
          defaultValue={device.device_model}
          onChange={handleChange}
        />
      </label>
      <label>
        OS:
        <input
          type="text"
          name="device_os_version"
          defaultValue={device.device_os_version}
          onChange={handleChange}
        />
      </label>
      <label>Status Code:</label>
      <select
        name="device_status_code"
        defaultValue={device.device_status_code}
        onChange={handleChange}
      >
        <option value="NEW">NEW</option>
        <option value="USED">USED</option>
        <option value="REFURBISHED">REFURBISHED</option>
        <option value="BROKEN">BROKEN</option>
      </select>
      <label>
        Tenant Id:
        <input
          type="text"
          name="tenant_id"
          defaultValue={device.tenant_id}
          onChange={handleChange}
        />
      </label>
      <label>
        App Identifier:
        <input
          type="text"
          name="app_identifier"
          defaultValue={device.app_identifier}
          onChange={handleChange}
        />
      </label>
      <label>
        App Version:
        <input
          type="text"
          name="app_version"
          defaultValue={device.app_version}
          onChange={handleChange}
        />
      </label>
      <div className={styles.buttoncontainer}>
        <button
          type="submit"
          onClick={() => {
            // these are batched together
            setAppMode(AppMode.VIEWING);
            editDevice({
              ...device,
              ...formData,
            });
          }}
        >
          Save
        </button>
        <button onClick={() => setAppMode(AppMode.VIEWING)}>Cancel</button>
      </div>
    </form>
  );
};

export default EditDeviceForm;
