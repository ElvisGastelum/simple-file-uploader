import { useState } from 'react';
import * as UpChunk from '@mux/upchunk';

const useFileUpload = (endPoint) => {
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const element = e.target;
    const getUploadUrl = () =>
      fetch(endPoint, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
          Authorization: process.env.AUTHORIZATION_JWT,
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.ok) {
          return res.text();
        }
        throw new Error('Error getting an upload URL :(');
      });

    const upload = UpChunk.createUpload({
      endpoint: getUploadUrl,
      file: element.files[0],
      chunkSize: 5120,
    });

    upload.on('error', (err) => {
      setError(err.detail);
    });

    upload.on('progress', (progress) => {
      setProgress(progress.detail);
    });

    upload.on('success', () => {
      setSuccess(true);
    });
  };

  return [handleChange, progress, success, error];
};

export { useFileUpload };
