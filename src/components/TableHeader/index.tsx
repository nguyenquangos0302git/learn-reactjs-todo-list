import React from 'react';

interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeader: React.FC<TableHeaderProps> = ({ ...props }) => {
  return <thead {...props} />;
};
