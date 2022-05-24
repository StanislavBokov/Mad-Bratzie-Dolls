import React from 'react';

import cn from 'clsx';
import { H1, H3, Card } from '../index';
import { linksData } from './linksData';
import styles from './styles.module.scss';


export const FollowUs: React.FC = () => {
  return (
    <div id="follow" className={styles.FolloweUs}>
      <H1 className={styles.title} align="center" weight="medium">Follow us</H1>
      <div className={styles.followCardWrapper}>
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
