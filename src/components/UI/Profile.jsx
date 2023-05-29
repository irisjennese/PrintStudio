import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post('/upload', formData)
      .then((response) => {
        // Assuming the response contains the uploaded image URL or identifier
        const imageUrl = response.data.imageUrl;
        // Update the profile picture URL in your backend or database

        // Update the component state with the new profile picture URL
        // setProfilePictureUrl(imageUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {/* Display the updated profile picture */}
      {/* <img src={profilePictureUrl} alt="Profile Picture" /> */}
    </div>
  );
}

export default Profile;
