import React, { useState } from "react";
import Modal from "../Layouts/Modal";

function Playground() {
  const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Modal>
        <div>
          <h2>Upload a Picture</h2>
          <input type="file" onChange={handleFileChange} />
          <br />
          {image && (
            <img
              src={image}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Playground;
