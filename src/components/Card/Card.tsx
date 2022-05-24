import { FC, ReactNode } from 'react';

import cn from 'clsx';
import { CardSize } from '../../types/components/card';
import styles from './styles.module.scss';

export interface CardProps {
  className?: string;
  children: ReactNode;
  size?: CardSize
}
export const Card: FC<CardProps> = ({ 
  children, 
  className,
  size = 'md'
}) => {
  return <div className={cn(styles.wrapper, className, styles[size])}>{children}</div>;
};
