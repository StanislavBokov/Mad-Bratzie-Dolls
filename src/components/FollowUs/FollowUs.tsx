import React from 'react';

import cn from 'clsx';
import { H2, H3, Card } from '../index';
import { linksData } from './linksData';
import styles from './styles.module.scss';


export const FollowUs: React.FC = () => {
  return (
    <div id="follow">
      <H2 className={styles.title} align="center" weight="semiBold">Follow us</H2>
      <div className={styles.followUs}>
        {linksData.map(({ id, name, href, icon }) => (
          <a href={href} key={id} target="_blank" rel="noonpener noreferrer">
            <Card className={styles.followCard}>
              <img src={icon} alt={name} />
              <H3 className={styles.name} weight="medium">{name}</H3>
              
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};
