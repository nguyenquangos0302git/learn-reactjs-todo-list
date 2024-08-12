import clsx from 'clsx';
import React from 'react';

type Alignment =
  | 'start'
  | 'center'
  | 'end'
  | 'sm-start'
  | 'md-start'
  | 'lg-start'
  | 'xl-start';
type Wrap = 'wrap' | 'nowrap';
type Transform = 'lowercase' | 'uppercase' | 'capitalize';
type FontSize = 1 | 2 | 3 | 4 | 5 | 6;
type FontWeight = 'bold' | 'bolder' | 'normal' | 'light' | 'lighter';
type FontItalics = 'italic' | 'normal';
type LineHeight = '1' | 'sm' | 'base' | 'lg';
type Decoration = 'underline' | 'line-through' | 'none';

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  align?: Alignment;
  wrap?: Wrap;
  bgHighlight?: boolean;
  breakText?: boolean;
  transform?: Transform;
  size?: FontSize;
  weight?: FontWeight;
  italics?: FontItalics;
  lineHeight?: LineHeight;
  monospace?: boolean;
  resetColor?: boolean;
  decoration?: Decoration;
}

export const Typography: React.FC<TypographyProps> = ({
  align,
  wrap,
  bgHighlight,
  breakText,
  transform,
  size,
  weight,
  italics,
  lineHeight,
  monospace,
  resetColor,
  decoration,
  className,
  ...props
}) => {
  return (
    <p
      className={clsx(
        className,
        align && `text-${align}`,
        wrap && `text-${wrap}`,
        bgHighlight && `bd-highlight`,
        breakText && `text-${breakText}`,
        transform && `text-${transform}`,
        size && `fs-${size}`,
        weight && `fw-${weight}`,
        italics && `fst-${italics}`,
        lineHeight && `lh-${lineHeight}`,
        monospace && `font-monospace`,
        resetColor && `text-reset`,
        decoration && `text-decoration-${decoration}`
      )}
      {...props}
    />
  );
};
