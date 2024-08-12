import clsx from 'clsx';
import React from 'react';

type BorderColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'white';
type TableAlign = 'top' | 'middle' | 'bottom';
type TableSize = 'small';

const TableSizeMapping: {
  [key in TableSize]: string;
} = {
  small: 'sm',
};

export interface TableProps
  extends Omit<React.TableHTMLAttributes<HTMLTableElement>, 'align'> {
  tag?: string;
  align?: TableAlign;
  borderColor?: BorderColor;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  hover?: boolean;
  size?: TableSize;
  responsive?: boolean;
}

export const Table: React.FC<TableProps> = ({
  align,
  striped,
  hover,
  bordered,
  borderColor,
  borderless,
  size,
  responsive,
  className,
  ...props
}) => {
  return (
    <table
      className={clsx(
        'table',
        className,
        align && `align-${align}`,
        striped && `table-${striped}`,
        hover && `table-${hover}`,
        bordered && `table-${bordered}`,
        borderColor && `border-${borderColor}`,
        borderless && `table-${borderless}`,
        size && `table-${TableSizeMapping[size]}`,
        responsive && `table-responsive`
      )}
      {...props}
    />
  );
};
