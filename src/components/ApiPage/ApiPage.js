import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import FileUploadForm from '../FileUploadForm/FileUploadForm';

const ApiPage = ({ apiRoute, header }) => {
  const [sourceCounts, setSourceCounts] = useState([]);

  return (
    <div>
      <h3>{header}</h3>
      <FileUploadForm setSourceCounts={setSourceCounts} apiRoute={apiRoute} />
      <Table striped bordered hover>
        <thead>
          <tr>
            {sourceCounts?.map((el) => (
              <th key={el.source}>{el.source}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {sourceCounts?.map((el) => (
              <td key={el.source}>{el.count}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ApiPage;
