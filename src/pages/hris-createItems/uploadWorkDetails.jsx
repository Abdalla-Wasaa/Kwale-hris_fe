import React, { useState } from "react";
import axios from 'axios';

function UploadWorkDetails() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:4000/uploadEmployeesWorkData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error.response ? error.response.data : error.message);
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-4'>
          <h2>Upload Employees Work Details in Bulk</h2>
          <form className="crancy-wc__form-main" onSubmit={handleSubmit}>
            <div>
              <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            </div>
            <div className="crancy-wc__button--group">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadWorkDetails;
