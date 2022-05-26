import { FC, ReactNode } from 'react';

import cn from 'clsx';
import { CardSize, ColorTheme } from '../../types/components/card';
import styles from './styles.module.scss';

export interface CardProps {
  className?: string;
  children: ReactNode;
  size?: CardSize;
  colorBG?: ColorTheme;
}
export const Card: FC<CardProps> = ({ 
  children, 
  className,
  colorBG = 'dark',
  size = 'md'
}) => {
  return <div className={cn(styles.wrapper, className, styles[size], styles[colorBG])}>{children}</div>;
};
