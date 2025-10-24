import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '200px' }}>
      <Spinner animation="border" variant="primary" size="lg" />
      <p className="mt-3 text-muted">{message}</p>
    </div>
  );
};
