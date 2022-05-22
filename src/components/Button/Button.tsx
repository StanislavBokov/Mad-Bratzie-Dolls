import React, { FC, ReactElement, ReactNode } from "react";
import cn from 'clsx';

import styles from './styles.module.scss';

export interface ButtonProps {
    variant?: 'filled' | 'outlined';
    size?: 'lg' | 'md' | 'sm';
    disable?: boolean;
    icon?: boolean;
    children: ReactNode
}

export const Button:FC<ButtonProps> = ({ 
  variant = 'filled',
  size = 'sm', 
  disable = false, 
  icon, 
  children
}) => {
  return (
    <button className={cn(
      styles.button,
      styles[variant],
      styles[size],
      { [styles.disable]: disable },
      { [styles.icon]: icon }
    )}
    disabled={disable} 
    >
      {children}
    </button>
  );
};