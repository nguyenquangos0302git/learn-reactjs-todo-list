import React from 'react';

interface TableBodyProps {}

export const TableBody: React.FC<TableBodyProps> = ({ ...props }) => {
  return <tbody {...props} />;
};
