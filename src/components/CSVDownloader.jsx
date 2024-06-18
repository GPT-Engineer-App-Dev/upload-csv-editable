import React from 'react';
import { Button } from '@chakra-ui/react';
import Papa from 'papaparse';

const CSVDownloader = ({ data }) => {
  const handleDownload = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'edited_data.csv');
    link.click();
  };

  return (
    <Button onClick={handleDownload} colorScheme="green">Download CSV</Button>
  );
};

export default CSVDownloader;