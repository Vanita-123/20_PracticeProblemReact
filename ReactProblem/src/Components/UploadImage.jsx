import { useState } from "react";

function UploadImage() {
  const [image, setimage] = useState(null);
  const handleimage = (e) => {
    setimage(e.target.files[0]);
  };
  return (
    <div style={{ width: "300px", border: "2px solid black", margin: "10px" }}>
      <div style={{ margin: "10px" }}>
        <h1>Upload Image</h1>
        <input type="file" accept="image/*" onChange={handleimage} />
        {image && <img src={URL.createObjectURL(image)} alt="uploaded" />}
      </div>
    </div>
  );
}

export default UploadImage;
