import React from 'react'

import './index.scss'

const variants = ['primary', 'danger'];
type Variant = typeof variants[number];

export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: Variant
  inverted?: boolean,
}

function getVariantClass(variant?: string, opts?): string {
  const { prefix = 'ds-btn' } = opts || {};
  if (!variant || !variants.includes(variant))
    console.warn(`Unknown button variant: ${variant}`);
  return `${prefix}__${variant}`
}

function getInvertedClass(inverted?: boolean, opts?): string {
  const { prefix = 'ds-btn' } = opts || {};
  return inverted ? `${prefix}__inverted` : '';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', inverted, ...props }) => {
  const {children, className, ...rest} = props;

  const classes = [
    'ds-btn',
    getVariantClass(variant),
    getInvertedClass(inverted),
    className || '',
  ];
  let _className = classes.join(' ');

  return (
    <button className={_className} {...rest}>{children}</button>
  )
}
