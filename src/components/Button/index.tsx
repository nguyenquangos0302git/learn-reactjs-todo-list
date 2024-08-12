import clsx from 'clsx';
import React from 'react';

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'link';

type ButtonSize = 'small' | 'large';

const ButtonSizeMapping: {
  [key in ButtonSize]: string;
} = {
  small: 'sm',
  large: 'lg',
};

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];

  type?: ButtonType;
  size?: ButtonSize;

  outline?: boolean;
  rounded?: boolean;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  htmlType,
  type,
  size,
  outline,
  rounded,
  active,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'btn',
        className,
        type && `btn-${type}`,
        size && `btn-${ButtonSizeMapping[size]}`,
        outline && `btn-outline-${type}`,
        rounded && `btn-rounded`,
        active && `active`
      )}
      {...props}
      type={htmlType}
    />
  );
};
