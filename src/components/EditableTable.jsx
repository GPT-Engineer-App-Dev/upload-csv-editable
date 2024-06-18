import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Input } from '@chakra-ui/react';
import { FaTrash, FaPlus } from 'react-icons/fa';

const EditableTable = ({ data, setData }) => {
  const handleCellChange = (e, rowIndex, columnId) => {
    const newData = [...data];
    newData[rowIndex][columnId] = e.target.value;
    setData(newData);
  };

  const handleAddRow = () => {
    const newRow = Object.keys(data[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
    setData([...data, newRow]);
  };

  const handleRemoveRow = (rowIndex) => {
    const newData = data.filter((_, index) => index !== rowIndex);
    setData(newData);
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {Object.keys(data[0]).map((key) => (
            <Th key={key}>{key}</Th>
          ))}
          <Th>
            <IconButton icon={<FaPlus />} onClick={handleAddRow} />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {Object.keys(row).map((columnId) => (
              <Td key={columnId}>
                <Input
                  value={row[columnId]}
                  onChange={(e) => handleCellChange(e, rowIndex, columnId)}
                />
              </Td>
            ))}
            <Td>
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveRow(rowIndex)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default EditableTable;