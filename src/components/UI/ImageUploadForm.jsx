import React, { useState } from 'react';

function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional logic or submit the form
    // You can access the selected file using the `selectedFile` state variable
    console.log(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="imageUpload">Choose an image:</label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm;
