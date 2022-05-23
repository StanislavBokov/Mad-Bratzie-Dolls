import { FC, ReactNode } from 'react';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface CardProps {
  className?: string;
  children: ReactNode;
}
export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
