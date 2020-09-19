import React from 'react';

const Error = ({ error }) => {
  return (
    <>
      <h1>Ops, Ocurred a error uploading the video :(</h1>
      <p>{error}</p>
    </>
  );
};

export default Error;
