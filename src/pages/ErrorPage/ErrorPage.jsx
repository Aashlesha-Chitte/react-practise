/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ErrorPage = () => {
  const errorHandler = () => {
    throw new Error('An error occured');
  };
  return (
    <>
      <br />
      <br />
      <button type="button" onClick={errorHandler}>
        Show fallback ui
      </button>
    </>
  );
};

export default ErrorPage;
