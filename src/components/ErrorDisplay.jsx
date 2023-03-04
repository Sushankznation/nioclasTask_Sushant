import {Alert } from 'react-bootstrap';
export default function ErrorDisplay({ error }) {
    return (
      <div className="d-flex justify-content-center align-items-center my-3">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }